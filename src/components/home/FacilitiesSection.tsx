import { facilities } from '../../data/facilities';
import { SlideUp, FadeIn } from '../animations/FadeIn';

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Facilities</h2>
            <p className="text-text-muted text-lg">
              Equipped with modern amenities to ensure the best possible care and comfort for our patients.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <SlideUp key={facility.id} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 h-full">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">{facility.name}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
