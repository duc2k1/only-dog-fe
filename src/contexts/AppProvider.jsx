import React, { memo, useState, createContext } from "react";
import postsOfUser from "../seeds/postsOfUser.json";
import postsUserFollow from "../seeds/postsUserFollow.json";
import dataUser from "../seeds/dataUser.json";
import usersFind from "../seeds/usersFind.json";
import usersSuggestion from "../seeds/usersSuggestion.json";
//-----------------------------------------------------------
export default memo(function AppProvider({ children }) {
  const [page, setPage] = useState("dashboard");
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalUpdateAvatar, setShowModalUpdateAvatar] = useState(false);
  const [showModalImage, setShowModalImage] = useState(false);
  const [stateDataUser, setStateDataUser] = useState(dataUser);
  const [statePostsUserFollow, setStatePostsUserFollow] =
    useState(postsUserFollow);
  //-----------------------------------------------------------
  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        showModalRegister,
        setShowModalRegister,
        showModalLogin,
        setShowModalLogin,
        showModalUpdateAvatar,
        setShowModalUpdateAvatar,
        showModalImage,
        setShowModalImage,
        stateDataUser,
        setStateDataUser,
        statePostsUserFollow,
        setStatePostsUserFollow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
//--------------------------------------------------------------
export const AppContext = createContext();
