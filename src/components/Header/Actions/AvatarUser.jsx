import React, { useContext, useState } from "react";
import greyImg from "../../../assets/images/grey.jpg";
import { AppContext } from "../../../contexts/AppProvider";
//--------------------------------------------------
export default function AvatarUser() {
  const [loaded, setLoaded] = useState(false);
  const { setPage } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <div>
      <img
        role="button"
        width="30"
        height="30"
        src="https://picsum.photos/1000"
        onClick={() => {
          setPage("profile");
        }}
        style={{ objectFit: "cover", userSelect: "none" }}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle me-3" : "d-none"}
      />
      {!loaded && (
        <img
          className="rounded-circle me-3"
          src={greyImg}
          height={30}
          width={30}
        />
      )}
    </div>
  );
}
