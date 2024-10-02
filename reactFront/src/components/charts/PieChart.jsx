import React from "react";
import { Chart } from "chart.js";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, pieData }) => {
  return (
    <>
      {data ? (
        <div className="h-full w-[40%] bg-blue-50 py-4 gap-6 flex justify-center items-center rounded-xl border-2 border-black m-4 shadow-inner shadow-gray-500">
          <div className="h-fit w-[30%] text-start font-serif font-semibold">
            Followers : {pieData.followers}
            <br />
            Following : {pieData.following}
            <br />
            Posts : {pieData.posts}
          </div>
          <Pie data={data} />
        </div>
      ) : (
        <div className="h-full w-[40%] bg-blue-50 py-4 gap-6 flex justify-center items-center rounded-xl border-2 border-black m-4 shadow-inner shadow-gray-500">
          <h1 className="text-md font-mono font-medium">
            Click on the icon(s) to check its statistics
          </h1>
        </div>
      )}
    </>
  );
};

export default PieChart;
