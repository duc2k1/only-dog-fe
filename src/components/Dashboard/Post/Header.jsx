import React, { useState, memo } from "react";
import Placeholder from "../../Placeholder";
import { formatDate } from "../../../helpers/commonFunctions";
import { Link } from "react-router-dom";
//-----------------------------------------------------------
export default memo(function Header({ dataPost }) {
  const [loaded, setLoaded] = useState(false);
  //-----------------------------------------------------------
  return (
    <div className="d-flex">
      <Link to="/profile">
        <img
          src={dataPost.user.pathAvatar}
          alt="Avatar"
          width="40"
          height="40"
          role="button"
          style={{ objectFit: "cover", userSelect: "none" }}
          onLoad={() => setLoaded(true)}
          className={loaded ? "rounded-circle me-1 my-1" : "d-none"}
        />
      </Link>
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
