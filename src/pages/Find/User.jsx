import React, { useState, memo } from "react";
import Placeholder from "../../components/Placeholder";
import ButtonFollow from "../../components/ButtonFollow";
import { Link } from "react-router-dom";
import toTop from "../../helpers/toTop";
//--------------------------------------------------
export default memo(function User({ userName }) {
  const [loaded, setLoaded] = useState(false);
  //--------------------------------------------------
  return (
    <div className="col-4 col-md-2 text-center mb-3">
      <Link
        to={"/profile?user_id=" + "oi23osdifhsdi2342342"}
        onClick={() => toTop()}
      >
        <img
          src="https://picsum.photos/1000"
          alt="Image user find"
          width="80"
          height="80"
          role="button"
          style={{ objectFit: "cover", userSelect: "none" }}
          onLoad={() => setLoaded(true)}
          className={loaded ? "rounded-circle" : "d-none"}
        />
      </Link>
      {!loaded && <Placeholder rounded={true} width={80} height={80} />}
      <br />
      <small>{userName}</small>
      <br />
      <ButtonFollow />
    </div>
  );
});
