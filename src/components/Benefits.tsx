import { Shield, TrendingUp, Clock, Users } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Safer Decisions',
    description: 'Reduce the risk of bad hires with AI-powered veracity analysis based on scientific data.',
    gradient: 'from-primary-600 to-primary-700',
  },
  {
    icon: TrendingUp,
    title: 'Improve Your ROI',
    description: 'Save time and resources by identifying honest candidates from the first interview.',
    gradient: 'from-primary-600 to-primary-700',
  },
  {
    icon: Clock,
    title: 'Real-Time Analysis',
    description: 'Get instant insights during the interview with our intuitive dashboard and live alerts.',
    gradient: 'from-primary-600 to-primary-700',
  },
  {
    icon: Users,
    title: 'Eliminate Bias',
    description: 'Make objective decisions based on scientific data, not subjective intuitions.',
    gradient: 'from-primary-600 to-primary-700',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Why Choose{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              VeraciousVision?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
              Empower your hiring process with cutting-edge AI technology what help to know the truth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50"></div>

              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
