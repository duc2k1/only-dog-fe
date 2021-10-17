import React from "react";
import Suggestion from "./Suggestion";
import seed from "../../seed";

export default function Suggestions() {
  return (
    <div className="row mt-4">
      {seed.slice(0, 6).map((val) => (
        <Suggestion key={val.uid} name={val.name} />
      ))}
    </div>
  );
}
