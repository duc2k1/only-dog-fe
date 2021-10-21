import React, { useContext } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";

export default function Like({ like, setLike, dislike, setDislike }) {
  const handleSetLike = () => {
    like ? setLike(!like) : setLike(true);
    dislike && setDislike(!dislike);
  };
  const { setOpenModal } = useContext(AppContext);

  return (
    <div onClick={handleSetLike}>
      <AiOutlineLike
        size="25"
        role="button"
        className={like ? "d-none" : "mb-1"}
        onClick={() => setOpenModal("login")}
      />
      <AiFillLike
        size="25"
        role="button"
        className={like ? "mb-1" : "d-none"}
        onClick={() => setOpenModal("login")}
      />
      <small>25</small>
    </div>
  );
}
