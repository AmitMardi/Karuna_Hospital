import { Hero } from "@/components/home/Hero";
import { AboutUs } from "@/components/home/AboutUs";
import { DepartmentsGrid } from "@/components/home/DepartmentsGrid";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Gallery } from "@/components/home/Gallery";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AboutUs />
      <DepartmentsGrid />
      <DoctorsPreview />
      <FacilitiesSection />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
