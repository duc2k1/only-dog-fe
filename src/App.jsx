import React, { lazy, Suspense, memo } from "react";
import icon from "./assets/images/icon.svg";
import ImageLoading from "./components/ImageLoading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//--------------------------------------------------
document.querySelector("#icon").setAttribute("href", icon);
//--------------------------------------------------
const Header = lazy(() => import("./components/Header/Header"));
const Find = lazy(() => import("./pages/Find/Find"));
const DashBoard = lazy(() => import("./pages/Dashboard/DashBoard"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const BackToTop = lazy(() => import("./components/BackToTop"));
//--------------------------------------------------
export default memo(function App() {
  //--------------------------------------------------
  return (
    <Suspense fallback={<ImageLoading />}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/find" component={Find} />
        </Switch>
      </Router>
      <BackToTop />
    </Suspense>
  );
});
