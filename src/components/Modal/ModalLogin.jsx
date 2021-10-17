import React, { useState, useContext, useRef } from "react";
import Alert from "../Alert";
import FirebaseContext from "../../context/firebase";

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
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalLogin"
        ref={ref}
      >
        Login
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
              />
            </div>
            <div className="modal-body">
              <form
                onSubmit={() => handleLogin()}
                method="POST"
                className="py-3"
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email@example.com"
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                    required
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
                    id="password"
                    placeholder="Password (min leangth = 6)"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                    required
                    minLength="6"
                    maxLength="50"
                  />
                </div>
                <button type="submit" className={`btn btn-primary me-2`}>
                  Login
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleLoginWithGoogle()}
                >
                  Login with Google <i className="fab fa-google"></i>
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
