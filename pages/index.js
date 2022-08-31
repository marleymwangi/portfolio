import { useEffect, useState } from "react";
import Head from 'next/head'
import About from '../components/about'
import BackgroundAnimation from '../components/backAnimation'
import Contact from '../components/contact'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Projects from '../components/projects'
import Resume from '../components/resume'
import Skills from '../components/skills'
import ScrollElement from "../components/scrollElement";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <Head>
        <title>Bob Mwangi. Portfolio</title>
        <meta name='description' content="I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations." />
        <meta property="og:title" content="Bob Mwangi. Portfolio" />
        <meta property="og:description" content="I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations." />
        <meta property="og:url" content="https://bobmwangi.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <div className="container">
        <section className="hero">
          <Hero />
          <BackgroundAnimation />
        </section>
        <Projects />
        <Resume />
        <Skills />
        <About />
        <Contact />
      </div>
      <div className="scroll-to-top">
        <ScrollElement isVisible={isVisible} scrollToTop={scrollToTop} />
      </div>
    </>
  )
}
