import React from "react";
import Chart from "react-google-charts";

function SipLineGraph(props) {
  const data = props.data;

  const options = {
    isStacked: true,
    backgroundColor: "transparent",
    height: 300,
    colors: ["#12385C", "#339452"],
    legend: {
      position: "top",
      maxLines: 3,
      alignment: "center",
      textStyle: { color: "#8a8a8e" },
    },
    vAxis: { minValue: 0 },
    pointSize: 5, // Set size of data point (bullet)
    tooltip: { isHtml: true }, // Enable HTML tooltips for customization

    // Customize the appearance of the chart area
    chartArea: {
      width: "80%",
      height: "70%",
    },

    // Customize horizontal axis (hAxis)
    hAxis: {
      title: "Month",
      minValue: 0,
      textStyle: {
        color: "#8a8a8e", // Text color
        fontSize: 12, // Text font size
      },
      gridlines: {
        color: "transparent", // Remove horizontal gridlines
      },
    },

    // Customize vertical axis (vAxis)
    vAxis: {
      title: "Amount",
      minValue: 0,
      textStyle: {
        color: "#8a8a8e", // Text color
        fontSize: 12, // Text font size
      },
    },
  };
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default SipLineGraph;
