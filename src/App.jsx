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
      <div className="max-w-screen-lg m-auto">
        <Header />
      </div>
      <div  className="max-w-screen-lg m-auto">
        <Hero />
      </div>
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
