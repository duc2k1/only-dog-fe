import React, { useState, useContext } from "react";
import { AppContext } from "../contexts/AppProvider";
//--------------------------------------------------
export default function ButtonFollow() {
  const [statusFollow, setStatusFollow] = useState("Follow");
  const { setShowLogin } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <div
      role="button"
      className={statusFollow === "Follow" ? "p-1 text-primary" : "p-1 "}
      onClick={() => {
        statusFollow === "Following"
          ? setStatusFollow("Follow")
          : setStatusFollow("Following");
      }}
      style={{
        userSelect: "none",
      }}
    >
      {statusFollow}
    </div>
  );
}
