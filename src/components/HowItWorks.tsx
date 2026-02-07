import { Upload, ScanFace, BarChart3, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload your interview',
    description: 'Integrate VeraciousVision with your video call platform or upload interview recordings in any format.',
  },
  {
    icon: ScanFace,
    number: '02',
    title: 'AI Analysis',
    description: 'Our computer vision technology analyzes micro-expressions, eye movements, and facial patterns in real-time.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Receive Insights',
    description: 'Get a detailed report with veracity metrics, areas of concern, and data-driven recommendations.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Make Decisions',
    description: 'Use the information to make more informed hires and reduce risks in your team.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How it Works{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Our Technology
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            A simple and effective process that seamlessly integrates with your workflow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white text-primary-600 font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center border-2 border-primary-300">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Seamless Integration with Your Tools
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Compatible with Zoom, Google Meet, Microsoft Teams, Linkedin, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">Zoom</span>
            <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">Google Meet</span>
            <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">Microsoft Teams</span>
            <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">Linkedin</span>
            <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">API REST</span>
          </div>
        </div>
      </div>
    </section>
  );
}
