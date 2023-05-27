import React from "react";
import { useState } from "react";
import List from "./List";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Life as an Idol",
      body: "lorem ipsum...",
      author: "Ruby",
      id: 1,
    },
    {
      title: "Revenge.. For Ai.",
      body: "lorem ipsum...",
      author: "Aqua",
      id: 2,
    },
    {
      title: "Thoughts on Aqua's Acting",
      body: "lorem ipsum...",
      author: "Kana",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <list></list>
    </div>
  );
};

export default Home;
