import React, { useState } from "react";
import Navbar from "./components/Nav/Navbar";
import Profilebar from "./components/profile/Profilebar";
import Faker from "./components/Faker";
import BarChart from "./components/charts/BarChart";
import LineChart from "./components/charts/LineChart";
import PieChart from "./components/charts/PieChart";
import UserData from "./components/user/UserData";

const App = () => {
  const [fbdata, setFbdata] = useState();
  const [instadata, setInstadata] = useState();
  const [twitterdata, setTwitterdata] = useState();
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex justify-start items-center h-screen w-screen bg-neutral-300">
      <Navbar />
      <Profilebar
        setFbdata={setFbdata}
        setInstadata={setInstadata}
        setTwitterdata={setTwitterdata}
        setSelected={setSelected}
      />
      <UserData
        fbdata={fbdata}
        instadata={instadata}
        twitterdata={twitterdata}
        selected={selected}
      />
    </div>
  );
};

export default App;
