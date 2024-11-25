"use client";
import React from "react";
import "./styles.css";
import Nav1Component from "./components/navbar";
import FooterComponent from "@/presentation/components/footer";
import ContComponent from "././../about/components/contac";
import UneComponent from "././../about/components/unete";
import HComponent from "./components/hidro-m/index";
import StormenComponent from "./components/store-men/index"

const HydromenPage = () => {
  return (
    <div className="landing-page">
      <Nav1Component />
      <main className="content">
        <HComponent />
        <StormenComponent />
        <ContComponent />
        <UneComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default HydromenPage;
