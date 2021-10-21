import React, { useState, useRef, useEffect, useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { RiLoginBoxLine } from "react-icons/ri";
import { AppContext } from "../../contexts/AppProvider";
import { Modal, Button } from "react-bootstrap";

export default function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { openModal, setOpenModal } = useContext(AppContext);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleClose = () => setShowModalLogin(false);
  const handleShow = () => setShowModalLogin(true);

  const handleLoginWithGoogle = () => {
    console.log("hello");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("login");
  };

  return (
    <div>
      <RiLoginBoxLine role="button" size="30" onClick={handleShow} />
      <Modal show={showModalLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleLogin}
            onKeyDown={(e) => e.key === "Enter" && handleLogin}
            className="py-3"
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="email@example.com"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                minLength="6"
                maxLength="50"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password (min leangth = 6)"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                minLength="6"
                maxLength="50"
              />
            </div>
            <button type="submit" className={`btn btn-dark me-2`}>
              Login
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={handleLoginWithGoogle}
            >
              Login with Google <BsGoogle className="mb-1" size="19" />
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
