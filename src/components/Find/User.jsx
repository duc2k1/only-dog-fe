import React, { useState, useContext } from "react";
import Placeholder from "../Placeholder";
import ButtonFollow from "../ButtonFollow";
import { AppContext } from "../../contexts/AppProvider";
//--------------------------------------------------
export default function User() {
  const [loaded, setLoaded] = useState(false);
  const { setPage } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <div className="col-4 col-md-2 text-center mb-3">
      <img
        className="rounded-circle"
        src="https://picsum.photos/1000"
        alt=""
        width="80"
        height="80"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle" : "d-none"}
        onClick={() => setPage("profile")}
      />
      {!loaded && <Placeholder rounded={true} width={80} height={80} />}
      <br />
      <small>dfgdfg</small>
      <br />
      <ButtonFollow />
    </div>
  );
}
