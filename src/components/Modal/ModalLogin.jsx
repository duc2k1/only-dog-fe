import React, { useState, useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { RiLoginBoxLine } from "react-icons/ri";
import { AppContext } from "../../contexts/AppProvider";
import { Modal } from "react-bootstrap";
//----------------------------------------------------------------
export default function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { showModalLogin, setShowModalLogin, setShowModalRegister } =
    useContext(AppContext);
  //----------------------------------------------------------------
  const handleClose = () => setShowModalLogin(false);
  const handleShow = () => setShowModalLogin(true);
  const handleLoginWithGoogle = () => {
    console.log("hello");
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("login");
  };
  const handleOpenRegister = () => {
    setShowModalLogin(false);
    setShowModalRegister(true);
  };
  //----------------------------------------------------------------
  return (
    <div className="me-3">
      <RiLoginBoxLine role="button" size="30" onClick={handleShow} />
      <Modal
        show={showModalLogin}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
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
            <button
              type="submit"
              className="btn btn-dark me-2"
              onSubmit={handleLogin}
            >
              Login
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={handleLoginWithGoogle}
            >
              Login with Google <BsGoogle className="mb-1" size="19" />
            </button>
            <button
              className="btn btn-dark float-end"
              onClick={handleOpenRegister}
            >
              Register
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
