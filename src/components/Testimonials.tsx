import { Star, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    position: 'HR Director',
    company: 'TechCorp Solutions',
    content: 'VeraciousVision has completely transformed our hiring process. We\'ve reduced bad hires by 73% and saved thousands of dollars in employee turnover.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
  {
    name: 'Carlos Ramírez',
    position: 'CEO',
    company: 'InnovateNow',
    content: 'The tool\'s accuracy is impressive. It helped us identify inconsistencies in candidates who seemed perfect on paper but were hiding crucial information.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
  {
    name: 'Ana Martínez',
    position: 'Head of Talent Acquisition',
    company: 'Global Enterprises',
    content: 'What I value most is the objectivity it provides. It eliminates unconscious biases and allows us to make decisions based on scientific data. It\'s an indispensable tool.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What They Say About{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
              Our Clients
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Leading companies trust VeraciousVision to optimize their hiring processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-200 dark:border-primary-600"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</div>
                  <div className="flex items-center space-x-1 text-xs text-primary-600 dark:text-primary-400 mt-1">
                    <Building2 className="w-3 h-3" />
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 px-8 py-6 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 dark:text-primary-400">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-primary-300 dark:bg-primary-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 dark:text-primary-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Satisfied Clients</div>
            </div>
            <div className="h-12 w-px bg-primary-300 dark:bg-primary-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 dark:text-primary-400">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
