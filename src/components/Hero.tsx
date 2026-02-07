import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 -z-10"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Advanced Computer Vision Technology</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
            Discover the{' '}
            <span className="text-primary-600">
              Hidden Truth
            </span>
            <br />
            in Every Interview inside a Gesell room
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            VeraciousVision uses artificial intelligence and facial micro-expression analysis to help you make more informed and accurate hiring decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Request a Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('video')}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-600 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg border-2 border-primary-300 w-full sm:w-auto"
            >
              See How It Works
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto pt-8 border-t border-gray-200 animate-fade-in-up delay-500">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1">99%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1">10</div>
              <div className="text-sm text-gray-600">Gesell Rooms</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1">100</div>
              <div className="text-sm text-gray-600">Interviews</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
