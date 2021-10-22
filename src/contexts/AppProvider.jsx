import React, { memo, useState, createContext } from "react";
//--------------------------------------------------------------
export const AppContext = createContext();
//-----------------------------------------------------------
export default memo(function AppProvider({ children }) {
  const [page, setPage] = useState("dashboard");
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalAddPost, setShowModalAddPost] = useState(false);
  const [stateAccessToken, setStateAccessToken] = useState(true);
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
        showModalAddPost,
        setShowModalAddPost,
        stateAccessToken,
        setStateAccessToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
