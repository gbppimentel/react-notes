import React from "react";
import { useState } from "react";
import "../css/journal.css";
const Journal = () => {
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
    <div className="journal-container">
      <div className="col-1">
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
      </div>
      <div className="col-2">Journal</div>
    </div>
  );
};

export default Journal;
