import React, { useState, useEffect } from "react";
import { RiImageAddLine } from "react-icons/ri";
import * as tmImage from "@teachablemachine/image";
import placehoderImg from "../../assets/images/grey.jpg";

const URL = "https://teachablemachine.withgoogle.com/models/wNpy2osdc/";
const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";

export default function ModalAddPost() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [isDog, setIsDog] = useState(null);

  useEffect(() => {
    isDog !== null ? (isDog ? alert("Dogggggg") : alert("Not dogggggg")) : null;
  }, [isDog]);

  const handleChange = (e) => {
    const imageFile = e.target.files[0];
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
              setIsDog(true);
              //uploaddddddddddddddddddddddddddddddd to server
            } else {
              setIsDog(false);
            }
          };
          img.src = reader.result;
        };
        reader.readAsDataURL(imageFile);
      } else {
        alert(
          "This image too large, change other image: " +
            Math.round((e.target.files[0].size / 1024 / 1024) * 100) / 100 +
            "MB"
        );
      }
    }
  };

  const handleUpload = () => {
    console.log("upload");
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
