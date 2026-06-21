import { SlideUp } from '../animations/FadeIn';

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <SlideUp>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop" 
                  alt="Hospital Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-primary text-white p-6 md:p-8 rounded-2xl shadow-lg max-w-[200px] md:max-w-[240px]">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Holistic Healing</h3>
                <p className="text-primary-light text-sm">Treating the whole patient, not just symptoms.</p>
              </div>
            </div>
          </SlideUp>

          <div className="flex flex-col gap-6">
            <SlideUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Committed to the Health of Our Community
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-text-muted leading-relaxed text-lg">
                Karuna Holistic Hospital and Institute of Medical Science serves the Buniadpur, Narayanpur, and Kaliyaganj community in West Bengal with round-the-clock care.
              </p>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-text-muted leading-relaxed">
                Our mission revolves around <strong>holistic healing</strong>. We believe in an approach that cares for the whole person, ensuring that treatments are not only effective but also affordable and delivered with deep compassion.
              </p>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* TODO: verify actual hospital stats */}
                <div className="bg-surface p-6 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-text-muted font-medium">Years of Service</div>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-text-muted font-medium">Hospital Beds</div>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-text-muted font-medium">Expert Doctors</div>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">10k+</div>
                  <div className="text-sm text-text-muted font-medium">Patients Served</div>
                </div>
              </div>
            </SlideUp>
          </div>

        </div>
      </div>
    </section>
  );
}
