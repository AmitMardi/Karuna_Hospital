import { Phone, CalendarCheck, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, SlideUp } from '../animations/FadeIn';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-white/80 md:bg-white/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              24x7 Emergency Services Available
            </div>
          </FadeIn>

          <SlideUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Compassionate, Affordable Healthcare for Buniadpur and Beyond
            </h1>
          </SlideUp>

          <SlideUp delay={0.2}>
            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl leading-relaxed">
              Serving the community with holistic medical care. We combine advanced treatments with deep compassion to ensure the well-being of every patient.
            </p>
          </SlideUp>

          <SlideUp delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-dark transition-all shadow-md hover:shadow-lg text-lg"
            >
              <CalendarCheck className="w-5 h-5" />
              Book an Appointment
            </Link>
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white text-text border border-gray-200 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow text-lg"
            >
              <Phone className="w-5 h-5 text-primary" />
              Call Emergency Helpline
            </a>
          </SlideUp>

          {/* Trust Badges */}
          <FadeIn delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200/60">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-text-muted">Open 24×7 · 365 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-text-muted">4.0★ Patient Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-text-muted">Wheelchair Accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-text-muted">Affordable Care</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
