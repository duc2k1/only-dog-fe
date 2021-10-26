import React, { useContext, memo } from "react";
import { RiImageAddLine } from "react-icons/ri";
import ModalLogin from "../../Modal/ModalLogin";
import ModalRegister from "../../Modal/ModalRegister";
import AvatarUser from "./AvatarUser";
import { AuthContext } from "../../../contexts/AuthProvider";
import ModalImage from "../../ModalImage";
import Logout from "./Logout";
//--------------------------------------------------
export default memo(function Actions() {
  const { stateAccessToken, setStateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  window.onstorage = () => {
    localStorage.getItem("accessToken")
      ? setStateAccessToken(JSON.parse(localStorage.getItem("accessToken")))
      : setStateAccessToken("");
  };
  //--------------------------------------------------
  return (
    <div>
      <div
        className={
          stateAccessToken ? "d-flex justify-content-around" : "d-none"
        }
      >
        <ModalImage
          component={
            <RiImageAddLine
              style={{ marginRight: 18 }}
              role="button"
              size="30"
            />
          }
        />
        <AvatarUser />
        <Logout setStateAccessToken={setStateAccessToken} />
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
});
