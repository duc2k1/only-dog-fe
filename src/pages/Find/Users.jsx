import React, { memo, useEffect, useState } from "react";
import User from "./User";
import getQueryFromURL from "../../helpers/getQueryFromURL";
import NotFound from "./NotFound";
//--------------------------------------------------
export default memo(function Users() {
  //--------------------------------------------------
  const userName = getQueryFromURL("user_name");
  const [usersFind, setUsersFind] = useState([]);
  //--------------------------------------------------
  useEffect(() => {
    fetch(
      import.meta.env.VITE_DOMAIN_API +
        import.meta.env.VITE_ENDPOINT_FIND_USER_BY_NAME +
        "/" +
        userName
    )
      .then((res) => res.json())
      .then((data) => {
        setUsersFind(data.users);
      })
      .catch((err) => console.log(err));
  }, [userName]);
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
        {usersFind.length && userName ? (
          usersFind.map((val) => <User key={val._id} userName={val.userName} />)
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
});
