import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";

export default function BackToTop() {
  const handleToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <BsArrowUpCircle
      onClick={handleToTop}
      id="btn-back-to-top"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
      }}
      size="30"
      role="button"
      className="text-dark"
    />
  );
}
