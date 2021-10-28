import React, { useContext, memo } from "react";
import { AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
//--------------------------------------------------
export default memo(function Dislike({
  like,
  setLike,
  dislike,
  setDislike,
  numberOfDislike,
}) {
  const { setShowModalLogin } = useContext(AppContext);
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  const handleSetDislike = () => {
    if (stateAccessToken) {
      setDislike(!dislike);
      like && setLike(!like);
    } else setShowModalLogin(true);
  };
  //--------------------------------------------------
  return (
    <div onClick={handleSetDislike}>
      <small className={dislike ? "text-danger" : ""}>
        {numberOfDislike + dislike}
      </small>
      <AiOutlineDislike
        size="25"
        role="button"
        className={dislike ? "d-none" : ""}
      />
      <AiFillDislike
        size="25"
        role="button"
        className={dislike ? "text-danger" : "d-none"}
      />
    </div>
  );
});
