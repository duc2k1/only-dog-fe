import React, { useState, useContext, memo, useEffect } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthProvider";
import { AppContext } from "../../contexts/AppProvider";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import SpinnerBootstrap from "../SpinnerBootstrap";
import { passwordPattern } from "../../patterns/passwordPattern";
import { emailPattern } from "../../patterns/emailPattern";
//----------------------------------------------------------------
export default memo(function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDoneAllInput, setIsDoneAllInput] = useState(false);
  const { setStateAccessToken } = useContext(AuthContext);
  const { showModalLogin, setShowModalLogin, setShowModalRegister } =
    useContext(AppContext);
  //----------------------------------------------------------------
  const handleClose = () => setShowModalLogin(false);
  const handleShow = () => setShowModalLogin(true);
  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(import.meta.env.VITE_DOMAIN_API + "/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setError(null);
          setShowModalLogin(false);
          localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
          setStateAccessToken(data.accessToken);
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  };
  const handleOpenRegister = () => {
    setShowModalLogin(false);
    setShowModalRegister(true);
  };
  //----------------------------------------------------------------
  useEffect(() => {
    if (email && password) {
      setIsDoneAllInput(true);
    } else {
      setIsDoneAllInput(false);
    }
    console.log(isDoneAllInput);
  }, [email, password]);
  //----------------------------------------------------------------
  return (
    <>
      <RiLoginBoxLine
        role="button"
        size="30"
        onClick={handleShow}
        className="me-3"
      />
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
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                maxLength="30"
                pattern={emailPattern}
              />
              <Form.Text className="text-muted">
                Max length email is 20
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                pattern={passwordPattern}
              />
              <Form.Text className="text-muted">
                Must contain at least one number, one letter or more characters
                and at least 6
              </Form.Text>
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="d-flex justify-content-between">
              {loading ? (
                <Button variant="primary" disabled>
                  <SpinnerBootstrap />
                  Loading...
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!isDoneAllInput}
                >
                  Login
                </Button>
              )}
              <Button
                variant="primary"
                className="float-end"
                onClick={handleOpenRegister}
              >
                Register
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
});
