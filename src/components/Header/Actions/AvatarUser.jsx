import React, { useState, memo } from "react";
import greyImg from "../../../assets/images/grey.jpg";
import { Link } from "react-router-dom";
import toTop from "../../../helpers/toTop";
//--------------------------------------------------
export default memo(function AvatarUser() {
  const [loaded, setLoaded] = useState(false);
  //--------------------------------------------------
  return (
    <Link
      to={"/profile?userId=" + "oi23osdifhsdi2342342"}
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
