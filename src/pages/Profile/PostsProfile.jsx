import React, { memo } from "react";
import PostProfile from "./PostProfile";
import postsOfUser from "../../seeds/postsOfUser.json";
//--------------------------------------------------
export default memo(function PostsProfile() {
  //--------------------------------------------------
  return (
    <main className="py-5">
      <div className="row" data-masonry='{"percentPosition": true }'>
        {postsOfUser.posts.map((val) => (
          <PostProfile key={val._id} dataPost={val} />
        ))}
      </div>
    </main>
  );
});
