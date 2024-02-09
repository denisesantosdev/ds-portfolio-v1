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
      <div className="mb-16">
        <Header />
      </div>
      <div className="px-14 grid gap-32 mb-32">
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
