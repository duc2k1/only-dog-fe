import React, { memo, useState, useEffect, useContext } from "react";
import Suggestion from "./Suggestion";
import fetchData from "../../../helpers/fetchData";
import { AppContext } from "../../../contexts/AppProvider";
import { AuthContext } from "../../../contexts/AuthProvider";
//--------------------------------------------------
export default memo(function Suggestions({ openModal, setOpenModal }) {
  //--------------------------------------------------
  const [stateUsers, setStateUsers] = useState([]);
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  useEffect(() => {
    const getData = async () => {
      setStateUsers(await fetchData("GET", "/users", {}, stateAccessToken));
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
