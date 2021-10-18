import React, { useState, useContext, useRef, useEffect } from "react";
import Alert from "../Alert";
import FirebaseContext from "../../context/firebase";
import { BsGoogle } from "react-icons/bs";
import { RiLoginCircleLine } from "react-icons/ri";

export default function ModalLogin() {
  const { fire } = useContext(FirebaseContext);
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
    try {
      setLoading(true);
      await fire.auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
      ref.current.click();
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        style={{ border: "none", background: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#modalLogin"
      >
        <RiLoginCircleLine size="30" />
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="modalLogin"
        tabIndex={-1}
        aria-labelledby="modalLoginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleLogin} className="py-3">
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
                <button className={`btn btn-primary me-2`}>Login</button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleLoginWithGoogle()}
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
