import React, { useState, lazy, Suspense } from "react";
import UserContext from "./context/User";
import useAuthListener from "./hooks/useAuthListener";
import icon from "./assets/images/icon.svg";
import styled from "styled-components";
import Find from "./components/Find/Find";
import DashBoard from "./components/Dashboard/DashBoard";
const Header = lazy(() => import("./components/Header"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const BackToTop = lazy(() => import("./components/BackToTop"));

document.querySelector("#icon").setAttribute("href", icon);

export default function App() {
  const [page, setPage] = useState("dashboard");
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Suspense
        fallback={
          <DivSpinner>
            <Spinner src={icon} width="100" alt="" />
          </DivSpinner>
        }
      >
        <Header setPage={setPage} user={user} />
        <DashBoard page={page} user={user} />
        <Profile page={page} user={user} />
        <Find page={page} user={user} />
        <BackToTop />
      </Suspense>
    </UserContext.Provider>
  );
}

const DivSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Spinner = styled.img`
  animation: spin 0.00001s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
