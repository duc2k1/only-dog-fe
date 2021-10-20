import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Photo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <img
        src="https://placedog.net/5000?random"
        alt="Image of user"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "" : "d-none"}
        width="100%"
        height="300"
      />
      <Skeleton height={300} className={loaded ? "d-none" : "pt-2"} />
    </div>
  );
}
