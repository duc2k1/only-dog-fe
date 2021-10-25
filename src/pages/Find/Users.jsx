import React, { memo } from "react";
import User from "./User";
import findUsers from "../../seeds/findUsers.json";
import getQueryFromURL from "../../helpers/useQuery";
//--------------------------------------------------
export default memo(function Users() {
  const users = findUsers.users;
  //--------------------------------------------------
  const handleFilter = (val) => {
    return val.userName.indexOf(getQueryFromURL("user_name")) !== -1
      ? true
      : false;
  };
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
        {users
          .filter((val) => handleFilter(val))
          .map((val) => (
            <User key={val._id} userName={val.userName} />
          ))}
      </div>
    </div>
  );
});
