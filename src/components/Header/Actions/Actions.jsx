import React, { useContext } from "react";
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
  //--------------------------------------------------
  return stateAccessToken ? (
    <div className="d-flex justify-content-around">
      <ModalAddPost />
      <AvatarUser />
      <RiLogoutBoxRLine
        role="button"
        size="30"
        onClick={() => {
          setStateAccessToken(accessToken);
          localStorage.removeItem("accessToken");
        }}
      />
    </div>
  ) : (
    <div className="d-flex justify-content-around">
      <ModalLogin />
      <ModalRegister />
    </div>
  );
}
