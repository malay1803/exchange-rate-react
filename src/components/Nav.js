import React from "react";
import {LogoStyle, BaseCurrContainerStyle} from "./Nav.style"
import logoBrand from '../assets/images/currex.png'
import { NavStyle } from "./Nav.style";

const nav = () => {
  return (
    <NavStyle>
      <div>
        <LogoStyle src={logoBrand} alt="" />
      </div>

      <BaseCurrContainerStyle>
        <p>BASE CURRENCY</p>
        <button disabled>
          USD
          <img
            src="https://img.icons8.com/color/48/000000/usa.png"
            alt="indianFlag"
          />
        </button>
      </BaseCurrContainerStyle>
    </NavStyle>
  );
};

export default nav;
