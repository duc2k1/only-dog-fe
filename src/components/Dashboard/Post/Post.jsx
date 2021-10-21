import React from "react";
import Actions from "./Actions/Actions";
import Header from "./Header";
import Image from "./Image";
//--------------------------------------------------
export default function Post() {
  //--------------------------------------------------
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <Header />
      <Image />
      <Actions />
    </div>
  );
}
