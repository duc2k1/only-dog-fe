import React, { useState } from "react";
import Placeholder from "../Placeholder";
//--------------------------------------------------
export default function Photo() {
  const [loaded, setLoaded] = useState(false);
  //--------------------------------------------------
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <img
        src="https://picsum.photos/1000"
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
}
