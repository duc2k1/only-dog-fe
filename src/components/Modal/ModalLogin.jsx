import React, { useState, useContext } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import { AppContext } from "../../contexts/AppProvider";
import { Modal, Form, Button, Alert, Spinner } from "react-bootstrap";
//----------------------------------------------------------------
export default function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { showModalLogin, setShowModalLogin, setShowModalRegister } =
    useContext(AppContext);
  //----------------------------------------------------------------
  const handleClose = () => setShowModalLogin(false);
  const handleShow = () => setShowModalLogin(true);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
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
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                required
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
                maxLength="20"
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{6,}"
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
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
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
    </div>
  );
}
