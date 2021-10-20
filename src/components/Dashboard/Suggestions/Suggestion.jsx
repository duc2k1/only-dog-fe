import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import ButtonFollow from "../../ButtonFollow";
import pixelDog from "../../../assets/images/pug.jpg";

export default function Suggestion({ setPage, name }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="col-4 col-md-2 text-center mb-3">
      <img
        className="rounded-circle mb-2"
        src={pixelDog}
        alt=""
        width="60"
        height="60"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle" : "d-none"}
        onClick={() => setPage("profile")}
      />
      <Skeleton
        circle={true}
        width={60}
        height={60}
        className={loaded ? "d-none" : "pt-2"}
      />
      <small>{name}</small>
      <br />
      <ButtonFollow />
    </div>
  );
}
