import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { AppContext } from "../../contexts/AppProvider";
//--------------------------------------------------
export default function Find({ find, setFind }) {
  const { setPage } = useContext(AppContext);
  //--------------------------------------------------
  const handleFind = (val) => {
    setPage("find");
  };
  //--------------------------------------------------
  return (
    <div
      className="d-flex justify-content-center my-3"
      style={{ width: "100%" }}
    >
      <div className="d-flex">
        <input
          className="form-control me-2 p-1 border-dark"
          placeholder="Find user"
          onKeyDown={(e) => {
            e.key === "Enter" && handleFind(find);
          }}
          onChange={(e) => setFind(e.target.value)}
          value={find}
        />
        <div
          role="button"
          className="border border-dark rounded pt-1 pb-2 px-3 text-dark"
          onClick={() => handleFind(find)}
        >
          <FiSearch size={20} />
        </div>
      </div>
    </div>
  );
}
