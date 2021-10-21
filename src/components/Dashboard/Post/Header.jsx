import React, { useContext, useState } from "react";
import { AppContext } from "../../../contexts/AppProvider";
import Placeholder from "../../Placeholder";
//-----------------------------------------------------------
export default function Header() {
  const [loaded, setLoaded] = useState(false);
  const { setPage } = useContext(AppContext);
  //-----------------------------------------------------------
  return (
    <div className="d-flex">
      <img
        src="https://picsum.photos/1000"
        alt="Avatar"
        width="40"
        height="40"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle me-1 my-1" : "d-none"}
        onClick={() => setPage("profile")}
      />
      {!loaded && (
        <div className="me-1 my-1">
          <Placeholder rounded={true} width={40} height={40} />
        </div>
      )}
      <div>
        <small>
          <b>nameeeeee</b>
        </small>
        <br />
        <small className="text-muted">1/10/2001</small>
      </div>
    </div>
  );
}
