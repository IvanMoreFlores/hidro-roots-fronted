// src/presentation/pages/LandingPage.tsx
import React from "react";
import ComponentNavbar from "../components/navbar";
import FooterComponent from "../components/footer";
import './style.css'; // Importa tu CSS de estilos si es necesario

const LandingPage = () => {
  return (
    <div className="landing-page">
      <ComponentNavbar />
      <main className="content">
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>Bienvenido a mi landing page</h1>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
};

export default LandingPage;

