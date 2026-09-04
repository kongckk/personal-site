import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Agenda } from "@/components/Agenda";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:[clip:auto]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Agenda />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
