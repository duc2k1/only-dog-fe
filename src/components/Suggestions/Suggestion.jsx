import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Suggestion({ name }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="col-4 col-sm-2 text-center mb-3">
      <img
        className="rounded-circle mb-2"
        src="https://placedog.net/500?random"
        alt=""
        width="60"
        height="60"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle" : "d-none"}
      />
      <Skeleton
        circle={true}
        width={60}
        height={60}
        className={loaded ? "d-none" : ""}
      />
      <br />
      <small>{name}</small>
      <br />
      <button className="btn btn-outline-dark p-1">Follow</button>
    </div>
  );
}
