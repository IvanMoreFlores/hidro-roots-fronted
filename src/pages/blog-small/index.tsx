"use client";
import React from "react";
import "./styles.css";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import BloComponent from "./components/store-blog/index"
import Us1Component from "./components/a/index";
const AboutPage = () => {
  return (
    <div className="blog-landing-page">
      <NavbarComponent />
      <main className="content">
        <Us1Component/>
        <BloComponent/>
        
        
      </main>
      <FooterComponent />
    </div>
  );
};

export default AboutPage;
