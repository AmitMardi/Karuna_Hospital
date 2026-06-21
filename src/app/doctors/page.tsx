import { doctors } from '@/data/doctors';
import { FadeIn, SlideUp } from '@/components/animations/FadeIn';

export default function DoctorsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">Our Doctors</h1>
            <p className="text-text-muted text-lg leading-relaxed">
              Meet our team of experienced and compassionate specialists dedicated to providing the best healthcare services in Buniadpur.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <SlideUp key={doc.id} delay={index * 0.1}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-text mb-2">{doc.name}</h3>
                  <p className="text-primary font-medium mb-3 text-lg">{doc.specialty}</p>
                  <p className="text-sm text-text-muted mt-auto mb-4">{doc.qualifications}</p>
                  <a 
                    href="/#contact" 
                    className="inline-flex w-full items-center justify-center bg-surface-alt text-text-muted px-4 py-2.5 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </main>
  );
}
