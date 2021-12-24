import React, { memo, useState, createContext } from "react";
//-----------------------------------------------------------
export default memo(function AuthProvider({ children }) {
  const [stateAccessToken, setStateAccessToken] = useState(
    getTokenFromLocalStorage().accessToken
  );
  const [stateRefreshToken, setStateRefreshToken] = useState(
    getTokenFromLocalStorage().refreshToken
  );
  //-----------------------------------------------------------
  return (
    <AuthContext.Provider
      value={{
        stateAccessToken,
        setStateAccessToken,
        stateRefreshToken,
        setStateRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});
//--------------------------------------------------------------
function getTokenFromLocalStorage() {
  const parseDataLocalStorageToJSON = (key) => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : "";
  };

  const accessToken = parseDataLocalStorageToJSON("accessToken");
  const refreshToken = parseDataLocalStorageToJSON("refreshToken");

  return { accessToken, refreshToken };
}
//--------------------------------------------------------------
export const AuthContext = createContext();
