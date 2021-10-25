import React, { memo } from "react";
import User from "./User";
import findUsers from "../../seeds/findUsers.json"
//--------------------------------------------------
export default memo(function Users() {
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
         {findUsers.users.map((val) => (
          <User key={val._id} userName={val.userName}/>
        ))} 
      </div>
    </div>
  );
});
