"use client";
import React from "react";
import "./styles.css";
import NavComponent from "../membership/components/navbar";
import FooterComponent from "@/presentation/components/footer";
import HidroStor from "./components/hidro-store/index";


const HdirostoreComponent = () => {
    return (
        <div className="landing-page">
            <NavComponent />
            <main className="content">
                <HidroStor />
            </main>
            <FooterComponent />
        </div>
    );
};

export default HdirostoreComponent;
