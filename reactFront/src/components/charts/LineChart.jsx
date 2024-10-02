import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const LineChart = ({ barData, lineNo }) => {
  return (
    <div className="h-full w-[57%] relative">
      {barData ? (
        <div className="w-full h-full mx-2 flex flex-col justify-start items-center absolute left-0 -top-10 border-2 border-black rounded-xl shadow-inner shadow-gray-500 bg-blue-50">
          <Line data={barData} />
          <div className="flex justify-center items-center gap-16 text-xs text-gray-600">
            <span>{lineNo.followers}</span>
            <span>{lineNo.following}</span>
            <span>{lineNo.posts}</span>
            <span>{lineNo.stories}</span>
            <span>{lineNo.likes}</span>
            <span>{lineNo.comments}</span>
            <span>{lineNo.shares}</span>
            <span>{lineNo.saves}</span>
          </div>
        </div>
      ) : (
        <div className="w-full h-full mx-2 flex justify-center items-center absolute left-0 -top-10 border-2 border-black rounded-xl shadow-inner shadow-gray-500 bg-blue-50">
          <h1 className="text-md font-mono font-medium">
            Click on the icon(s) to check its statistics
          </h1>
        </div>
      )}
    </div>
  );
};

export default LineChart;
