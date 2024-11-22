"use client";
import React from "react";
import "./style.css";
import NavbarComponent from "@/presentation/components/navbar";
import FooterComponent from "@/presentation/components/footer";
import AboutUsComponent from "./components/about-us";
import VisionComponent from "./components/vision";
import DesignnComponent from "./components/designn";
import ContComponent from "./components/contac";
import UneComponent from "./components/unete";


const AboutPage = () => {
  return (
    <div className="landing-page">
      <NavbarComponent />
      <main className="content">
        <AboutUsComponent />
        <VisionComponent />
        <DesignnComponent />
        <ContComponent />
        <UneComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default AboutPage;
