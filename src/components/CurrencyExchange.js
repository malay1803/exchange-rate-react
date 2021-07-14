import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrencyExchange = () => {
  const options = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "CNH",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRO",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STD",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XCD",
    "XDR",
    "XOF",
    "XPD",
    "XPF",
    "XPT",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
  ];

  const [firstCurr, setFIrstCurr] = useState("USD");
  const [secondCurr, setSecondCurr] = useState("INR");
  const [currentRate, setCurrentRate] = useState(88.17);
  const [amount, setAmount] = useState(0);
  const [amountConverted, setAmountConverted] = useState();

  const onFirstCurrChange = (e) => {
    setFIrstCurr(e.target.value);
    setAmount(0)
  };

  const onSecondCurrChange = (e) => {
    setSecondCurr(e.target.value);
    setAmount(0)
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const getAmount = async () => {
    const res = await axios.get(
      `https://api.exchangerate.host/convert?from=${firstCurr}&to=${secondCurr}&amount=${amount}&base=USD`
    );
    console.log(res);
    setCurrentRate(res.data.info.rate);
    setAmountConverted(res.data.result);
  };

  useEffect(() => {
    getAmount();
  }, [amount]);

  return (
    <div>
      <select
        name="currency1"
        onChange={onFirstCurrChange}
        defaultValue="USD"
        id=""
      >
        {options.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>

      <select
        name="currency2"
        onChange={onSecondCurrChange}
        defaultValue="INR"
        id=""
      >
        {options.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
      <input type="number" value={amount} onChange={onAmountChange} />
      <p>{amount}</p>
      <p>Rate: {currentRate}</p>
      <p>Converted Amount: {amountConverted}</p>
    </div>
  );
};

export default CurrencyExchange;
