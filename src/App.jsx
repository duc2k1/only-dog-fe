import React, { useState, lazy, Suspense } from "react";
import BackToTop from "./components/BackToTop";
import UserContext from "./context/User";
import useAuthListener from "./hooks/useAuthListener";

const Header = lazy(() => import("./components/Header"));
const Post = lazy(() => import("./components/Post/Post"));
const Profile = lazy(() => import("./components/Profile/Profile"));

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
          )}
          <BackToTop />
        </div>
      </Suspense>
    </UserContext.Provider>
  );
}

export default App;
