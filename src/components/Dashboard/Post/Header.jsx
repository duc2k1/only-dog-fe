import React, { useContext, useState, memo } from "react";
import { AppContext } from "../../../contexts/AppProvider";
import Placeholder from "../../Placeholder";
import { formatDate } from "../../../helpers/commonFunctions";
//-----------------------------------------------------------
export default memo(function Header({ dataPost }) {
  const [loaded, setLoaded] = useState(false);
  const { setPage } = useContext(AppContext);
  //-----------------------------------------------------------
  return (
    <div className="d-flex">
      <img
        src={dataPost.user.pathAvatar}
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
        <b>
          <small>{dataPost.user.name}</small>
        </b>
        <br />
        <small className="text-muted">{formatDate(dataPost.createdAt)}</small>
      </div>
    </div>
  );
});
