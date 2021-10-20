import React, { useState, lazy, Suspense } from "react";
import styled from "styled-components";
import loading from "./assets/images/pixel-dog.gif";
const icon = lazy(() => import("./assets/images/icon.svg"));
const Header = lazy(() => import("./components/Header/Header"));
const Find = lazy(() => import("./components/Find/Find"));
const DashBoard = lazy(() => import("./components/Dashboard/DashBoard"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const BackToTop = lazy(() => import("./components/BackToTop"));

document.querySelector("#icon").setAttribute("href", icon);

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <Suspense
      fallback={
        <DivSpinner>
          <Spinner src={loading} width="100" />
        </DivSpinner>
      }
    >
      <Header setPage={setPage} />
      <DashBoard setPage={setPage} page={page} />
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
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
