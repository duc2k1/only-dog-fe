import React, { memo, useState, createContext } from "react";
//-----------------------------------------------------------
export default memo(function AuthProvider({ children }) {
  const [stateAccessToken, setStateAccessToken] = useState("");
  //-----------------------------------------------------------
  return (
    <AuthContext.Provider
      value={{
        stateAccessToken,
        setStateAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});
//--------------------------------------------------------------
export const AuthContext = createContext();
