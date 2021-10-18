import React, { useContext } from "react";
import ModalLogin from "./Modal/ModalLogin";
import ModalRegister from "./Modal/ModalRegister";
import logo from "../assets/images/logo.svg";
import ModalAddPost from "./Modal/ModalAddPost";
import useUser from "../hooks/useUser";
import LoggedInUserContext from "../context/LoggedInUser";
import FirebaseContext from "../context/firebase";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Header({ setPage, user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser?.uid);
  const { fire } = useContext(FirebaseContext);

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1051,
        }}
        className="navbar navbar-expand navbar-light"
      >
        <div className="container">
          <img
            style={{ cursor: "pointer" }}
            src={logo}
            alt="Logo OnlyDog"
            width={200}
            onClick={() => {
              setPage("dashboard");
            }}
          />

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
            <div
              className={`${fire.auth().currentUser ? "" : "d-none"} d-flex`}
            >
              <ModalAddPost />
              <CgProfile
                style={{ cursor: "pointer" }}
                size="30"
                className="me-4"
                onClick={() => {
                  setPage("profile");
                }}
              />
              <RiLogoutCircleRLine
                style={{ cursor: "pointer" }}
                size="30"
                className="me-2"
                onClick={() => fire.auth().signOut()}
              />
            </div>
            <div
              className={`${fire.auth().currentUser ? "d-none" : ""} d-flex`}
            >
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
