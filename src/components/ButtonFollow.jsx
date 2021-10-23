import React, { useState, useContext, memo } from "react";
import { AppContext } from "../contexts/AppProvider";
import { AuthContext } from "../contexts/AuthProvider";
//--------------------------------------------------
export default memo(function ButtonFollow() {
  const [statusFollow, setStatusFollow] = useState("Follow");
  const { setShowModalLogin } = useContext(AppContext);
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  const handleFollow = () => {
    stateAccessToken
      ? statusFollow === "Following"
        ? setStatusFollow("Follow")
        : setStatusFollow("Following")
      : setShowModalLogin(true);
  };
  //--------------------------------------------------
  return (
    <div
      role="button"
      className={statusFollow === "Follow" ? "p-1 text-primary" : "p-1"}
      onClick={() => handleFollow()}
      style={{
        userSelect: "none",
      }}
    >
      {statusFollow}
    </div>
  );
});
