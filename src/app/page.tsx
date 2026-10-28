"use client";

import { useEffect } from "react";
import Intro from "@/components/Intro";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Music from "@/components/Music";
import Arcade from "@/components/Arcade";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ResumeModal from "@/components/ResumeModal";
import AskModal from "@/components/AskModal";
import { initPortfolio } from "@/lib/portfolio";

export default function Home() {
  // Runs once after the markup is in the DOM: wires up scroll, Play view, games, diagrams, music...
  useEffect(() => {
    initPortfolio();
  }, []);

  return (
    <>
      <Intro />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Music />
        <Arcade />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ResumeModal />
      <AskModal />
    </>
  );
}
