import React, { useState } from "react";
import Alert from "../Alert";
import { storage } from "../../lib/firebase";

export default function ModalAddPost() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
        >
          Add Post
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex={-1}
          aria-labelledby="exampleModal3Label"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModal3Label">
                  Post
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <input
                      className="col-sm-6"
                      type="file"
                      onChange={handleChange}
                    />
                    <div className="text-center col-sm-6">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleUpload}
                        style={{ width: 80 }}
                      >
                        Upload
                      </button>
                    </div>
                    <img
                      src={url || "http://via.placeholder.com/100"}
                      alt="firebase-image"
                      className="col-sm-6"
                    />
                    <progress
                      style={{ marginTop: 100 }}
                      value={progress}
                      max="100"
                      className="col-sm-6"
                    />
                    <p>{url && "Upload success"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
