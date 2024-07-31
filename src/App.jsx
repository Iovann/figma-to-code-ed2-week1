import React from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import CollectionCard from "./components/CollectionCard"
import { Collections } from "./common/data"
function App() {

  return (
    <>
      <Navbar />
      <section className="container">
        <HeroSection />
        <p className="fw-bold fs-4">Our Collection</p>
        <div className="d-flex justify-content-md-between fw-semibold align-items-end flex-wrap">
          <p className="d-flex align-items-end flex-wrap mb-3">
            <button className="btn btn-dark px-lg-3 px-2 me-lg-2 me-1 mt-2 mt-md-2">All categories</button>
            <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 categorieButton ">Art</button>
            <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 categorieButton ">Celebrities</button>
            <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 categorieButton ">Gaming</button>
            <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 categorieButton ">Sport</button>
            <p className="text-end text-decoration-underline link-offset-2-hover mx-2 d-md-none">View more</p>
          </p>
          <p className="text-end text-decoration-underline link-offset-2-hover d-none d-md-inline">View more</p>
        </div>
        <div className="row g-3 justify-content-lg-between justify-content-center">
          {Collections.map((item, index) => (
            <CollectionCard key={index} image={item.image} cardTitle={item.cardTitle} />
          ))}
        </div>
      </section>
    </>
  )
}

export default App
