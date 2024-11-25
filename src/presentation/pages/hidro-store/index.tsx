"use client";
import React from "react";
import "./styles.css";
import NavComponent from "../membership/components/navbar";
import FooterComponent from "@/presentation/components/footer";
import HidroStor from "./components/hidro-store/index";
import MinistoreComponent from "./components/mini-store/index"
import BuildComponent from "./components/we-build/index"
import ContComponent  from "../about/components/contac"
import UneComponent from "../about/components/unete"

const HdirostoreComponent = () => {
    return (
        <div className="landing-page">
            <NavComponent />
            <main className="content">
                <HidroStor />
                <BuildComponent/>
                <MinistoreComponent/>
                <ContComponent/>
                <UneComponent/>
            </main>
            <FooterComponent />
        </div>
    );
};

export default HdirostoreComponent;
