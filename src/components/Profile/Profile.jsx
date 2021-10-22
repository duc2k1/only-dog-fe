import React, { memo } from "react";
import Header from "./Header";
import Photos from "./Photos";
//--------------------------------------------------
export default memo(function Profile() {
  //--------------------------------------------------
  return (
    <div className="container">
      <Header />
      <Photos />
    </div>
  );
});
