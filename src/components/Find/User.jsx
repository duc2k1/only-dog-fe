import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import ButtonFollow from "../ButtonFollow";

export default function User() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="col-4 col-md-2 text-center mb-3">
      <img
        className="rounded-circle mb-2"
        src="https://placedog.net/5000?random"
        alt=""
        width="80"
        height="80"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle" : "d-none"}
        onClick={() => setPage("profile")}
      />
      <Skeleton
        circle={true}
        width={80}
        height={80}
        className={loaded ? "d-none" : "pt-2"}
      />
      <br />
      <small>dfgdfg</small>
      <br />
      <ButtonFollow />
    </div>
  );
}
