import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
