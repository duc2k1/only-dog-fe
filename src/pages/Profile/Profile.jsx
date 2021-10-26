import React, { memo, useState, useEffect } from "react";
import Header from "./Header";
import PostsProfile from "./PostsProfile";
import getQueryFromURL from "../../helpers/getQueryFromURL";
import fetchData from "../../helpers/fetchData";
//--------------------------------------------------
export default memo(function Profile() {
  const userId = getQueryFromURL("user_id");
  const [infoUser, setInfoUser] = useState({});
  //--------------------------------------------------
  useEffect(() => {
    (async () => {
      setInfoUser(await fetchData("GET", "/users/find_one?user_id=" + userId));
    })();
  }, [userId]);
  //--------------------------------------------------
  return (
    <div className="container">
      <Header infoUser={infoUser?.user} />
      <PostsProfile infoUser={infoUser?.user} />
    </div>
  );
});
