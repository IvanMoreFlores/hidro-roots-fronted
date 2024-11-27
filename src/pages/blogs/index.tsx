"use client";
import React from "react";
import "./styles.css";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
// import BloComponent from "./components/store-blog/index";
import Us1Component from "./components/hero-blogs/index";
import "../../app/globals.css";
import BloComponent from "./components/store-blog";
import ContComponent from "../about/components/contac";
import UneComponent from "../about/components/unete";
const AboutPage = () => {
  return (
    <div className="blog-landing-page">
      <NavbarComponent />
      <main className="content">
        <Us1Component />
        <BloComponent />
        <ContComponent />
        <UneComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default AboutPage;
