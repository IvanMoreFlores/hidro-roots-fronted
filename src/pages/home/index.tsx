"use client";
import React, { useState } from "react";
import "./style.css";
import NavbarComponent from "@/components/navbar";
// import FooterComponent from "@/components/footer";
 import HeroComponent from "./components/hero";
import ProductsComponent from "./components/products";
// import DividerComponent from "./components/divider";
// import BenefictsComponent from "./components/beneficts";
// import FunctionsComponent from "./components/functions";
// import Section01Component from "@/components/section";
// import SpaceComponent from "./components/space";
// import ContComponent from "../about/components/contac";
// import UneComponent from "../about/components/unete";
// import CustComponent from "../membership/components/customers";
import Modal from "@/components/modal";


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="home-landing-page">
      <NavbarComponent />
      <main className="content">
         <HeroComponent />
        <ProductsComponent />
          {/*
        <DividerComponent />
        <BenefictsComponent />
        <DividerComponent />
        <FunctionsComponent />
        <Section01Component />
        <SpaceComponent />
        <CustComponent />
        <ContComponent />
        <UneComponent /> */}
      </main>
      {/* <FooterComponent /> */}
      <Modal isOpen={isModalOpen} onClose={closeModal} text="Hola, soy un modal!" />
    </div>
  );
};

export default HomePage;
