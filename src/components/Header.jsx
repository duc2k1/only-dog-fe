import React, { useContext, useState } from "react";
import ModalLogin from "./Modal/ModalLogin";
import ModalRegister from "./Modal/ModalRegister";
import logo from "../assets/images/logo.svg";
import ModalAddPost from "./Modal/ModalAddPost";
import useUser from "../hooks/useUser";
import LoggedInUserContext from "../context/LoggedInUser";
import FirebaseContext from "../context/firebase";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

export default function Header({ setPage, user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser?.uid);
  const { fire } = useContext(FirebaseContext);
  const [find, setFind] = useState("");

  const handleFind = (val) => {
    setPage("find");
  };

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
            style={{ userSelect: "none" }}
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
              <div className="d-flex">
                <input
                  className="form-control me-2 p-1"
                  placeholder="Find user"
                  onKeyDown={(e) => {
                    e.key === "Enter" && handleFind(find);
                  }}
                  onChange={(e) => setFind(e.target.value)}
                  value={find}
                />
                <button
                  onClick={() => handleFind(find)}
                  className="btn btn-outline-primary pt-1 pb-2 px-3"
                >
                  <FiSearch />
                </button>
              </div>
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
                style={{ objectFit: "cover", userSelect: "none" }}
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
