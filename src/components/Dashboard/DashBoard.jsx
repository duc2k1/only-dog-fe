import React from "react";
import Suggestions from "./Suggestions/Suggestions";
import Post from "./Post/Post";

export default function DashBoard({ setPage }) {
  return (
    <div>
      <Suggestions setPage={setPage} />
      <main className="container py-5">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
          <Post setPage={setPage} />
        </div>
      </main>
    </div>
  );
}
