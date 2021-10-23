import React, { useState, useContext, memo } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthProvider";
import { AppContext } from "../../contexts/AppProvider";
import { Modal, Form, Button, Alert, Spinner } from "react-bootstrap";
import SpinnerBootstrap from "../SpinnerBootstrap";
//----------------------------------------------------------------
export default memo(function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setStateAccessToken } = useContext(AuthContext);
  const { showModalLogin, setShowModalLogin, setShowModalRegister } =
    useContext(AppContext);
  //----------------------------------------------------------------
  const handleClose = () => setShowModalLogin(false);
  const handleShow = () => setShowModalLogin(true);
  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("http://localhost:5500/api/auth/login", {
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
        data.success ? setError(null) : setError(data.message);
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        setLoading(false);
        setShowModalLogin(false);
        setStateAccessToken(data.accessToken);
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
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                maxLength="20"
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
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{6,20}"
                required
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
                <Button variant="primary" type="submit">
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
