import React from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import CollectionCard from "./components/CollectionCard"
import SellCard from "./components/SellCard"
import Footer from "./components/Footer"
import { Collections, Sell } from "./common/data"
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
            <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 neutralBackground">Art</button>
            <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 neutralBackground">Celebrities</button>
            <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 neutralBackground">Gaming</button>
            <button className="btn px-lg-3 px-2 mx-lg-2 mx-1 mt-2 mt-md-2 neutralBackground">Sport</button>
            <p className="text-end text-decoration-underline link-offset-2-hover mx-2 d-md-none">View more</p>
          </p>
          <p className="text-end text-decoration-underline link-offset-2-hover d-none d-md-inline">View more</p>
        </div>
        <div className="row g-3 justify-content-lg-between justify-content-center pt-3 pb-5">
          {Collections.map((item, index) => (
            <CollectionCard key={index} image={item.image} cardTitle={item.cardTitle} />
          ))}
        </div>
        <p className="fw-bold fs-4 pb-4">Create and Sell Now</p>
        <div className="row g-3 justify-content-lg-between justify-content-center pt-3 pb-5">
          {Sell.map((item, index) => (
            <SellCard key={index} image={item.image} cardTitle={item.cardTitle} />
          ))}
        </div>

        <div className="build py-5 w-100 text-center lh-1 d-flex flex-column align-items-center my-3 rounded-5">
            <p className="text-white display-1 fw-bold">Build your NFT profile</p><br />
            <p className="text-white fw-bold">Join almost 10k NFT profiles on Digit !</p><br />
            <button className="btn btn-light px-3 fw-semibold rounded-pill">Sign up now</button>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default App
