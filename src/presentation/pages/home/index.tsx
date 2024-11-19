"use client";
import React from "react";
import "./style.css";
import FooterComponent from "@/presentation/components/footer";
import NavbarComponent from "@/presentation/components/navbar";
import HeroComponent from "./components/hero";
import ProductsComponent from "./components/products";
import DividerComponent from "./components/divider";
import BenefictsComponent from "./components/beneficts";
import FunctionsComponent from "./components/functions";
import Section01Component from "@/presentation/components/section";


const HomePage = () => {
  return (
    <div className="landing-page">
      <NavbarComponent />
      <main className="content">
        <HeroComponent />
        <ProductsComponent />
        <DividerComponent />
        <BenefictsComponent />
        <DividerComponent />
        <FunctionsComponent />
        <Section01Component/>
      
      </main>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
