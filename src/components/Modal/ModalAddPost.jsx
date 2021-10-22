import React, { useState, useEffect } from "react";
import { RiImageAddLine } from "react-icons/ri";
import * as tmImage from "@teachablemachine/image";
import placehoderImg from "../../assets/images/grey.jpg";
import { Modal } from "react-bootstrap";
import { Alert, Form, Button, Spinner } from "react-bootstrap";
//----------------------------------------------------------
const URL = "https://teachablemachine.withgoogle.com/models/wNpy2osdc/";
const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";
//----------------------------------------------------------
export default function ModalAddPost() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [isDog, setIsDog] = useState(null);
  const [showAddPost, setShowAddPost] = useState();
  const [error, setError] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  //------------------------------------------------------------
  useEffect(() => {
    isDog === false && setError("Not dogggggg");
  }, [isDog]);
  //------------------------------------------------------------
  const handleChange = (event) => {
    console.log("change img");
    setFile(event.target.files[0]);
  };
  const handleUpload = (event) => {
    console.log("upload");
    setLoading(true);
    const imageFile = file;
    if (imageFile) {
      if (imageFile.size / 1024 / 1024 <= 0.5) {
        setImage(imageFile);
        const reader = new FileReader();
        let prediction = null;
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
        reader.readAsDataURL(imageFile);
      } else {
        setLoading(false);
        alert(
          "This image too large, change other image: " +
            Math.round((e.target.files[0].size / 1024 / 1024) * 100) / 100 +
            "MB"
        );
      }
    }
  };
  const handleClose = () => setShowAddPost(false);
  const handleShow = () => setShowAddPost(true);
  //-------------------------------------------------------------
  return (
    <>
      <RiImageAddLine
        style={{ marginRight: 18 }}
        role="button"
        size="30"
        onClick={handleShow}
      />
      <Modal show={showAddPost} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpload}
              >
                Upload
              </button>
            )}
          </div>
          <img
            src={placehoderImg}
            alt="image"
            className="img-fluid mb-2"
            style={{ userSelect: "none" }}
          />
          {error && <Alert variant="danger">{error}</Alert>}
        </Modal.Body>
      </Modal>
    </>
  );
}
