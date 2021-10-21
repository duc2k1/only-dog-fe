import React, { useContext } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";
//--------------------------------------------------
export default function Like({ like, setLike, dislike, setDislike }) {
  const handleSetLike = () => {
    like ? setLike(!like) : setLike(true);
    dislike && setDislike(!dislike);
  };
  const { setOpenModal } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <div onClick={handleSetLike}>
      <small>25</small>
      <AiOutlineLike
        size="25"
        role="button"
        className={like ? "d-none" : ""}
        onClick={() => setOpenModal("login")}
        style={{ marginBottom: 10 }}
      />
      <AiFillLike
        size="25"
        role="button"
        className={like ? "" : "d-none"}
        onClick={() => setOpenModal("login")}
        style={{ marginBottom: 10 }}
      />
    </div>
  );
}
