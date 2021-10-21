import React from "react";
import Actions from "./Actions/Actions";
import Header from "./Header";
import Image from "./Image";

export default function Post({ setPage }) {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <Header setPage={setPage} />
      <Image />
      <Actions />
    </div>
  );
}
