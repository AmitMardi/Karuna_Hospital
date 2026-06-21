import { departments } from '@/data/departments';
import { notFound } from 'next/navigation';
import { FadeIn, SlideUp } from '@/components/animations/FadeIn';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return departments.map((dept) => ({
    slug: dept.slug,
  }));
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const department = departments.find(d => d.slug === params.slug);

  if (!department) {
    notFound();
  }

  const Icon = department.icon;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <FadeIn>
          <Link href="/#departments" className="inline-flex items-center text-text-muted hover:text-primary transition-colors font-medium mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Departments
          </Link>
        </FadeIn>

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
          <SlideUp>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">{department.name}</h1>
                <p className="text-lg text-text-muted leading-relaxed mb-8">
                  {department.description}
                </p>

                <div className="bg-surface p-6 rounded-xl border border-gray-100 mb-8">
                  <h3 className="font-bold text-text mb-4 text-lg">Services Offered</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Placeholder services */}
                    {['Consultation', 'Diagnostic Services', 'Surgical Procedures', 'Emergency Care', 'In-patient Care', 'Post-treatment follow-up'].map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-text-muted">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/#contact"
                    className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-xl font-medium hover:bg-primary-dark transition-colors"
                  >
                    Book an Appointment
                  </Link>
                  <Link 
                    href="/doctors"
                    className="inline-flex items-center justify-center bg-surface-alt text-text px-8 py-3.5 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    View Specialists
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

      </div>
    </main>
  );
}
