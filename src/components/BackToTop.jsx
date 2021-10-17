import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function BackToTop() {
  const handleToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      onClick={() => handleToTop()}
      type="button"
      className="btn btn-outline-primary btn-floating btn-lg"
      id="btn-back-to-top"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        borderRadius: "50%",
      }}
    >
      <AiOutlineArrowUp />
    </div>
  );
}
