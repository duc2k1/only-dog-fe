import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Find({ find, setFind, setPage }) {
  const handleFind = (val) => {
    setPage("find");
  };

  return (
    <div
      className="d-flex justify-content-center my-3"
      style={{ width: "100%" }}
    >
      <div className="d-flex">
        <input
          className="form-control me-2 p-1 border-secondary"
          placeholder="Find user"
          onKeyDown={(e) => {
            e.key === "Enter" && handleFind(find);
          }}
          onChange={(e) => setFind(e.target.value)}
          value={find}
        />
        <button
          onClick={() => handleFind(find)}
          className="btn btn-outline-secondary pt-1 pb-2 px-3 text-dark"
        >
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  );
}
