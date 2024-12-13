"use client";
import React from "react";
import "./styles.css";
import "../../app/globals.css";
//import FooterComponent from "@/components/footer";
import HidroStor from "./components/hidro-store/index";
//import MinistoreComponent from "./components/mini-store/index";
//import BuildComponent from "./components/we-build/index";
//import ContComponent from "../about/components/contac";
//import UneComponent from "../about/components/unete";
import NavbarComponent from "@/components/navbar";

const HdirostoreComponent = () => {
  return (
    <div className="landing-page">
      <NavbarComponent backgroundColor="rgba(255, 255, 255, 0.4)" />
      <main className="content">
        <HidroStor />
        {/* <BuildComponent />
        <MinistoreComponent /> */}
        {/* <ContComponent />
        <UneComponent /> */}
      </main>
      {/* <FooterComponent /> */}
    </div>
  );
};

export default HdirostoreComponent;
