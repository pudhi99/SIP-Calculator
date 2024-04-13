"use client";
import PageHeading from "@/components/PageHeading";
import React, { useEffect, useState } from "react";
import { Label, RangeSlider, TextInput } from "flowbite-react";

import { Chart } from "react-google-charts";
import { MdOutlineCurrencyRupee, MdOutlinePercent } from "react-icons/md";
import DataTable from "@/components/DataTable";
import FormatCurrencyNumber from "@/utils/FormatCurrencyNumber";
import SipLineGraph from "@/components/SipLineGraph";
import FormatCurrency from "@/utils/FormatCurrency";

function SipCalculatorComponent() {
  const [monthlyAmount, setMonthlyAmount] = useState(1000);
  const [returnRate, setReturnRate] = useState(10);
  const [timePeriod, setTimePeriod] = useState(5);

  const investedAmount = monthlyAmount * timePeriod * 12;
  const totalReturns = () => {
    const monthlyRateOfReturn = returnRate / 100 / 12;
    const numberOfPayments = timePeriod * 12;

    const returns =
      monthlyAmount *
      (((Math.pow(1 + monthlyRateOfReturn, numberOfPayments) - 1) /
        monthlyRateOfReturn) *
        (1 + monthlyRateOfReturn));

    return returns.toFixed(0); // You can adjust the decimal places as needed
  };
  console.log(totalReturns(), "checking estimated returns");
  const estimatedReturns = totalReturns() - investedAmount;

  const data = [
    ["Task", "Hours per Day"],
    ["Invested Amount", investedAmount],
    ["Est.returns", estimatedReturns], // CSS-style declaration
  ];

  const options = {
    pieHole: 0.4,
    is3D: false,
    backgroundColor: "transparent",
    legend: {
      textStyle: {
        color: "#8a8a8e",
      },
      alignment: "center",
      position: "top",
    },
    colors: ["#12385C", "#5266FF"],
    pieSliceTextStyle: {
      color: "#00000",
    },
    titleTextStyle: {
      color: "#e6693e",
    },
    pieSliceBorderColor: "transparent",
  };

  //table calculations
  const [tableColumns] = useState([
    { Header: "Installment", accessor: "installment" },
    { Header: "Date", accessor: "date" },
    { Header: "Monthly Installment", accessor: "monthlyInstallment" },
    { Header: "Amount", accessor: "amount" },
    { Header: "Interest", accessor: "interest" },
    { Header: "Returns", accessor: "returns" },
    { Header: "Total", accessor: "total" },
  ]);
  const [tableRows, setTableRows] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    const monthlyRateOfReturn = returnRate / 100 / 12;
    const numberOfPayments = timePeriod * 12;

    const newTableRows = [];
    const newLineChartData = [["Month", "Invested", "Total"]];
    let totalInvested = monthlyAmount;

    for (let i = 0; i < numberOfPayments; i++) {
      const installmentNumber = i + 1;
      const monthlyInstallment = monthlyAmount;
      const interestEarned = (1 + monthlyRateOfReturn) ** installmentNumber;
      const amount = monthlyAmount * installmentNumber;
      const returns =
        monthlyAmount *
        (((Math.pow(1 + monthlyRateOfReturn, installmentNumber) - 1) /
          monthlyRateOfReturn) *
          (1 + monthlyRateOfReturn));
      totalInvested += monthlyInstallment;
      console.log(amount, "checking total invested");
      newTableRows.push({
        installment: installmentNumber,
        date: `Month ${installmentNumber}`,
        monthlyInstallment: monthlyInstallment,
        amount: amount,
        interest: interestEarned,
        returns: FormatCurrencyNumber(returns - amount),
        total: FormatCurrencyNumber(returns),
      });

      newLineChartData.push([installmentNumber, amount, returns]);
    }

    setTableRows(newTableRows);
    setLineChartData(newLineChartData);
  }, [monthlyAmount, returnRate, timePeriod]);
  console.log(tableRows);
  return (
    <div>
      <PageHeading>SIP Calculator</PageHeading>
      <div className="grid grid-cols-7 gap-4 mx-2 sm:mx-5">
        <div className="col-span-full lg:col-span-4 border-2 border-gray-600 rounded-md p-5">
          <div className="flex justify-between items-center mt-5">
            <p className="">Monthly investment</p>
            <div className="">
              <TextInput
                id="input-success"
                placeholder="monthly amount"
                required
                color="success"
                value={monthlyAmount}
                type="number"
                style={{
                  fontSize: "16px",
                  color: "#066D0D",
                  fontWeight: "bold",
                }}
                onChange={(event) => setMonthlyAmount(event.target.value)}
                icon={MdOutlineCurrencyRupee}
                className="flowbite-icon"
              />
            </div>
          </div>
          <RangeSlider
            className="mt-5"
            id="md-range"
            min={500}
            max={50000}
            step={100}
            value={monthlyAmount}
            onChange={(event) => setMonthlyAmount(event.target.value)}
            sizing="md"
          />
          <div className="flex justify-between items-center mt-16">
            <p className="">Expected return rate (p.a)</p>
            <div className="">
              <TextInput
                id="input-success"
                placeholder="monthly amount"
                required
                type="number"
                color="success"
                style={{
                  color: "#066D0D",
                  fontWeight: "bold",
                }}
                value={returnRate}
                onChange={(event) => setReturnRate(event.target.value)}
                icon={MdOutlinePercent}
              />
            </div>
          </div>
          <RangeSlider
            min={1}
            max={50}
            className="mt-5"
            id="md-range"
            sizing="md"
            value={returnRate}
            onChange={(event) => setReturnRate(event.target.value)}
          />
          <div className="flex justify-between items-center mt-16">
            <p className="">Time period</p>
            <div className="">
              <TextInput
                id="input-success"
                placeholder="monthly amount"
                required
                type="number"
                color="success"
                style={{
                  color: "#066D0D",
                  fontWeight: "bold",
                }}
                value={timePeriod}
                onChange={(event) => setTimePeriod(event.target.value)}
              />
            </div>
          </div>
          <RangeSlider
            min={1}
            max={40}
            className="mt-5"
            id="md-range"
            sizing="md"
            value={timePeriod}
            onChange={(event) => setTimePeriod(event.target.value)}
          />
          <div className="mt-10">
            <div className="flex justify-between">
              <p>Invested amount</p>
              <FormatCurrency>{investedAmount}</FormatCurrency>
            </div>
            <div className="flex justify-between mt-5">
              <p>Est.returns</p>
              <FormatCurrency>{estimatedReturns}</FormatCurrency>
            </div>
            <div className="flex justify-between mt-5">
              <p>Total value</p>
              <FormatCurrency>{totalReturns()}</FormatCurrency>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-3 border-2 border-gray-600 rounded-md">
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            className="bg-gray-900"
            style={{ backgroundColor: "#0000" }}
            fill={true}
          />
        </div>
      </div>

      <DataTable columns={tableColumns} data={tableRows} />
      <SipLineGraph data={lineChartData} />
    </div>
  );
}

export default SipCalculatorComponent;
