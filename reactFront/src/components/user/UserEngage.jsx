import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserEngage = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (user) {
      axios
        .get(
          `${import.meta.env.VITE_url}/users/getEngageInfo?email=${user.email}`
        )
        .then((res) => {
          console.log(res.data);
          setUserData(res.data);
        });
    }
  }, [user]);
  return (
    <div className="h-[80%] w-[35%] bg-yellow-50 rounded-xl border-2 border-black shadow-inner shadow-gray-500 font-mono text-md font-medium p-4">
      Active Promotions : {userData ? userData.promotions : ""}
      <br />
      Advertisements Online : {userData ? userData.ads : ""}
      <br />
      People Reached : {userData ? userData.acc_engage : ""}
    </div>
  );
};

export default UserEngage;
