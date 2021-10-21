import React, { useState, lazy, Suspense } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
//--------------------------------------------------
const ModalLogin = lazy(() => import("../../Modal/ModalLogin"));
const ModalRegister = lazy(() => import("../../Modal/ModalRegister"));
const ModalAddPost = lazy(() => import("../../Modal/ModalAddPost"));
const AvatarUser = lazy(() => import("./AvatarUser"));
//--------------------------------------------------
export default function Actions() {
  const [isLogin, setIsLogin] = useState(false);
  //--------------------------------------------------
  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  );
}
