import React, { memo, useState, useEffect } from "react";
import Header from "./Header";
import PostsProfile from "./PostsProfile";
import getQueryFromURL from "../../helpers/getQueryFromURL";
//--------------------------------------------------
export default memo(function Profile() {
  const userId = getQueryFromURL("user_id");
  const [infoUser, setInfoUser] = useState({});
  //--------------------------------------------------
  useEffect(() => {
    fetch(
      import.meta.env.VITE_DOMAIN_API +
        import.meta.env.VITE_ENDPOINT_FIND_USER_BY_ID +
        "/" +
        userId
    )
      .then((res) => res.json())
      .then((data) => {
        setInfoUser(data);
      })
      .catch((err) => console.log(err));
  }, [userId]);
  //--------------------------------------------------
  return (
    <div className="container">
      <Header infoUser={infoUser?.user} />
      <PostsProfile infoUser={infoUser?.user} />
    </div>
  );
});
