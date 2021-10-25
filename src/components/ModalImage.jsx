import React, { useState, useEffect, memo, useContext } from "react";
import * as tmImage from "@teachablemachine/image";
import placehoderImg from "../assets/images/grey.jpg";
import { Modal } from "react-bootstrap";
import { Alert, Form, Button } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthProvider";
import { AppContext } from "../contexts/AppProvider";
import SpinnerBootstrap from "./SpinnerBootstrap";
//----------------------------------------------------------
const URL = "https://teachablemachine.withgoogle.com/models/wNpy2osdc/";
const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";
//----------------------------------------------------------
export default memo(function ModalImage({ component }) {
  const [isDog, setIsDog] = useState(null);
  const [showModalAddPost, setShowModalAddPost] = useState();
  const [error, setError] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(true);
  const { stateAccessToken } = useContext(AuthContext);
  const { setShowModalLogin } = useContext(AppContext);
  //------------------------------------------------------------
  useEffect(() => {
    isDog === false && setError("Not dogggggg");
  }, [isDog]);
  //------------------------------------------------------------
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleClose = () => setShowModalAddPost(false);
  const handleShow = () =>
    stateAccessToken ? setShowModalAddPost(true) : setShowModalLogin(true);
  const handleUpload = () => {
    setLoading(true);
    if (file) {
      if (file.size / 1024 / 1024 <= 0.5) {
        const reader = new FileReader();
        let prediction = null;
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          const img = new Image();
          img.onload = async function () {
            const model = await tmImage.load(modelURL, metadataURL);
            prediction = await model.predict(img);
            if (prediction[0].probability > prediction[1].probability) {
              setLoading(false);
              alert("doggggggggg");
            } else {
              setLoading(false);
              setIsDog(false);
            }
          };
          img.src = reader.result;
        };
      } else {
        setLoading(false);
        alert(
          "This image too large, change other image: " +
            Math.round((e.target.files[0].size / 1024 / 1024) * 100) / 100 +
            "MB"
        );
      }
    } else {
      setLoading(false);
    }
  };
  //-------------------------------------------------------------
  return (
    <>
      <div onClick={handleShow}>{component}</div>
      <Modal show={showModalAddPost} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <small>Max size: 0.5MB</small>
          <div className="d-flex justify-content-between mb-1">
            <Form.Group controlId="formFile">
              <Form.Control
                type="file"
                onChange={handleChange}
                accept="image/png, image/jpg, image/jpeg, image/bmp"
              />
            </Form.Group>
            {loading ? (
              <Button disabled>
                <SpinnerBootstrap />
                Loading...
              </Button>
            ) : (
              <Button onClick={handleUpload}>Upload</Button>
            )}
          </div>
          {error && showError && (
            <Alert
              variant="danger"
              onClose={() => setShowError(false)}
              dismissible
            >
              {error}
            </Alert>
          )}
          <img
            src={placehoderImg}
            alt="image"
            className="img-fluid mb-2"
            style={{ userSelect: "none" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
});
