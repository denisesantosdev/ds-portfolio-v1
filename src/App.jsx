import { useState } from "react";
import "./App.css";

import {
  Header,
  Hero,
  About,
  FeaturedProjects,
  TechSkills,
  Footer,
  Contact
} from "./containers/containers-index.js";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <FeaturedProjects />
      <TechSkills />
      <Contact />
      <Footer />
      <button className="btn btn-primary">Button</button>
    </>
  );
}

export default App;
