import React from "react";
import Header from "./Header";
import Photos from "./Photos";
import useUser from "../../hooks/useUser";

export default function Profile({ page, user: loggedInUser }) {
  const { user } = useUser(loggedInUser?.uid);
  return (
    <div className={page === "profile" ? "" : "d-none"}>
      <Header user={user} />
      <Photos />
    </div>
  );
}
