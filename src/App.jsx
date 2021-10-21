import React, { useContext, lazy, Suspense } from "react";
import styled from "styled-components";
import loading from "./assets/images/pixel-dog.gif";
import icon from "./assets/images/icon.svg";
import { AppContext } from "./contexts/AppProvider";
//--------------------------------------------------
const Header = lazy(() => import("./components/Header/Header"));
const Find = lazy(() => import("./components/Find/Find"));
const DashBoard = lazy(() => import("./components/Dashboard/DashBoard"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const BackToTop = lazy(() => import("./components/BackToTop"));
//--------------------------------------------------
document.querySelector("#icon").setAttribute("href", icon);
//--------------------------------------------------
export default function App() {
  const { page } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <Suspense
      fallback={
        <Loading>
          <Spinner src={loading} width="100" />
        </Loading>
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
//--------------------------------------------------
const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Spinner = styled.img`
  user-select: none;
`;
