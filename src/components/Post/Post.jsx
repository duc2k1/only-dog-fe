import React from "react";

export default function Post() {
  return (
    <main className="py-5">
      <div className="row" data-masonry='{"percentPosition": true }'>
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="card-img"
              src="https://provplan.org/wp-content/uploads/2021/07/4d4afbdc56a85edb2855b25122116f74.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="card-img"
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="card-img"
              src="https://provplan.org/wp-content/uploads/2021/07/4d4afbdc56a85edb2855b25122116f74.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <svg
              className="bd-placeholder-img card-img"
              width="100%"
              height={260}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Card image"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96" />
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                Card image
              </text>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
