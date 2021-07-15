import React from "react";

const Amount = ({ amount, onAmountChange, amountConverted }) => {
  return (
    <>
      <div>
          <p>Amount</p>
        <input type="number" value={amount} onChange={onAmountChange} />
      </div>
      <div>
        <p className="convertedAmount">{amountConverted.toFixed(2)}</p>
      </div>
    </>
  );
};

export default Amount;
