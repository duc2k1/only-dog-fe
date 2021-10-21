import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Placeholder from "../Placeholder";
import placehoderImg from "../../assets/images/grey.jpg";
//--------------------------------------------------
export default function ModalAvatar() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  //--------------------------------------------------
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    console.log("upload");
  };
  //--------------------------------------------------
  return (
    <>
      <img
        src="https://picsum.photos/1000"
        alt=""
        width="200"
        height="200"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
        onClick={() => handleShow()}
        onLoad={() => setLoaded(true)}
        className={loaded ? "rounded-circle" : "d-none"}
      />
      {!loaded && <Placeholder rounded={true} width={200} height={200} />}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <small>Max size: 0.5MB</small>
              <input
                className="col-6 col-sm-6 mb-2"
                type="file"
                onChange={handleChange}
                accept="image/png, image/jpg, image/jpeg, image/bmp"
              />
              <div className="text-center col-6 col-sm-6 mb-2">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleUpload}
                  style={{ width: 80 }}
                >
                  Upload
                </button>
              </div>
              <img
                src={url || placehoderImg}
                alt="firebase-image"
                className="col-sm-12 img-fluid mb-2"
                style={{ userSelect: "none" }}
              />
              <p>{url && "Upload success"}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
