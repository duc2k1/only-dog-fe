import React, { useState, useContext } from "react";
import { FiUserPlus } from "react-icons/fi";
import { AppContext } from "../../contexts/AppProvider";
import { Modal, Button } from "react-bootstrap";

export default function ModalRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { openModal, setOpenModal } = useContext(AppContext);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const handleClose = () => setShowModalRegister(false);
  const handleShow = () => setShowModalRegister(true);

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log("register");
  };

  return (
    <div>
      <FiUserPlus role="button" size="30" onClick={handleShow} />
      <Modal show={showModalRegister} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleRegister}
            onKeyDown={(e) => e.key === "Enter" && handleRegister}
            className="py-3"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                pattern="^[a-zA-Z0-9]+$"
                type="text"
                className="form-control"
                placeholder="Anri Okita"
                onChange={({ target }) => setName(target.value)}
                value={name}
                maxLength="50"
                autoComplete="one-time-code"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email@example.com"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                required
                maxLength="50"
                autoComplete="one-time-code"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Password (min leangth = 6, max length = 50)"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                minLength="6"
                maxLength="50"
                autoComplete="one-time-code"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                onChange={({ target }) => setConfirmPassword(target.value)}
                value={confirmPassword}
                pattern={password}
                autoComplete="one-time-code"
              />
            </div>
            <button type="submit" className={`btn btn-dark me-2`}>
              Register
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
