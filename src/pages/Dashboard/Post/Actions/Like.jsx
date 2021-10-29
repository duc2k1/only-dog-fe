import React, { useContext, memo } from "react";
import { ImArrowUp2 } from "react-icons/im";
import { AppContext } from "../../../../contexts/AppProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
//--------------------------------------------------
export default memo(function Like({
  like,
  setLike,
  dislike,
  setDislike,
  numberOfLike,
  dataPost,
}) {
  const { setShowModalLogin } = useContext(AppContext);
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  const handleSetLike = () => {
    if (stateAccessToken) {
      setLike(!like);
      dislike && setDislike(!dislike);
    } else setShowModalLogin(true);
    console.log(dataPost);
  };
  return (
    <div onClick={() => handleSetLike()}>
      <small className={like ? "text-primary" : ""}>
        {numberOfLike + like}
      </small>
      <ImArrowUp2
        size="25"
        role="button"
        className={like && numberOfLike ? "d-none" : ""}
        style={{ marginBottom: 10 }}
      />
      <ImArrowUp2
        size="25"
        role="button"
        className={like && numberOfLike ? "text-primary" : "d-none"}
        style={{ marginBottom: 10 }}
      />
    </div>
  );
});
