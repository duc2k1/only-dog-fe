import React from "react";
import AddPostModal from "./Modal/ModalLogin";

export default function Header({ setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <div className="nav-item me-2 mt-2">
            <AddPostModal />
          </div>
          <div
            className="nav-item me-2 mt-2"
            onClick={() => setPage("profile")}
          >
            | Profile
          </div>
          <div className="nav-item me-2 mt-2">| Logout</div>
        </div>
      </div>
    </nav>
  );
}
