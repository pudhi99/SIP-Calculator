import React from "react";
import FormatCurrencyNumber from "./FormatCurrencyNumber";

function FormatCurrency({ children }) {
  return (
    <div>
      <p className="heading">{FormatCurrencyNumber(children)}</p>
    </div>
  );
}

export default FormatCurrency;
