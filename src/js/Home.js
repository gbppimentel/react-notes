import React from "react";
import { useState } from "react";

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
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
      ;
    </div>
  );
};

export default Home;
