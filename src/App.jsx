import React, { useState, lazy, Suspense } from "react";

import UserContext from "./context/User";
import useAuthListener from "./hooks/useAuthListener";

const Header = lazy(() => import("./components/Header"));
const Post = lazy(() => import("./components/Post/Post"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Suggestions = lazy(() => import("./components/Suggestions/Suggestions"));
const BackToTop = lazy(() => import("./components/BackToTop"));

function App() {
  const [page, setPage] = useState("dashboard");
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
        }
      >
        <div className="container">
          <Header setPage={setPage} user={user} />
          {page === "profile" ? (
            <Profile user={user} />
          ) : (
            <>
              <Suggestions />
              <main className="py-5">
                <div className="row" data-masonry='{"percentPosition": true }'>
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                </div>
              </main>
            </>
          )}
          <BackToTop />
        </div>
      </Suspense>
    </UserContext.Provider>
  );
}

export default App;
