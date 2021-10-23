import React, { memo, useContext } from "react";
import Suggestions from "./Suggestions/Suggestions";
import Post from "./Post/Post";
import { AppContext } from "../../contexts/AppProvider";
//--------------------------------------------------
export default memo(function DashBoard() {
  const { statePostsUserFollow } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <div>
      <Suggestions />
      <main className="container py-5">
        <div className="row" data-masonry='{"percentPosition": true }'>
          {statePostsUserFollow.posts.map((val) => (
            <Post key={val._id} dataPost={val} />
          ))}
        </div>
      </main>
    </div>
  );
});
