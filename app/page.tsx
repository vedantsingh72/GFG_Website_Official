"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import UpcomingEvents from "@/components/upcoming-events";
import PastEvents from "@/components/past-events";
import Teams from "@/components/teams";
import Resources from "@/components/resources";
import JoinGfg from "@/components/join-gfg";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <main className="relative min-h-screen">
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />
      
      {/* Updated IDs to match your navItems exactly */}
      <section id="home">
        <Hero scrollToSection={scrollToSection} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="upcomingEvents"> {/* Changed from upcoming-events */}
        <UpcomingEvents />
      </section>

      <section id="pastEvents"> {/* Changed from past-events */}
        <PastEvents />
      </section>

      <section id="teams">
        <Teams />
      </section>

      <section id="resources">
        <Resources />
      </section>

      <section id="joinGFG"> {/* Changed from join-gfg */}
        <JoinGfg />
      </section>

      <Footer scrollToSection={scrollToSection} />
    </main>
  );
}