"use client";
import React from "react";
import "./styles.css";
import "../../app/globals.css";
//import FooterComponent from "@/components/footer";
//import ContComponent from "../about/components/contac";
//import UneComponent from "../about/components/unete";
import HComponent from "./components/hidro-m/index";
import StormenComponent from "./components/store-men/index";
//import ServiComponent from "./components/servic/index";
//import SpacebComponent from "./components/build-m/index";
//import CustComponent from "./components/customers/index";
import NavbarComponent from "@/components/navbar";

const HydromenPage = () => {
  return (
    <div className="memberships-landing-page">
      <NavbarComponent backgroundColor="rgba(188, 235, 241, 0.6)" />
      <main className="content">
        <HComponent />
      <StormenComponent />
        {/* 
        <ServiComponent />
        <SpacebComponent /> */}
        {/* <CustComponent />
        <ContComponent />
        <UneComponent /> */}
      </main>
      {/* <FooterComponent /> */}
    </div>
  );
};

export default HydromenPage;
