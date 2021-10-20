import React, { useState } from "react";
import ButtonFollow from "../ButtonFollow";
import ModalAvatar from "./ModalAvatar";
import Skeleton from "react-loading-skeleton";
import pixelDog from "../../assets/images/pug.jpg";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="row p-5">
        <div className="col-md-4 text-center">
          <img
            src={pixelDog}
            alt=""
            width="200"
            height="200"
            role="button"
            style={{ objectFit: "cover", userSelect: "none" }}
            data-bs-toggle="modal"
            data-bs-target="#modalAvatar"
            onLoad={() => setLoaded(true)}
            className={loaded ? "rounded-circle" : "d-none"}
          />
          <Skeleton
            circle={true}
            width={200}
            height={200}
            className={loaded ? "d-none" : "pt-2"}
          />
          <ModalAvatar />
        </div>
        <div className="col-md-8" style={{ marginTop: 65 }}>
          <h3 className="text-center">aaaaaaaaaa</h3>
          <div className="d-flex justify-content-around">
            <p className="me-3">
              <b>111</b> posts
            </p>
            <p className="me-3">
              <b>11</b> Followers
            </p>
            <p className="me-3">
              <b>1</b> Following
            </p>
          </div>
          <div className="text-center">
            <ButtonFollow />
          </div>
        </div>
      </div>
    </div>
  );
}
