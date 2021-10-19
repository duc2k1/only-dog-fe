import React, { useState } from "react";
import { storage } from "../../lib/firebase";

export default function ModalAvatar() {
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
      {/* Modal */}
      <div
        className="modal fade"
        id="modalAvatar"
        tabIndex={-1}
        aria-labelledby="modalAvatarLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalAvatarLabel">
                Update avatar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <input
                    className="col-6 col-sm-6 mb-2"
                    type="file"
                    onChange={handleChange}
                  />
                  <div className="text-center col-6 col-sm-6 mb-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleUpload}
                      style={{ width: 80 }}
                    >
                      Upload
                    </button>
                  </div>
                  <img
                    src={url || "http://via.placeholder.com/500"}
                    alt="firebase-image"
                    className="col-sm-12 img-fluid mb-2"
                    style={{ userSelect: "none" }}
                  />
                  <progress
                    value={progress}
                    max="100"
                    className="col-sm-12 mb-2"
                  />
                  <p>{url && "Upload success"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
