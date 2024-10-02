import React from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";

const Faker = () => {
  const fakeData = async () => {
    await axios
      .post(`${import.meta.env.VITE_url}/twitter/newTwitter`, {
        email: "ronnie@gmail.com",
        followers: faker.number.int({ min: 0, max: 1000 }),
        following: faker.number.int({ min: 0, max: 1000 }),
        posts: faker.number.int({ min: 0, max: 1000 }),
        stories: faker.number.int({ min: 0, max: 1000 }),
        likes: faker.number.int({ min: 0, max: 1000 }),
        comments: faker.number.int({ min: 0, max: 1000 }),
        shares: faker.number.int({ min: 0, max: 1000 }),
        saves: faker.number.int({ min: 0, max: 1000 }),
      })
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <button type="button" onClick={fakeData}>
        Fake
      </button>
    </div>
  );
};

export default Faker;
