import React from "react";
import Post from "./Post";

export default function Posts() {
  return (
    <main className="py-5">
      <div className="row" data-masonry='{"percentPosition": true }'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
