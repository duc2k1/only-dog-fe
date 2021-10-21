import React from "react";
import ButtonFollow from "../ButtonFollow";
import ModalAvatar from "./ModalAvatar";
//--------------------------------------------------
export default function Header() {
  //--------------------------------------------------
  return (
    <div>
      <div className="row p-5">
        <div className="col-md-4 text-center">
          <ModalAvatar />
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
}
