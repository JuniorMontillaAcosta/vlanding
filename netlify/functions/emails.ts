import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

interface EmailBody {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  turnstileToken: string;
}

// Función para verificar el token de Turnstile
async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return false;
  }
}

const handler: Handler = async (event) => {
  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body: EmailBody = JSON.parse(event.body || '{}');

    // Validar campos requeridos
    if (!body.name || !body.email || !body.company) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Verificar token de Turnstile
    if (!body.turnstileToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing security verification token' }),
      };
    }

    const isValidToken = await verifyTurnstileToken(body.turnstileToken);
    if (!isValidToken) {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: 'Security verification failed. Please try again.' }),
      };
    }

    // Enviar email via Resend
    const response = await resend.emails.send({
      from: 'info@mail.veraciousvision.cv',
      to: 'jomadevsoft@gmail.com',
      subject: 'Demo Request from Contact Form VeraciousVision.cv',
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(body.company)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>
        <p><strong>Message:</strong> ${escapeHtml(body.message)}</p>
      `,
    });

    if (response.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: response.error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: response.data }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};

// Función para escapar HTML y prevenir XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export { handler };
