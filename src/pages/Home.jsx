import React, { useRef } from 'react';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import Talks from '../components/Talks';
import Brain from '../components/Brain';
import Footer from '../components/Footer';

const Home = () => {
  const containerRef = useRef(null);

  return (
    <div className="container" ref={containerRef}>
      <Hero />
      <Experience />
      <Expertise />
      <Projects />
      <Talks />
      <Brain />
      <Footer />
    </div>
  );
};

export default Home;
