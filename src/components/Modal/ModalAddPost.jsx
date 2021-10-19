import React, { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { storage } from "../../lib/firebase";

export default function ModalAddPost() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0].size / 1024 / 1024 <= 0.5) {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    } else {
      alert(
        "This image too large, change other image: " +
          Math.round((e.target.files[0].size / 1024 / 1024) * 100) / 100 +
          "MB"
      );
    }
  };

  const handleUpload = () => {
    if (image) {
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
    }
  };
  return (
    <div>
      <RiImageAddLine
        style={{ marginRight: 18 }}
        role="button"
        size="30"
        data-bs-toggle="modal"
        data-bs-target="#modalAddPost"
      />
      {/* Modal */}
      <div
        className="modal fade"
        id="modalAddPost"
        tabIndex={-1}
        aria-labelledby="modalAddPostLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalAddPostLabel">
                Post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onKeyDown={(e) => e.key === "Enter"}
              />
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <small>Max size: 0.5MB</small>
                  <input
                    className="col-6 col-sm-6 mb-2"
                    type="file"
                    onChange={handleChange}
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
