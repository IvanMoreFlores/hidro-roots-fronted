import React from "react";
import "./styles.css";
import DividerComponent from "../divider";
import ButtonContainer from "../buttons/ButtonContainer"

const ImpComponent = () => {
  return (
    <div className="container-home-hero-vi">
      <div className="div2">
        <DividerComponent width="750px" height="1px" color=" background: rgba(229, 229, 229, 1);
)" />
      </div>
      <ButtonContainer />

      <DividerComponent width="750px" height="1px" color=" background: rgba(229, 229, 229, 1);
)" />
     
    </div>




  );
}

export default ImpComponent;
