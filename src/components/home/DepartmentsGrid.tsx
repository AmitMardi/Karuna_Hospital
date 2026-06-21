import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { departments } from '../../data/departments';
import { SlideUp, FadeIn } from '../animations/FadeIn';

export function DepartmentsGrid() {
  return (
    <section id="departments" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Departments</h2>
            <p className="text-text-muted text-lg">
              Providing comprehensive care across multiple specialties with expert medical professionals.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <SlideUp key={dept.id} delay={index * 0.1}>
                <Link 
                  href={`/departments/${dept.slug}`}
                  className="group flex flex-col h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{dept.name}</h3>
                  <p className="text-text-muted mb-6 flex-grow">{dept.description}</p>
                  
                  <div className="flex items-center text-primary font-medium mt-auto group-hover:translate-x-2 transition-transform">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </SlideUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
