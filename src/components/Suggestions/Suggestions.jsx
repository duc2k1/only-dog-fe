import React from "react";
import Suggestion from "./Suggestion";
import seed from "../../seed";

export default function Suggestions() {
  return (
    <div className="row mt-4">
      <div className="row col-12 col-sm-6">
        {seed.slice(0, 3).map((val) => (
          <Suggestion key={val.uid} name={val.name} />
        ))}
      </div>
      <div className="row col-12 col-sm-6">
        {seed.slice(4, 7).map((val) => (
          <Suggestion key={val.uid} name={val.name} />
        ))}
      </div>
    </div>
  );
}
