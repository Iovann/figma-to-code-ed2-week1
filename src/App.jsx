import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CollectionsRow from "./components/CollectionsRow";
import SellRow from "./components/SellRow";
import BeforeFooter from "./components/BeforeFooter";
function App() {
  return (
    <>
      <Navbar />
      <section className="container">
        <HeroSection />
        <CollectionsRow/>
        <SellRow/>
        <BeforeFooter/>
      </section>
      <Footer />
    </>
  );
}

export default App;
