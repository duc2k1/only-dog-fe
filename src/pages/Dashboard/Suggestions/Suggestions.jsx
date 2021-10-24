import React, { memo } from "react";
import Suggestion from "./Suggestion";
import suggestionUsers from "../../../seeds/suggestionUsers.json";
import { sortDescendingBasedOnFollowers } from "../../../helpers/commonFunctions";
//--------------------------------------------------
const dataSugUser = sortDescendingBasedOnFollowers(suggestionUsers.users);
//--------------------------------------------------
export default memo(function Suggestions({ openModal, setOpenModal }) {
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
        {dataSugUser.map((val) => (
          <Suggestion
            key={val._id}
            name={val.name}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ))}
      </div>
    </div>
  );
});
