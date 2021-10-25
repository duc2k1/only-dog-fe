import React, { memo, useState, createContext } from "react";
//-----------------------------------------------------------
export default memo(function AppProvider({ children }) {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalUpdateAvatar, setShowModalUpdateAvatar] = useState(false);
  const [showModalImage, setShowModalImage] = useState(false);
  const [stateUserIdProfile, setStateUserIdProfile] = useState("");
  //-----------------------------------------------------------
  return (
    <AppContext.Provider
      value={{
        showModalRegister,
        setShowModalRegister,
        showModalLogin,
        setShowModalLogin,
        showModalUpdateAvatar,
        setShowModalUpdateAvatar,
        showModalImage,
        setShowModalImage,
        stateUserIdProfile,
        setStateUserIdProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
//--------------------------------------------------------------
export const AppContext = createContext();
