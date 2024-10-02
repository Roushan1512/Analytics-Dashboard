import React, { useEffect, useState } from "react";
import UserBio from "./UserBio";
import { useAuth0 } from "@auth0/auth0-react";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import UserEngage from "./UserEngage";

const UserData = ({ fbdata, instadata, twitterdata, selected }) => {
  const { user } = useAuth0();
  const [data, setData] = useState();
  const [pieData, setPieData] = useState();
  const [barData, setBarData] = useState();
  const [lineNo, setLineNo] = useState();

  useEffect(() => {
    console.log("Facebook");
    console.log(fbdata);
  }, [fbdata]);

  useEffect(() => {
    console.log("Instagram");
    console.log(instadata);
  }, [instadata]);

  useEffect(() => {
    console.log("Twitter");
    console.log(twitterdata);
  }, [twitterdata]);

  useEffect(() => {
    if (selected == 1) {
      setData({
        labels: ["Followers", "Following", "Posts"],
        datasets: [
          {
            data: [fbdata.followers, fbdata.following, fbdata.posts],
            backgroundColor: ["#121e69", "#0726ea", "#5f6ecd"],
            borderColor: ["black"],
            borderWidth: 2,
          },
        ],
      });
      setPieData({
        followers: fbdata.followers,
        following: fbdata.following,
        posts: fbdata.posts,
      });
      setBarData({
        labels: [
          `Followers`,
          "Following",
          "Posts",
          "Stories",
          "Likes",
          "Comments",
          "Shares",
          "Saves",
        ],
        datasets: [
          {
            label: "Facebook Data",
            data: [
              fbdata.followers,
              fbdata.following,
              fbdata.posts,
              fbdata.stories,
              fbdata.likes,
              fbdata.comments,
              fbdata.shares,
              fbdata.saves,
            ],
            backgroundColor: ["blue"],
            borderColor: ["black"],
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 8,
          },
        ],
      });
      setLineNo({
        followers: fbdata.followers,
        following: fbdata.following,
        posts: fbdata.posts,
        stories: fbdata.stories,
        likes: fbdata.likes,
        comments: fbdata.comments,
        shares: fbdata.shares,
        saves: fbdata.saves,
      });
    } else if (selected == 2) {
      setData({
        labels: ["Followers", "Following", "Posts"],
        datasets: [
          {
            data: [instadata.followers, instadata.following, instadata.posts],
            backgroundColor: ["#121e69", "#0726ea", "#5f6ecd"],
            borderColor: ["black"],
            borderWidth: 2,
          },
        ],
      });
      setPieData({
        followers: instadata.followers,
        following: instadata.following,
        posts: instadata.posts,
      });
      setBarData({
        labels: [
          "Followers",
          "Following",
          "Posts",
          "Stories",
          "Likes",
          "Comments",
          "Shares",
          "Saves",
        ],
        datasets: [
          {
            label: "Instagram Data",
            data: [
              instadata.followers,
              instadata.following,
              instadata.posts,
              instadata.stories,
              instadata.likes,
              instadata.comments,
              instadata.shares,
              instadata.saves,
            ],
            backgroundColor: ["blue"],
            borderColor: ["black"],
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 8,
          },
        ],
      });
      setLineNo({
        followers: instadata.followers,
        following: instadata.following,
        posts: instadata.posts,
        stories: instadata.stories,
        likes: instadata.likes,
        comments: instadata.comments,
        shares: instadata.shares,
        saves: instadata.saves,
      });
    } else if (selected == 3) {
      setData({
        labels: ["Followers", "Following", "Posts"],
        datasets: [
          {
            data: [
              twitterdata.followers,
              twitterdata.following,
              twitterdata.posts,
            ],
            backgroundColor: ["#121e69", "#0726ea", "#5f6ecd"],
            borderColor: ["black"],
            borderWidth: 2,
          },
        ],
      });
      setPieData({
        followers: twitterdata.followers,
        following: twitterdata.following,
        posts: twitterdata.posts,
      });
      setBarData({
        labels: [
          "Followers",
          "Following",
          "Posts",
          "Stories",
          "Likes",
          "Comments",
          "Shares",
          "Saves",
        ],
        datasets: [
          {
            label: "Twitter Data",
            data: [
              twitterdata.followers,
              twitterdata.following,
              twitterdata.posts,
              twitterdata.stories,
              twitterdata.likes,
              twitterdata.comments,
              twitterdata.shares,
              twitterdata.saves,
            ],
            backgroundColor: ["blue"],
            borderColor: ["black"],
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 8,
          },
        ],
      });
      setLineNo({
        followers: twitterdata.followers,
        following: twitterdata.following,
        posts: twitterdata.posts,
        stories: twitterdata.stories,
        likes: twitterdata.likes,
        comments: twitterdata.comments,
        shares: twitterdata.shares,
        saves: twitterdata.saves,
      });
    }
  }, [selected]);

  return (
    <>
      {user ? (
        <div className="h-[80%] w-full flex-col justify-center items-center">
          <div className="w-full h-1/2 flex justify-center items-start">
            <UserBio />
            <PieChart data={data} pieData={pieData} />
          </div>

          <div className="h-[60%] w-full flex justify-center items-center gap-16">
            <LineChart barData={barData} lineNo={lineNo} />
            <UserEngage />
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-medium font-mono w-fit mx-auto">
          Please Login to continue
        </h1>
      )}
    </>
  );
};

export default UserData;
