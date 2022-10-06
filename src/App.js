import React from "react";
import About from "./Components/About";
import CTA from "./Components/CTA";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <div className="md:px-[15rem] lg:px-[10rem]  px-[1rem]">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Testimonials />
      </div>
      <div className="px-0 boder-t-[1px] bg-heading mt-[3rem] h-[1px]"></div>
      <div className="md:px-[15rem]  px-[3rem]">
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
