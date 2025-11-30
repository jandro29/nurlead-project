import Header from "@/components/layout/Header";
import Banner from "@/features/home/components/Banner";
import Footer from "@/components/layout/Footer";
import Categories from "@/features/home/components/Categories";
import Advantages from "@/features/home/components/Advantages";
import Stats from "@/features/home/components/Stats";
import PopularClasses from "@/features/home/components/PopularClasses";
import Community from "@/features/home/components/Community";
import Teachers from "@/features/home/components/Teachers";
import Testimonials from "@/features/home/components/Testimonials";
import Teams from "@/features/home/components/Teams";
import FAQ from "@/features/home/components/FAQ";
import { useRef } from "react";
import { useSnapScroll } from "@/hooks/useSnapScroll";
import Section from "@/components/ui/Section";

export default function HomePage() {
  const containerRef = useRef<HTMLElement>(null)
  useSnapScroll(containerRef, { throttleMs: 450 })
  return (
    <>
      <Header />
      <main ref={containerRef} className="snap-y snap-mandatory overscroll-contain h-screen overflow-y-auto scroll-smooth" tabIndex={0}>
        <Banner />
        <Categories />
        <Advantages />
        <Stats />
        <PopularClasses />
        <Community />
        <Teachers />
        <Testimonials />
        <Teams />
        <Section title="Preguntas Frecuentes" className="items-start">
          <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-between">
            <FAQ wrapInSection={false} />
            <Footer className="mt-0" />
          </div>
        </Section>
      </main>
    </>
  );
}
