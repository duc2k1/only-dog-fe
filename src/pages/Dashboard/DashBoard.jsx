import React, { memo, useState, useEffect, useContext } from "react";
import Suggestions from "./Suggestions/Suggestions";
import Post from "./Post/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import SpinnerBootstrap from "../../components/SpinnerBootstrap";
import postsUserFollow from "../../seeds/postsUserFollow.json";
import getUserIdFromAccessToken from "../../helpers/getUserIdFromAccessToken";
import { AuthContext } from "../../contexts/AuthProvider";
//--------------------------------------------------
const PER_PAGE = parseInt(import.meta.env.VITE_PER_PAGE);
const posts = postsUserFollow.posts;
//--------------------------------------------------
export default memo(function DashBoard() {
  const [statePostsUserFollow, setStatePostsUserFollow] = useState([]);
  const [stateAllPostUserFollow, setStateAllPostUserFollow] = useState([]);
  const [stateHasMore, setStateHasMore] = useState(true);
  const fetchMoreData = () => {
    if (statePostsUserFollow.length >= posts.length) {
      setStateHasMore(false);
      return;
    }
    setTimeout(() => {
      setStatePostsUserFollow(
        postsUserFollow.posts.slice(0, statePostsUserFollow.length + PER_PAGE)
      );
    }, 700);
  };
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  useEffect(() => {
    fetch(
      import.meta.env.VITE_DOMAIN_API +
        import.meta.env.VITE_ENDPOINT_DASHBOARD +
        "/" +
        getUserIdFromAccessToken(stateAccessToken)
    )
      .then((res) => res.json())
      .then((data) => {
        setStateAllPostUserFollow(data.posts);
        console.log("~ data.user.posts", data.posts);
      })
      .catch((err) => console.log(err));
  }, []);
  //--------------------------------------------------

  return (
    <div>
      <Suggestions />
      <main className="container">
        {/* <InfiniteScroll
          dataLength={statePostsUserFollow.length}
          next={() => fetchMoreData()}
          hasMore={stateHasMore}
          loader={<SpinnerBootstrap />}
          className="row"
          data-masonry='{"percentPosition": true }'
          style={{ overflowY: "hidden" }}
        >
          {statePostsUserFollow.map((val) => (
            <Post key={val._id} dataPost={val} />
          ))}
        </InfiniteScroll> */}
        <div>
          {stateAllPostUserFollow.map((val) => (
            <Post key={val._id} dataPost={val} />
          ))}
        </div>
      </main>
    </div>
  );
});
