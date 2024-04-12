import SipCalculationText from "@/components/SipCalculationText";
import SipCalculatorComponent from "@/components/SipCalculatorComponent";
import Head from "next/head";
import React from "react";

function page() {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <SipCalculatorComponent />
      <SipCalculationText />
    </div>
  );
}

export default page;
