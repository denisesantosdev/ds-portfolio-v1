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
      <div className="mb-16 max-w-screen-xl m-auto">
        <Header />
      </div>
      <div className="mb-10 md:mb-40 max-w-screen-xl m-auto px-14">
        <Hero />
      </div>
      <div className="px-14 grid gap-40 mb-32 max-w-screen-lg m-auto">
        <About />
        <FeaturedProjects />
        <TechSkills />
        <Contact />
      </div>
      <div className="max-w-screen-xl m-auto">
        <Footer />
      </div>
    </>
  );
}

export default App;
