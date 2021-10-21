import React, { memo, useState, createContext } from "react";
//--------------------------------------------------------------
export const AppContext = createContext();
//-----------------------------------------------------------
export default memo(function AppProvider({ children }) {
  const [page, setPage] = useState("dashboard");
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
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
        showAddPost,
        setShowAddPost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
