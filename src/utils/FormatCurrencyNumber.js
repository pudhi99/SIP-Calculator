import React from "react";

function FormatCurrencyNumber(amount) {
  const money = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return money;
}

export default FormatCurrencyNumber;
