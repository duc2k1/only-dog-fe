import React, { useState, memo, useContext } from "react";
import greyImg from "../../../assets/images/grey.jpg";
import { Link } from "react-router-dom";
import toTop from "../../../helpers/toTop";
import getUserIdFromAccessToken from "../../../helpers/getUserIdFromAccessToken";
import { AuthContext } from "../../../contexts/AuthProvider";
//--------------------------------------------------
export default memo(function AvatarUser() {
  const [loaded, setLoaded] = useState(false);
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  return (
    <Link
      to={"/profile?userId=" + getUserIdFromAccessToken(stateAccessToken)}
      onClick={() => toTop()}
    >
      <img
        role="button"
        width="30"
        height="30"
        src="https://picsum.photos/1000"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle me-3" : "d-none"}
      />
      {!loaded && (
        <img
          className="rounded-circle me-3"
          src={greyImg}
          height={30}
          width={30}
        />
      )}
    </Link>
  );
});
