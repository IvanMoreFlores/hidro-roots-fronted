import FooterComponent from "@/components/footer";
import NavbarComponent from "@/components/navbar";
import React from "react";
import HeroComponentConact from "./components/hero";
import "../../app/globals.css";
import ConComponent from "./components/lista";

const ConactPage = () => {
  return (
    <div className="contact-landing-page">
      <NavbarComponent />
      <main className="content">
        <HeroComponentConact />
        <ConComponent/>
      </main>
      <FooterComponent />
    </div>
  );
};

export default ConactPage;
