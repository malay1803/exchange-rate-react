import React from "react";
import {ConverterBox} from "../components/Converter.style"
import CurrencyExchange from "./CurrencyExchange";

const Converter = () => {
  return (
    <ConverterBox>
      <div className="converterText">
        <h1>currency <br/> converter</h1>
        <p>Choose the currency and the <br/> amounts to get the exchange rate</p>
      </div>
      <CurrencyExchange />
    </ConverterBox>
  );
};

export default Converter;
