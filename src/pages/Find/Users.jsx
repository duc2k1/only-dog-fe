import React, { memo } from "react";
import User from "./User";
import findUsers from "../../seeds/findUsers.json";
import getQueryFromURL from "../../helpers/getQueryFromURL";
import NotFound from "./NotFound";
//--------------------------------------------------
export default memo(function Users() {
  //--------------------------------------------------
  const handleFilter = (val) => {
    return val.userName.indexOf(userName) !== -1 && userName ? true : false;
  };
  const users = findUsers.users;
  const userName = getQueryFromURL("user_name");
  const usersAfterFilter = users.filter((val) => handleFilter(val));
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
        {users && userName && usersAfterFilter.length ? (
          usersAfterFilter.map((val) => (
            <User key={val._id} userName={val.userName} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
});
