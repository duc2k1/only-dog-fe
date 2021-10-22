import React, { useContext, memo } from "react";
import logo from "../../assets/images/logo.svg";
import { AppContext } from "../../contexts/AppProvider";
//--------------------------------------------------
export default memo(function Logo() {
  const { setPage } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <img
      role="button"
      src={logo}
      alt="Logo OnlyDog"
      width={200}
      onClick={() => {
        setPage("dashboard");
      }}
      style={{ userSelect: "none" }}
      className="my-2"
    />
  );
});
