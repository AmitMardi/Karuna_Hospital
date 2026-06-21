import Link from 'next/link';
import { doctors } from '../../data/doctors';
import { SlideUp, FadeIn } from '../animations/FadeIn';

export function DoctorsPreview() {
  // Only show first 4 doctors on the home page preview
  const previewDoctors = doctors.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Meet Our Experts</h2>
              <p className="text-text-muted text-lg">
                Our team of dedicated specialists brings years of experience and compassionate care to every patient.
              </p>
            </FadeIn>
          </div>
          <SlideUp delay={0.2} className="shrink-0">
            <Link 
              href="/doctors"
              className="inline-flex items-center justify-center bg-primary/10 text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors"
            >
              View All Doctors
            </Link>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {previewDoctors.map((doc, index) => (
            <SlideUp key={doc.id} delay={index * 0.1}>
              <div className="group rounded-2xl overflow-hidden bg-surface border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-text mb-1">{doc.name}</h3>
                  <p className="text-primary font-medium mb-2">{doc.specialty}</p>
                  <p className="text-sm text-text-muted mt-auto">{doc.qualifications}</p>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

      </div>
    </section>
  );
}
