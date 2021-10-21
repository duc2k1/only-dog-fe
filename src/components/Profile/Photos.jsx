import React from "react";
import Photo from "./Photo";
//--------------------------------------------------
export default function Photos() {
  //--------------------------------------------------
  return (
    <main className="py-5">
      <div className="row" data-masonry='{"percentPosition": true }'>
        <Photo key="1" />
        <Photo key="2" />
        <Photo key="3" />
        <Photo key="4" />
      </div>
    </main>
  );
}
