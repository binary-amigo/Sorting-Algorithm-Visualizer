import React from "react";
// import "./SortingVisualizer.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Visualizer from "../components/Visualizer";
import AlgorithmControls from "../components/AlgorithmControls";
import AlgorithmInfo from "../components/AlgorithmInfo";
import Features from "../components/Features";
import Tutorial from "../components/Tutorial";
import Footer from "../components/Footer";



export const SortingVisualizer = () => {
  

  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 relative">
        <Hero />
        <Visualizer />
        {/* <AlgorithmControls /> */}
        <AlgorithmInfo />
        <Features />
        <Tutorial />
        {/* <Performance /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};



// export default SortingVisualizer;

