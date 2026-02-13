import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, ArrowUp, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* Dark Mode Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-24 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/VeraciousVision-web-version-transparente.png" 
                alt="VeraciousVision Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Computer vision and AI technology to detect truthfulness in job interviews.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#benefits" className="hover:text-primary-400 transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@veraciousvision.com" className="hover:text-primary-400 transition-colors">
                  info@veraciousvision.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+18296861017" className="hover:text-primary-400 transition-colors">
                  +1 829 686 1017
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Av. Hugo Chavez
                      F, 5, 14
                      LiFi Valley, DO 11906</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
                © {currentYear}{' '}
                <a
                  href="https://kitdevelop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  Kitdevelop
                </a>
                . All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Cookies
              </a>
              <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
              Made with code and <Heart className="w-4 h-4 text-purple-500 fill-current" /> in LiFi Valley
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
