import SipCalculationText from "@/components/SipCalculationText";
import SipCalculatorComponent from "@/components/SipCalculatorComponent";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "SIP Calculator",
  description:
    "SIP (Systematic Investment Plan) Calculator with understandable tables with graphs in this you can analyze quickly",
  openGraph: {
    title: "SIP Calculator",
    description:
      "SIP (Systematic Investment Plan) Calculator with understandable tables with graphs in this you can analyze quickly",
  },
};

function page() {
  return (
    <div>
      <SipCalculatorComponent />
      <SipCalculationText />
    </div>
  );
}

export default page;
