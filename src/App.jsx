import React, { useState } from "react";
import Alert from "./components/Alert";
import Header from "./components/Header";
import Post from "./components/Post/Post";
import Profile from "./components/Profile/Profile";

function App() {
  const [page, setPage] = useState("dashboard");
  return (
    <div className="container">
      <Header setPage={setPage} />
      {page == "profile" ? <Profile /> : <Post />}
    </div>
  );
}

export default App;
