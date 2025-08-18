import React from "react";
import HomeBanner from "./HomeComponents/HomeBanner";
import About from "./HomeComponents/About";
import Services from "./HomeComponents/Services";
import ManagedITTeaser from "./HomeComponents/ManagedITTeaser";
import Projects from "./HomeComponents/Projects";
import Team from "./HomeComponents/Team";
import Testimonials from "./HomeComponents/Testimonials";
import Contact from "./HomeComponents/Contact";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <About />
      <Services />
      <ManagedITTeaser />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
