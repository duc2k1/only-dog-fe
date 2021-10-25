import React, { memo, useState, useEffect } from "react";
import Suggestion from "./Suggestion";
import fetchWithoutToken from "../../../helpers/fetchWithoutToken";
//--------------------------------------------------
export default memo(function Suggestions({ openModal, setOpenModal }) {
  //--------------------------------------------------
  const [stateUsers, setStateUsers] = useState([]);
  //--------------------------------------------------
  useEffect(() => {
    const getData = async () => {
      setStateUsers(await fetchWithoutToken("GET", "/users"));
    };
    getData();
  }, []);
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
        {stateUsers?.users?.map((val) => (
          <Suggestion
            key={val._id}
            userName={val.userName}
            userId={val._id}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ))}
      </div>
    </div>
  );
});
