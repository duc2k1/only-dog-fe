import React, { useState, memo } from "react";
import greyImg from "../../../assets/images/grey.jpg";
//--------------------------------------------------
export default memo(function Image({ dataPost }) {
  const [loaded, setLoaded] = useState(false);
  //--------------------------------------------------
  return (
    <>
      <img
        width="100%"
        height="300"
        src={import.meta.env.VITE_DOMAIN_API + dataPost?.pathImage}
        alt="Image Post"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "" : "d-none"}
      />
      {!loaded && <img src={greyImg} height={300} width="100%" />}
    </>
  );
});
