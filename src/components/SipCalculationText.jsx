import React from "react";

function SipCalculationText() {
  return (
    <div className="mx-5">
      <h1 className="text-2xl text-gray-400 text-center my-5">
        SIP Calculator – Systematic Investment Plan Calculator
      </h1>

      <h2 className="text-xl text-gray-300 my-3">
        Understanding SIPs and Mutual Funds
      </h2>
      <p>
        Prospective investors can think that SIPs and mutual funds are the same.
        However, SIPs are merely a method of investing in mutual funds, the
        other method being a lump sum. A SIP calculator is a tool that helps you
        determine the returns you can avail when parking your funds in such
        investment tools. Systematic Investment Plan or SIP is a process of
        investing a fixed sum of money in mutual funds at regular intervals.
        SIPs usually allow you to invest weekly, quarterly, or monthly.
      </p>

      <h2 className="text-xl text-gray-300 my-3">What is a SIP Calculator?</h2>
      <p>
        A SIP calculator is a simple tool that allows individuals to get an idea
        of the returns on their mutual fund investments made through SIP. SIP
        investments in mutual funds have become one of the most popular
        investment options for millennials lately.
      </p>
      <p>
        These mutual fund SIP calculators are designed to give potential
        investors an estimate of their mutual fund investments. However, the
        actual returns offered by a mutual fund scheme vary depending on various
        factors. The SIP calculator does not provide clarification for the exit
        load and expense ratio (if any).
      </p>

      <h2 className="text-xl text-gray-300 my-3">
        How Can a SIP Return Calculator Help You?
      </h2>
      <p>
        SIPs are a more lucrative mode of investing funds compared to a lump sum
        amount according to several mutual fund experts. It helps you become
        financially disciplined and create a habit of savings that can benefit
        you in the future.
      </p>
      <p>
        A SIP calculator online is a beneficial tool, which shows the estimated
        returns you will earn after the investment tenure.
      </p>
      <p>Few of the benefits of SIP calculators include:</p>
      <ul>
        <li>Assisting you to determine the amount you want to invest in.</li>
        <li>Telling you the total amount you have invested.</li>
        <li>Giving an estimated value of the returns.</li>
      </ul>

      <h2 className="text-xl text-gray-300 my-3">
        How Do SIP Calculators Work?
      </h2>
      <p>A SIP plan calculator works on the following formula:</p>
      <p>{"M = P × ({[1 + i] ^ (n - 1)} / i) × (1 + i)."} </p>
      <p>In the above formula:</p>
      <ul>
        <li>M is the amount you receive upon maturity.</li>
        <li>P is the amount you invest at regular intervals.</li>
        <li>n is the number of payments you have made.</li>
        <li>i is the periodic rate of interest.</li>
      </ul>
      <p>
        For example, if you want to invest Rs. 1,000 per month for 12 months at
        a periodic rate of interest of 12%:
      </p>
      <p>Monthly rate of return = 12%/12 = 0.01</p>
      <p>
        Therefore, M = 1,000 × ([1 + 0.01]^12 – 1) / 0.01) × (1 + 0.01), which
        gives approximately Rs. 12,809 in a year.
      </p>
      <p>
        The rate of interest on a SIP will differ as per market conditions. It
        may increase or decrease, which will change the estimated returns.
      </p>

      <h2 className="text-xl text-gray-300 my-3">
        How to Use a Systematic Investment Plan Calculator
      </h2>
      <p>
        You can use the SIP amount calculator within a few clicks. Just enter
        the monthly invested amount (the amount for which you have started the
        SIP), the number of years for which you want to stay invested, and the
        expected rate of return. As soon as you input the value, the calculator
        will show you the estimated amount you can avail after your investment
        tenure is complete.
      </p>
    </div>
  );
}

export default SipCalculationText;
