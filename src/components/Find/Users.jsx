import React, { memo } from "react";
import User from "./User";
import seed from "../../seed";
//--------------------------------------------------
export default memo(function Users() {
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
        {seed.slice(0, 6).map((val) => (
          <User key={val.uid} />
        ))}
      </div>
    </div>
  );
});