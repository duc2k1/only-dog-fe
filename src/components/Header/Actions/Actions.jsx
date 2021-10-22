import React, { useContext, useEffect } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import ModalLogin from "../../Modal/ModalLogin";
import ModalRegister from "../../Modal/ModalRegister";
import ModalAddPost from "../../Modal/ModalAddPost";
import AvatarUser from "./AvatarUser";
import { AppContext } from "../../../contexts/AppProvider";
//--------------------------------------------------
const accessToken = JSON.parse(localStorage.getItem("accessToken"));
//--------------------------------------------------
export default function Actions() {
  const { stateAccessToken, setStateAccessToken } = useContext(AppContext);
  useEffect(() => {
    setStateAccessToken(accessToken);
  }, [accessToken, setStateAccessToken]);
  //--------------------------------------------------
  return (
    <div>
      <div
        className={
          stateAccessToken ? "d-flex justify-content-around" : "d-none"
        }
      >
        <ModalAddPost />
        <AvatarUser />
        <RiLogoutBoxRLine
          role="button"
          size="30"
          onClick={() => {
            setStateAccessToken(null);
            localStorage.removeItem("accessToken");
          }}
        />
      </div>

      <div
        className={
          stateAccessToken ? "d-none" : "d-flex justify-content-around"
        }
      >
        <ModalLogin />
        <ModalRegister />
      </div>
    </div>
  );
}
