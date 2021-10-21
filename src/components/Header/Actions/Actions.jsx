import React, { useState } from "react";
import ModalLogin from "../../Modal/ModalLogin";
import ModalRegister from "../../Modal/ModalRegister";
import ModalAddPost from "../../Modal/ModalAddPost";
import { RiLogoutBoxRLine } from "react-icons/ri";
import AvatarUser from "./AvatarUser";
//--------------------------------------------------
export default function Actions() {
  const [isLogin, setIsLogin] = useState(false);
  //--------------------------------------------------
  return (
    <>
      <div className={!isLogin ? "d-none" : "d-flex justify-content-around"}>
        <ModalLogin />
        <ModalRegister />
      </div>
      <div className={!isLogin ? "d-flex justify-content-around" : "d-none"}>
        <ModalAddPost />
        <AvatarUser />
        <RiLogoutBoxRLine
          role="button"
          size="30"
          onClick={() => setIsLogin(true)}
        />
      </div>
    </>
  );
}
