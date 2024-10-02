import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const BarChart = ({ barData }) => {
  return (
    <>
      {barData ? (
        <div className="h-full w-full">
          <div className="w-[60%] h-full mx-6">
            <Bar data={barData} />
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </>
  );
};

export default BarChart;
