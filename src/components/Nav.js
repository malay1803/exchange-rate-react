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
          INR
          <img
            src="https://img.icons8.com/color/48/000000/india.png"
            alt="indianFlag"
          />
        </button>
      </BaseCurrContainerStyle>
    </NavStyle>
  );
};

export default nav;
