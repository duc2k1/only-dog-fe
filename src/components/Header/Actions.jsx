import React, { useState } from "react";
import ModalLogin from "../Modal/ModalLogin";
import ModalRegister from "../Modal/ModalRegister";
import ModalAddPost from "../Modal/ModalAddPost";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

export default function Actions({ setPage }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className={`d-flex justify-content-around`}>
        <ModalAddPost />
        <img
          role="button"
          width="30"
          height="30"
          className="me-3 rounded-circle"
          src="https://placedog.net/500?random"
          onClick={() => {
            setPage("profile");
          }}
          style={{ objectFit: "cover", userSelect: "none" }}
          onLoad={() => setLoaded(true)}
          className={loaded ? "rounded-circle me-3" : "d-none"}
        />
        <Skeleton
          circle={true}
          width={30}
          height={30}
          className={loaded ? "d-none" : "me-3"}
        />
        <RiLogoutBoxRLine
          role="button"
          size="30"
          onClick={() => console.log("logout")}
        />
      </div>
      <div className={`d-flex justify-content-around`}>
        <div className="nav-item me-2 mt-2">
          <ModalRegister />
        </div>
        <div className="nav-item me-2 mt-2">
          <ModalLogin />
        </div>
      </div>
    </div>
  );
}
