import { useState } from "react";
import "./App.css";

import {
  Header,
  Hero,
  About,
  FeaturedProjects,
  TechSkills,
  Footer,
  Contact,
} from "./containers/containers-index.js";

function App() {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="px-14">
        <Hero />
        <About />
        <FeaturedProjects />
        <TechSkills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
