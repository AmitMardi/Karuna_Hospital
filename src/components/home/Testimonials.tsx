import { testimonials } from '../../data/testimonials';
import { SlideUp, FadeIn } from '../animations/FadeIn';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-primary-light text-lg">
              Honest feedback from the community we proudly serve.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideUp key={testimonial.id} delay={index * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl h-full flex flex-col">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`} 
                    />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-8 flex-grow">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

      </div>
    </section>
  );
}
