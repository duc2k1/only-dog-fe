import React, { memo } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
//--------------------------------------------------
export default memo(function InputFind({ find, setFind }) {
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
          onChange={(e) => setFind(e.target.value)}
          value={find}
        />
        <Link to={"/find?user_name=" + find }>
          <div
            role="button"
            className="border border-dark rounded pt-1 pb-2 px-3 text-dark"
          >
            <FiSearch size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
});
