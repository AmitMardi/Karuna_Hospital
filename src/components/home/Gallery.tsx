import { SlideUp, FadeIn } from '../animations/FadeIn';

const IMAGES = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', // Hospital corridor
  'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop', // Doctor patient
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop', // Equipment
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop', // Building
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Hospital Gallery</h2>
            <p className="text-text-muted text-lg">
              Take a look inside our facilities designed for optimal patient care and comfort.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.map((src, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer bg-surface">
                <img 
                  src={src} 
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-lg backdrop-blur-sm">View Image</span>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

      </div>
    </section>
  );
}
