import React, { useState, useContext, memo } from "react";
import { FiUserPlus } from "react-icons/fi";
import { AppContext } from "../../contexts/AppProvider";
import { Modal, Form, Button, Alert, Spinner } from "react-bootstrap";
//------------------------------------------------------------------------------
export default memo(function ModalRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    showModalRegister,
    setShowModalRegister,
    setShowModalLogin,
    setStateAccessToken,
  } = useContext(AppContext);
  //-----------------------------------------------------------------------------
  const handleClose = () => setShowModalRegister(false);
  const handleShow = () => setShowModalRegister(true);
  const handleRegister = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("http://localhost:5500/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.success ? setError(null) : setError(data.message);
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        setLoading(false);
        setShowModalRegister(false);
        setStateAccessToken(data.accessToken);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  };
  const handleOpenLogin = () => {
    setShowModalRegister(false);
    setShowModalLogin(true);
  };
  //--------------------------------------------------
  return (
    <div>
      <FiUserPlus role="button" size="30" onClick={handleShow} />
      <Modal
        show={showModalRegister}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phuong Ly"
                onChange={({ target }) => setName(target.value)}
                value={name}
                required
                maxLength="20"
                autoComplete="one-time-code"
              />
              <Form.Text className="text-muted">
                Max length name is 20
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="DanChoiVipPro69@gmail.com"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                required
                maxLength="20"
                autoComplete="one-time-code"
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
                autoComplete="one-time-code"
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{6,}"
              />
              <Form.Text className="text-muted">
                Must contain at least one number, one letter or more characters
                and at least 6
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={({ target }) => setConfirmPassword(target.value)}
                value={confirmPassword}
                maxLength="20"
                pattern={password}
                autoComplete="one-time-code"
              />
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
                  Register
                </Button>
              )}
              <Button
                variant="primary"
                className="float-end"
                onClick={handleOpenLogin}
              >
                Login
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
});
