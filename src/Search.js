import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="user-input">
        <div className="container row-margin">
          <div className="row content justify-content-center row-margin">
            <div className="col-5 user-input">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                  aria-label="Enter City"
                  aria-describedby="basic-addon2"
                  id="enter-city"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-lg btn-outline-light btn-search"
                    type="button"
                    id="search-input"
                  >
                    <i className="fas fa-search-location location"></i>
                  </button>
                </div>
                <div className="col-sm">
                  <button
                    className="btn btn-lg btn-outline-light actual-location"
                    type="button"
                    id="actual-location"
                  >
                    <i className="fas fa-street-view local"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}