import React, { memo, useState } from "react";
import ButtonFollow from "../ButtonFollow";
import ModalImage from "../ModalImage";
import Placeholder from "../Placeholder";
import avatar from "../../assets/images/avatarDefault.png";
//--------------------------------------------------
export default memo(function Header() {
  const [loaded, setLoaded] = useState(false);
  //--------------------------------------------------
  return (
    <div>
      <div className="row p-5">
        <div className="col-md-4 text-center">
          <ModalImage
            component={
              <>
                <img
                  src={avatar}
                  alt=""
                  width="200"
                  height="200"
                  role="button"
                  style={{ objectFit: "cover", userSelect: "none" }}
                  onLoad={() => setLoaded(true)}
                  className={loaded ? "rounded-circle" : "d-none"}
                />
                {!loaded && (
                  <Placeholder rounded={true} width={200} height={200} />
                )}
              </>
            }
          />
        </div>
        <div className="col-md-8" style={{ marginTop: 65 }}>
          <h3 className="text-center">aaaaaaaaaa</h3>
          <div className="d-flex justify-content-around">
            <p className="me-3">
              <b>111</b> posts
            </p>
            <p className="me-3">
              <b>11</b> Followers
            </p>
            <p className="me-3">
              <b>1</b> Following
            </p>
          </div>
          <div className="text-center">
            <ButtonFollow />
          </div>
        </div>
      </div>
    </div>
  );
});
