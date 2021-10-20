import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import pixelDog from "../../../assets/images/pug.jpg";

export default function Image() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        width="100%"
        height="300"
        src={pixelDog}
        alt="Image Post"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "" : "d-none"}
      />
      <Skeleton height={300} className={loaded ? "d-none" : "pt-2"} />
    </>
  );
}
