import React, { useState, useContext, useRef, useEffect } from "react";
import Alert from "../Alert";
import { BsGoogle } from "react-icons/bs";
import { RiLoginBoxLine } from "react-icons/ri";

export default function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const handleLoginWithGoogle = () => {
    console.log("hello");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("login");
  };

  return (
    <div>
      <button
        style={{ border: "none", background: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#modalLogin"
      >
        <RiLoginBoxLine size="30" />
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="modalLogin"
        tabIndex={-1}
        aria-labelledby="modalLoginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLoginLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={ref}
                onKeyDown={(e) => e.key === "Esc"}
              />
            </div>
            <div className="modal-body">
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
              <Alert error={error} />
              {loading && (
                <div className="text-center">
                  <div
                    className="spinner-border text-dark "
                    role="status"
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}