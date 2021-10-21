import React, { useState } from "react";
import greyImg from "../../../assets/images/grey.jpg";

export default function Image() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        width="100%"
        height="300"
        src="https://picsum.photos/3000"
        alt="Image Post"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "" : "d-none"}
      />
      {!loaded && <img src={greyImg} height={300} width="100%" />}
    </>
  );
}
