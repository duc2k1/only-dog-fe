import React from "react";
import Suggestion from "./Suggestion";
import seed from "../../../seed";
//--------------------------------------------------
export default function Suggestions({ openModal, setOpenModal }) {
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
        {seed.slice(0, 6).map((val) => (
          <Suggestion
            key={val.uid}
            name={val.name}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ))}
      </div>
    </div>
  );
}
