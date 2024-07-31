import React from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
function App() {

  return (
    <>
      <Navbar />
      <section className="container">
        <HeroSection/>
      </section>
    </>
  )
}

export default App
