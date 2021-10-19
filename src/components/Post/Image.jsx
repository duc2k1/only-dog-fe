import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Image() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        width="100%"
        height="300"
        src="https://placedog.net/500?random"
        alt="Image Post"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "" : "d-none"}
      />
      <Skeleton height={300} className={loaded ? "d-none" : ""} />
    </>
  );
}
