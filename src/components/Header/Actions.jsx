import React, { useState } from "react";
import ModalLogin from "../Modal/ModalLogin";
import ModalRegister from "../Modal/ModalRegister";
import ModalAddPost from "../Modal/ModalAddPost";
import { RiLogoutBoxRLine } from "react-icons/ri";
import greyImg from "../../assets/images/grey.jpg";

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
          src="https://picsum.photos/1000"
          onClick={() => {
            setPage("profile");
          }}
          style={{ objectFit: "cover", userSelect: "none" }}
          onLoad={() => setLoaded(true)}
          className={loaded ? "rounded-circle me-3" : "d-none"}
        />

        {!loaded && (
          <img
            className="rounded-circle me-3"
            src={greyImg}
            height={30}
            width={30}
          />
        )}

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
