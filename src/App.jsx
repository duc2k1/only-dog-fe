import React, { useState, lazy, Suspense } from "react";
import UserContext from "./context/User";
import useAuthListener from "./hooks/useAuthListener";
import icon from "./assets/images/icon.svg";
import styled from "styled-components";
const Header = lazy(() => import("./components/Header"));
const Post = lazy(() => import("./components/Post/Post"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Suggestions = lazy(() => import("./components/Suggestions/Suggestions"));
const BackToTop = lazy(() => import("./components/BackToTop"));

document.querySelector("#icon").setAttribute("href", icon);

export default function App() {
  const [page, setPage] = useState("dashboard");
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Suspense
        fallback={
          <div className="text-center mt-5">
            <Spinner src={icon} width="100" alt="" />
          </div>
        }
      >
        <div className="container">
          <Header setPage={setPage} user={user} />
          <div className={page === "dashboard" ? "" : "d-none"}>
            <Suggestions />
            <main className="py-5">
              <div className="row" data-masonry='{"percentPosition": true }'>
                <Post />
              </div>
            </main>
          </div>
          <Profile page={page} user={user} />
          <BackToTop />
        </div>
      </Suspense>
    </UserContext.Provider>
  );
}

const Spinner = styled.img`
  animation: spin 0.1s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
