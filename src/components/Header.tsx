import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/VeraciousVision-black.png" 
              alt="VeraciousVision Logo" 
              className="h-14 lg:h-16 w-auto dark:hidden"
            />
            <img 
              src="/VeraciousVision-web-version.png" 
              alt="VeraciousVision Logo" 
              className="h-14 lg:h-16 w-auto hidden dark:block"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Benefits
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              How It Works
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Request Demo
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-left">
                Benefits
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-left">
                How It Works
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-left">
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 hover:shadow-lg transition-all duration-300 font-semibold text-center"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
