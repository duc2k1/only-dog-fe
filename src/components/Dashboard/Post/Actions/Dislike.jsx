import React, { useContext } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";
//--------------------------------------------------
export default function Dislike({ like, setLike, dislike, setDislike }) {
  const { setShowModalLogin } = useContext(AppContext);
  //--------------------------------------------------
  const handleSetDislike = () => {
    setShowModalLogin(true);
    console.log("dislike");
  };
  //--------------------------------------------------
  return (
    <div onClick={handleSetDislike}>
      <small>25</small>
      <AiOutlineDislike
        size="25"
        role="button"
        className={dislike ? "d-none" : "mt-2"}
      />
      <AiFillDislike
        size="25"
        role="button"
        className={dislike ? "mt-2" : "d-none"}
      />
    </div>
  );
}
