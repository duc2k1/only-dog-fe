import React from "react";
import User from "./User";
import seed from "../../seed";

export default function Users() {
  return (
    <div className="container mt-4">
      <div className="row">
        {seed.slice(0, 6).map(() => (
          <User />
        ))}
        {seed.slice(0, 6).map(() => (
          <User />
        ))}
      </div>
    </div>
  );
}
