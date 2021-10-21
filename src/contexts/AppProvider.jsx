import React, { memo, useState, createContext } from "react";

export const AppContext = createContext();
export default memo(function AppProvider({ children }) {
  const [openModal, setOpenModal] = useState(null);
  const [page, setPage] = useState("dashboard");

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
