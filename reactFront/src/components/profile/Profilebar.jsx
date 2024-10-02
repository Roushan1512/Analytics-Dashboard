import React, { useEffect, useState } from "react";
import Profile from "../auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Profilebar = ({
  setFbdata,
  setInstadata,
  setTwitterdata,
  setSelected,
}) => {
  const { user } = useAuth0();
  const [fbstyle, setFbstyle] = useState("");
  const [instastyle, setInstastyle] = useState("");
  const [twitterstyle, setTwitterstyle] = useState("");

  useEffect(() => {
    const postUser = async () => {
      if (user) {
        await axios
          .post(`${import.meta.env.VITE_url}/users/newUser`, {
            email: user.email,
            nickname: user.nickname,
            category: "Influencer",
            bio: "I am an influencer",
            phone: 9876543210,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    };
    postUser();
  }, [user]);

  const getFb = async () => {
    if (user) {
      await axios
        .get(`${import.meta.env.VITE_url}/fb/getFb?email=${user.email}`)
        .then((res) => {
          setFbstyle("border-l-slate-800");
          setInstastyle("");
          setTwitterstyle("");
          if (res.data != "") {
            //console.log(res.data);
            setFbdata(res.data);
            setSelected(1);
          } else {
            console.log("No data");
          }
        });
    }
  };

  const getInsta = async () => {
    if (user) {
      await axios
        .get(`${import.meta.env.VITE_url}/insta/getInsta?email=${user.email}`)
        .then((res) => {
          setFbstyle("");
          setInstastyle("border-l-slate-800");
          setTwitterstyle("");
          if (res.data != "") {
            //console.log(res.data);
            setInstadata(res.data);
            setSelected(2);
          } else {
            console.log("No data");
          }
        });
    }
  };

  const getTwitter = async () => {
    if (user) {
      await axios
        .get(
          `${import.meta.env.VITE_url}/twitter/getTwitter?email=${user.email}`
        )
        .then((res) => {
          setFbstyle("");
          setInstastyle("");
          setTwitterstyle("border-l-slate-800");
          if (res.data != "") {
            //console.log(res.data);
            setTwitterdata(res.data);
            setSelected(3);
          } else {
            console.log("No data");
          }
        });
    }
  };

  return (
    <div className="ml-8 h-[93vh] mt-[3vh] w-12 border-r-4 border-black">
      <Profile />
      {user ? (
        <div className="h-[80%] w-full flex flex-col items-center justify-top pt-12 gap-3">
          <span
            className={`cursor-pointer py-4 px-1 border-4 border-transparent  ${fbstyle}`}
            onClick={getFb}
          >
            <Facebook size={30} />
          </span>
          <span
            className={`cursor-pointer py-4 px-1 border-4 border-transparent  ${instastyle}`}
            onClick={getInsta}
          >
            <Instagram size={30} />
          </span>
          <span
            className={`cursor-pointer py-4 px-1 border-4 border-transparent  ${twitterstyle}`}
            onClick={getTwitter}
          >
            <Twitter size={30} />
          </span>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default Profilebar;
