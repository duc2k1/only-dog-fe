import React, { useState, memo } from "react";
import Placeholder from "../../../components/Placeholder";
import splitDate from "../../../helpers/splitDate";
import { Link } from "react-router-dom";
import toTop from "../../../helpers/toTop";
//-----------------------------------------------------------
export default memo(function Header({ dataPost }) {
  const dataUser = dataPost?.user;
  const [loaded, setLoaded] = useState(false);
  //-----------------------------------------------------------
  return (
    <div className="d-flex">
      <Link to={"/profile?user_id=" + dataUser._id} onClick={() => toTop()}>
        <img
          src={dataUser.pathAvatar}
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
          <small>{dataUser.userName}</small>
        </b>
        <br />
        <small className="text-muted">{splitDate(dataPost.createdAt)}</small>
      </div>
    </div>
  );
});
