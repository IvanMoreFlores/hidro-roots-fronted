"use client";
import React from "react";
import "./styles.css";
import "../../app/globals.css";
import NavComponent from "./components/navbar";
import FooterComponent from "@/components/footer";
import MenComponent from "./components/membres";
import ImpComponent from "./components/inputs";
import ContComponent from "././../about/components/contac";
import UneComponent from "././../about/components/unete";
import StoreComponent from "./components/store"

const MembershiPage = () => {
  return (
    <div className="landing-page">
      <NavComponent />
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
