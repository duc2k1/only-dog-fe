import React, { useContext, lazy, Suspense } from "react";
import styled from "styled-components";
import loading from "./assets/images/pixel-dog.gif";
import icon from "./assets/images/icon.svg";
import { AppContext } from "./contexts/AppProvider";
import { Alert } from "react-bootstrap";
const Header = lazy(() => import("./components/Header/Header"));
const Find = lazy(() => import("./components/Find/Find"));
const DashBoard = lazy(() => import("./components/Dashboard/DashBoard"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const BackToTop = lazy(() => import("./components/BackToTop"));

document.querySelector("#icon").setAttribute("href", icon);

export default function App() {
  const { page } = useContext(AppContext);

  return (
    <Suspense
      fallback={
        <DivSpinner>
          <Spinner src={loading} width="100" />
        </DivSpinner>
      }
    >
      <Header />
      {page === "dashboard" ? (
        <DashBoard />
      ) : page === "profile" ? (
        <Profile />
      ) : (
        <Find />
      )}
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
`;
