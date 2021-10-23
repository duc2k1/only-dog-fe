import React, { useContext, lazy, Suspense, memo } from "react";
import icon from "./assets/images/icon.svg";
import ImageLoading from "./components/ImageLoading";
import { AppContext } from "./contexts/AppProvider";
//--------------------------------------------------
document.querySelector("#icon").setAttribute("href", icon);
//--------------------------------------------------
const Header = lazy(() => import("./components/Header/Header"));
const Find = lazy(() => import("./components/Find/Find"));
const DashBoard = lazy(() => import("./components/Dashboard/DashBoard"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const BackToTop = lazy(() => import("./components/BackToTop"));
//--------------------------------------------------
export default memo(function App() {
  const { page } = useContext(AppContext);
  //--------------------------------------------------
  return (
    <Suspense fallback={<ImageLoading />}>
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
});
