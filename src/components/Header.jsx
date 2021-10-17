import React, { useContext } from "react";
import ModalLogin from "./Modal/ModalLogin";
import ModalRegister from "./Modal/ModalRegister";
import logo from "../assets/images/logo.svg";
import ModalAddPost from "./Modal/ModalAddPost";
import useUser from "../hooks/useUser";
import LoggedInUserContext from "../context/LoggedInUser";
import FirebaseContext from "../context/firebase";

export default function Header({ setPage, user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser?.uid);
  if (user) console.log(user);
  const { fire } = useContext(FirebaseContext);

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1051,
        }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img
              src={logo}
              alt="Logo OnlyDog"
              width={100}
              onClick={() => setPage("dashboard")}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div className={fire.auth().currentUser ? "" : "d-none"}>
              <div className="nav-item me-2 mt-2">
                <ModalAddPost />
              </div>
              <div
                className="nav-item me-2 mt-2"
                onClick={() => setPage("profile")}
              >
                Profile
              </div>
              <div
                className="nav-item me-2 mt-2"
                onClick={() => fire.auth().signOut()}
              >
                Logout
              </div>
            </div>
            <div className={fire.auth().currentUser ? "d-none" : ""}>
              <div className="nav-item me-2 mt-2">
                <ModalLogin />
              </div>
              <div className="nav-item me-2 mt-2">
                <ModalRegister />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </LoggedInUserContext.Provider>
  );
}
