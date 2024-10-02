import React, { useEffect } from "react";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Navbar = () => {
  const { user } = useAuth0();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_url}/status`)
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div className="absolute top-4 right-8 h-fit">
      {user ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default Navbar;
