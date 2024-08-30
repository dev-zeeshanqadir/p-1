import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousol from "../components/Carousol";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousol/>
      <div className="m-3">
        <Card/>
        <Card/>
        <Card/>    
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
