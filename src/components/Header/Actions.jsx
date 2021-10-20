import React, { useState } from "react";
import ModalLogin from "../Modal/ModalLogin";
import ModalRegister from "../Modal/ModalRegister";
import ModalAddPost from "../Modal/ModalAddPost";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import pixelDog from "../../assets/images/pug.jpg";

export default function Actions({ setPage }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className={`d-flex justify-content-around mb-3`}>
        <ModalAddPost />
        <img
          role="button"
          width="30"
          height="30"
          src={pixelDog}
          onClick={() => {
            setPage("profile");
          }}
          style={{ objectFit: "cover", userSelect: "none" }}
          onLoad={() => setLoaded(true)}
          className={loaded ? "rounded-circle me-3" : "d-none"}
        />
        <div className={loaded ? "d-none" : "me-3"} style={{ marginTop: -5 }}>
          <Skeleton circle={true} width={30} height={30} />
        </div>

        <RiLogoutBoxRLine
          role="button"
          size="30"
          onClick={() => console.log("logout")}
        />
      </div>
      <div className={`d-flex justify-content-around`}>
        <ModalRegister />
        <ModalLogin />
      </div>
    </div>
  );
}
