import React, { useState, memo } from "react";
import Placeholder from "../../components/Placeholder";
import ButtonFollow from "../../components/ButtonFollow";
import { Link } from "react-router-dom";
//--------------------------------------------------
export default memo(function User() {
  const [loaded, setLoaded] = useState(false);
  //--------------------------------------------------
  return (
    <div className="col-4 col-md-2 text-center mb-3">
      <Link to="/profile">
        <img
          src="https://picsum.photos/1000"
          alt=""
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
      <small>dfgdfg</small>
      <br />
      <ButtonFollow />
    </div>
  );
});
