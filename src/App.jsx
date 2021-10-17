import React, { useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post/Post";
import Profile from "./components/Profile/Profile";

function App() {
  const [page, setPage] = useState("dashboard");
  return (
    <>
      <Header setPage={setPage} />
      {page == "profile" ? <Profile /> : <Post />}
    </>
  );
}

export default App;
