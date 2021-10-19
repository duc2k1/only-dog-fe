import React, { useContext } from "react";
import ModalLogin from "./Modal/ModalLogin";
import ModalRegister from "./Modal/ModalRegister";
import logo from "../assets/images/logo.svg";
import ModalAddPost from "./Modal/ModalAddPost";
import useUser from "../hooks/useUser";
import LoggedInUserContext from "../context/LoggedInUser";
import FirebaseContext from "../context/firebase";
import { RiLogoutBoxRLine } from "react-icons/ri";

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
          background: "white",
        }}
        className="navbar navbar-expand-md navbar-light"
      >
        <div className="container">
          <img
            role="button"
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
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <form className="form-inline d-flex">
                <input
                  className="form-control me-2 px-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success px-1" type="submit">
                  Search
                </button>
              </form>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div
              className={`${
                fire.auth().currentUser ? "" : "d-none"
              } d-flex justify-content-around`}
            >
              <ModalAddPost />
              <img
                role="button"
                width="30"
                className="me-3 rounded-circle"
                src="https://placedog.net/500?random"
                onClick={() => {
                  setPage("profile");
                }}
                style={{ objectFit: "cover" }}
              />
              <RiLogoutBoxRLine
                role="button"
                size="30"
                onClick={() => fire.auth().signOut()}
              />
            </div>
            <div
              className={`${
                fire.auth().currentUser ? "d-none" : ""
              } d-flex justify-content-around`}
            >
              <div className="nav-item me-2 mt-2">
                <ModalRegister />
              </div>
              <div className="nav-item me-2 mt-2">
                <ModalLogin />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </LoggedInUserContext.Provider>
  );
}
