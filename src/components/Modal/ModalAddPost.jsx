import React from "react";
import Alert from "../Alert";

export default function ModalAddPost() {
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
                <form>
                  <div className="form-group mb-2">
                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  </div>
                </form>
                <Alert />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
