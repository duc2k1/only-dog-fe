import React, { memo } from "react";
import Suggestions from "./Suggestions/Suggestions";
import Post from "./Post/Post";
//--------------------------------------------------
export default memo(function DashBoard() {
  //--------------------------------------------------
  return (
    <div>
      <Suggestions />
      <main className="container py-5">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    </div>
  );
});
