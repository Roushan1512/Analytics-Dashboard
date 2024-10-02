import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserBio = () => {
  const [userData, setUserData] = useState();
  const { user } = useAuth0();
  useEffect(() => {
    if (user) {
      const { email } = user;
      axios
        .get(`${import.meta.env.VITE_url}/users/getUser?email=${email}`)
        .then((res) => {
          setUserData(res.data);
          console.log(res.data);
        });
    }
  }, [user]);

  return (
    <div className="h-fit w-[60%] py-3 bg-yellow-50 m-4 rounded-xl border-2 border-black shadow-inner shadow-gray-500">
      <h1 className="ml-10 h-fit w-fit text-2xl font-bold font-mono">
        {userData ? userData.nickname : ""}
      </h1>
      <h3 className="ml-14 text-xl font-mono font-medium">
        {userData ? userData.category : ""}
      </h3>
      <p className="ml-14 text-md mt-2 font-serif">
        {userData ? userData.bio : ""}
      </p>
      <span className="ml-14 text-md font-serif">
        Phone : {userData ? userData.phone : ""}
      </span>
    </div>
  );
};

export default UserBio;
