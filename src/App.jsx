import React, { useState, lazy, Suspense } from "react";
import useAuthListener from "./hooks/useAuthListener";
import icon from "./assets/images/icon.svg";
import styled from "styled-components";
import Find from "./components/Find/Find";
import DashBoard from "./components/Dashboard/DashBoard";
const Header = lazy(() => import("./components/Header/Header"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const BackToTop = lazy(() => import("./components/BackToTop"));

document.querySelector("#icon").setAttribute("href", icon);

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <Suspense
      fallback={
        <DivSpinner>
          <Spinner src={icon} width="100" alt="" />
        </DivSpinner>
      }
    >
      <Header setPage={setPage} />
      <DashBoard page={page} />
      <Profile page={page} />
      <Find page={page} />
      <BackToTop />
    </Suspense>
  );
}

const DivSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Spinner = styled.img`
  user-select: none;
  animation: spin 0.00001s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
