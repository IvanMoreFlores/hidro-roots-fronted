"use client";
import React from "react";
import "./styles.css";
import "../../app/globals.css";
import FooterComponent from "@/components/footer";
import MenComponent from "./components/membres";
import ImpComponent from "./components/inputs";
import ContComponent from "././../about/components/contac";
import UneComponent from "././../about/components/unete";
import StoreComponent from "./components/store"
import NavbarComponent from "@/components/navbar";

const MembershiPage = () => {
  return (
    <div className="landing-page">
      <NavbarComponent backgroundColor="rgba(255, 255, 255, 0.4)" />
      <main className="content">
        <MenComponent/>
        <ImpComponent/>
        <StoreComponent/>
        <ContComponent />
        <UneComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default MembershiPage;
