import React, { useState, useContext, useRef } from "react";
import Alert from "../Alert";
import FirebaseContext from "../../context/firebase";
import { doesNameExist } from "../../services/firebase";
import { FiUserPlus } from "react-icons/fi";

export default function ModalRegister() {
  const { fire } = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    const nameExists = await doesNameExist(name);
    if (!nameExists) {
      try {
        const createdUserResult = await fire
          .auth()
          .createUserWithEmailAndPassword(email, password);
        await createdUserResult.user.updateProfile({
          displayName: name,
        });
        await fire.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          name: name.toLowerCase(),
          email: email.toLowerCase(),
          following: [],
          followers: [],
          dateCreated: Date.now(),
          posts: [],
          avatar: "",
        });
        setLoading(false);
        ref.current.click();
      } catch (error) {
        setEmail("");
        setError(error.message);
        setLoading(false);
      }
    } else {
      setName("");
      setError("That name is already taken, please try another.");
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        style={{ border: "none", background: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#modalRegister"
      >
        <FiUserPlus size="30" />
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="modalRegister"
        tabIndex={-1}
        aria-labelledby="modalRegisterLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalRegisterLabel">
                Register
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
              <form onSubmit={handleRegister} className="py-3">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Anri Okita"
                    onChange={({ target }) => setName(target.value)}
                    value={name}
                    required
                    maxLength="50"
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
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password (min leangth = 6, max length = 50)"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                    minLength="6"
                    maxLength="50"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={({ target }) => setConfirmPassword(target.value)}
                    value={confirmPassword}
                    pattern={password}
                  />
                </div>
                <button className={`btn btn-primary me-2`}>Register</button>
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
