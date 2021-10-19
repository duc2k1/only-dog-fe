import React from "react";
import Suggestions from "../Suggestions/Suggestions";
import Post from "../Post/Post";

export default function DashBoard({ page }) {
  return (
    <div>
      <div className={page === "dashboard" ? "" : "d-none"}>
        <Suggestions />
        <main className="container py-5">
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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </main>
      </div>
    </div>
  );
}
