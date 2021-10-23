import React, { memo, useContext, useState } from "react";
import Suggestions from "./Suggestions/Suggestions";
import Post from "./Post/Post";
import { AppContext } from "../../contexts/AppProvider";
import InfiniteScroll from "react-infinite-scroll-component";
import SpinnerBootstrap from "../SpinnerBootstrap";
import postsUserFollow from "../../seeds/postsUserFollow.json";
//--------------------------------------------------
const PER_PAGE = parseInt(import.meta.env.VITE_PER_PAGE);
const posts = postsUserFollow.posts;
//--------------------------------------------------
export default memo(function DashBoard() {
  const [statePostsUserFollow, setStatePostsUserFollow] = useState(
    posts.slice(0, PER_PAGE)
  );
  const [stateHasMore, setStateHasMore] = useState(true);
  const fetchMoreData = () => {
    if (statePostsUserFollow.length >= posts.length) {
      setStateHasMore(false);
      return;
    }
    setTimeout(() => {
      setStatePostsUserFollow(
        postsUserFollow.posts.slice(0, posts.length + PER_PAGE)
      );
    }, 700);
    console.log(PER_PAGE);
  };
  //--------------------------------------------------
  return (
    <div>
      <Suggestions />
      <main className="container py-5">
        <InfiniteScroll
          dataLength={statePostsUserFollow.length}
          next={() => fetchMoreData()}
          hasMore={stateHasMore}
          loader={<SpinnerBootstrap />}
          className="row"
          data-masonry='{"percentPosition": true }'
        >
          {statePostsUserFollow.map((val) => (
            <Post key={val._id} dataPost={val} />
          ))}
        </InfiniteScroll>
      </main>
    </div>
  );
});
