import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopArticles />
    </div>
  );
};

export default page;
