import React, { memo, useState, useEffect } from "react";
import Suggestion from "./Suggestion";
//--------------------------------------------------
export default memo(function Suggestions({ openModal, setOpenModal }) {
  //--------------------------------------------------
  const [stateUsers, setStateUsers] = useState([]);
  //--------------------------------------------------
  useEffect(() => {
    fetch(
      import.meta.env.VITE_DOMAIN_API +
        import.meta.env.VITE_ENDPOINT_GET_ALL_USER
    )
      .then((res) => res.json())
      .then((data) => setStateUsers(data))
      .catch((err) => console.log(err));
  }, []);
  //--------------------------------------------------
  return (
    <div className="container mt-4">
      <div className="row">
        {stateUsers?.users?.slice(0, 6).map((val) => (
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
