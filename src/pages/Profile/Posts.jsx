import React, { memo } from "react";
import Post from "./Post";
import postsOfUser from "../../seeds/postsOfUser.json";
//--------------------------------------------------
export default memo(function Posts() {
  //--------------------------------------------------
  return (
    <main className="py-5">
      <div className="row" data-masonry='{"percentPosition": true }'>
        {postsOfUser.posts.map((val) => (
          <Post key={val._id} dataPost={val} />
        ))}
      </div>
    </main>
  );
});
