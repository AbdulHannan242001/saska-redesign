import React from "react";
import HomeBanner from "./HomeComponents/HomeBanner";
import About from "./HomeComponents/About";
import Services from "./HomeComponents/Services";
import Projects from "./HomeComponents/Projects";
import Team from "./HomeComponents/Team";
import Testimonials from "./HomeComponents/Testimonials";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
    </main>
  );
};

export default Home;
