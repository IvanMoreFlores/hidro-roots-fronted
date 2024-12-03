import React from "react";
import "./styles.css";
import ButtonContainer from "../buttons/ButtonContainer";
//import DropdownMenu from "../dropdown-menu";
//import DividerComponent from "@/components/divider";
const ImpComponent = () => {
  return (
    <div className="producto-container-hero">
      {/* <DividerComponent
        width="750px"
        height="1px"
        color="rgba(229, 229, 229, 1)"
      /> */}
      <ButtonContainer />
      {/* <DropdownMenu />
      <DividerComponent
        width="750px"
        height="1px"
        color="rgba(229, 229, 229, 1)"
      /> */}
    </div>
  );
};

export default ImpComponent;
