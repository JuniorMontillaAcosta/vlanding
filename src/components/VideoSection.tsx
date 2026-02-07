import { useState } from 'react';
import { Play, X } from 'lucide-react';
import '@justinribeiro/lite-youtube';

// Add TypeScript declaration for the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lite-youtube': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { videoid: string };
    }
  }
}

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="video" className="py-16 lg:py-24 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Learn to Detect Lies vs Truths          
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10">
            Discover the secrets of facial micro-expressions and how our AI
            can revolutionize your hiring processes
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white text-primary-600 px-10 py-6 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 font-bold text-xl flex items-center space-x-3">
              <Play className="w-8 h-8 fill-current" />
              <span>Watch Educational Video</span>
            </div>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Cerrar video"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full aspect-video">
              <lite-youtube 
                videoid="sU-xYo6-edU" 
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
