import React, { useContext } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";
//--------------------------------------------------
export default function Like({ like, setLike, dislike, setDislike }) {
  const { setShowModalLogin } = useContext(AppContext);
  //--------------------------------------------------
  const handleSetLike = () => {
    setShowModalLogin(true);
  };
  return (
    <div onClick={handleSetLike}>
      <small>25</small>
      <AiOutlineLike
        size="25"
        role="button"
        className={like ? "d-none" : ""}
        style={{ marginBottom: 10 }}
      />
      <AiFillLike
        size="25"
        role="button"
        className={like ? "" : "d-none"}
        style={{ marginBottom: 10 }}
      />
    </div>
  );
}
