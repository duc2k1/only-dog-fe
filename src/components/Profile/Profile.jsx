import React from "react";
import Header from "./Header";
import Photos from "./Photos";
import useUser from "../../hooks/useUser";

export default function Profile({ user: loggedInUser }) {
  const { user } = useUser(loggedInUser?.uid);
  console.log("🚀 ~ file: Profile.jsx ~ line 6 ~ Profile ~ user", user);
  return (
    <div>
      <Header user={user} />
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
