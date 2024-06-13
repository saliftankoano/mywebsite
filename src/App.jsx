import React from "react";
import Header from "./components/sections/header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/services";
import About from "./components/sections/about";
import Portfolio from "./components/sections/portfolio";
import Testimonial from "./components/sections/testimonial";
import Contact from "./components/sections/contact/contact";
import Footer from "./components/sections/footer";
import ProgressBar from "./components/ui/progressBar";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      <ProgressBar />
    </main>
  );
};

export default App;
