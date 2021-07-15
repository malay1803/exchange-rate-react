import React, { useEffect, useState } from "react";
import axios from "axios";
import Amount from "./Amount";
import { options } from "./Option.array";

const CurrencyExchange = () => {
  const [firstCurr, setFIrstCurr] = useState("USD");
  const [secondCurr, setSecondCurr] = useState("INR");
  const [currentRate, setCurrentRate] = useState(74.55);
  const [amount, setAmount] = useState(0);
  const [amountConverted, setAmountConverted] = useState(74.55);

  if (amountConverted === null || currentRate === null) {
    setAmountConverted(74.55);
    setCurrentRate(74.55);
  }

  const getAmount = async () => {
    const res = await axios.get(
      `https://api.exchangerate.host/convert?from=${firstCurr}&to=${secondCurr}&amount=${amount}&base=USD`
    );
    // console.log(res);
    setCurrentRate(res.data.info.rate);
    setAmountConverted(res.data.result);
  };

  const onFirstCurrChange = (e) => {
    setFIrstCurr(e.target.value);
    setAmount(0);
    getAmount();
  };

  const onSecondCurrChange = (e) => {
    setSecondCurr(e.target.value);
    setAmount(0);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    getAmount();
  }, [amount]);

  return (
    <>
      <div className="convertor">
        <div className="from">
          <label htmlFor="currency1">From</label>
          <select
            name="currency1"
            onChange={onFirstCurrChange}
            defaultValue={firstCurr}
            id="currency1"
          >
            {options.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>

        <div className="to">
          <label htmlFor="currency2">To</label>
          <select
            name="currency2"
            onChange={onSecondCurrChange}
            defaultValue={secondCurr}
            id="currency2"
          >
            {options.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>
        <div className="swapButtonDiv">
          <p>Type Amount to Know the Live Rates</p>
          <button className="swapButton" disabled>
            Rate : {currentRate === null ? "Type amount" : currentRate.toFixed(2)}
          </button>
        </div>
      </div>

      <div className="amount">
        <Amount
          amount={amount}
          onAmountChange={onAmountChange}
          amountConverted={amountConverted}
          // currentRate={currentRate}
        />
      </div>
    </>
  );
};

export default CurrencyExchange;
