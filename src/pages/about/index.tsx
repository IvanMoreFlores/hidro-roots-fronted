"use client";
import React from "react";
import "./style.css";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import AboutUsComponent from "./components/about-us";
import VisionComponent from "./components/vision";
import DesignnComponent from "./components/designn";
import ContComponent from "./components/contac";
import UneComponent from "./components/unete";
import "../../app/globals.css";

const AboutPage = () => {
  return (
    <div className="about-landing-page">
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
