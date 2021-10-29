import React, { useState, memo } from "react";
import Placeholder from "../../components/Placeholder";
//--------------------------------------------------
export default memo(function PostProfile({ dataPost }) {
  const [loaded, setLoaded] = useState(false);
  //--------------------------------------------------
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <img
        src={import.meta.env.VITE_DOMAIN_API + dataPost.pathImage}
        alt="Image of user"
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "" : "d-none"}
        width="100%"
        height="300"
      />
      {!loaded && <Placeholder height={300} />}
    </div>
  );
});
