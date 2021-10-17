import React from "react";
import Header from "./Header";
import Photos from "./Photos";

export default function Profile() {
  return (
    <div>
      <Header />
      <main className="py-5">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <Photos />
          <Photos />
          <Photos />
          <Photos />
          <Photos />
        </div>
      </main>
    </div>
  );
}
