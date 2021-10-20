import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="d-flex">
      <img
        src="https://placedog.net/5000?random"
        alt="Avatar"
        width="40"
        height="40"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle m-1" : "d-none"}
      />
      <Skeleton
        circle={true}
        width={40}
        height={40}
        className={loaded ? "d-none" : "m-1 pt-2"}
      />
      <div>
        <small>nameeeeee</small>
        <br />
        <small className="text-muted">1/10/2001</small>
      </div>
    </div>
  );
}
