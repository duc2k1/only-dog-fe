import React, { useContext, useState, memo } from "react";
import { AppContext } from "../../../contexts/AppProvider";
import ButtonFollow from "../../ButtonFollow";
import Placeholder from "../../Placeholder";
//--------------------------------------------------
export default memo(function Suggestion({ name }) {
  const [loaded, setLoaded] = useState(false);
  const { setPage } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <div className="col-4 col-md-2 text-center mb-3">
      <img
        src="https://picsum.photos/1000"
        alt=""
        width="60"
        height="60"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle mb-2" : "d-none"}
        onClick={() => setPage("profile")}
      />
      {!loaded && <Placeholder rounded={true} width={60} height={60} />}
      <br />
      <small>{name}</small>
      <br />
      <ButtonFollow />
    </div>
  );
});