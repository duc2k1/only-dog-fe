import React, { useState } from "react";
//--------------------------------------------------
export default function ButtonFollow() {
  const [statusFollow, setStatusFollow] = useState("Follow");
  //--------------------------------------------------
  return (
    <button
      className="btn btn-outline-dark p-1"
      onClick={() => {
        statusFollow === "Following"
          ? setStatusFollow("Follow")
          : setStatusFollow("Following");
      }}
    >
      {statusFollow}
    </button>
  );
}
