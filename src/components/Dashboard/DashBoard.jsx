import React from "react";
import Suggestions from "./Suggestions/Suggestions";
import Post from "./Post/Post";

export default function DashBoard({ setPage, page }) {
  return (
    <div>
      <div className={page === "dashboard" ? "" : "d-none"}>
        <Suggestions setPage={setPage} />
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
