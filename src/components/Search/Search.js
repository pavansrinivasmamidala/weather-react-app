import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";
import { faSearch,faStreetView } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="Search">
      <form id="user-input">
        <div className="container row-margin">
          <div className="row content justify-content-center row-margin">
            <div className="col-5 user-input">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter City"
                  aria-label="Enter City"
                  aria-describedby="basic-addon2"
                  id="enter-city"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-lg btn-outline-light btn-search"
                    type="submit"
                    id="search-input"
                  ><FontAwesomeIcon  icon={faSearch} size="s"/>
                    {/* <i className="fas fa-search-location location"></i> */}
                  </button>
                </div>
                <div className="col d-flex align-items-start">
                  <button
                    className="btn btn-lg btn-outline-light actual-location"
                    type="button"
                    id="actual-location"
                  >
                    <FontAwesomeIcon icon={faStreetView} size="s"  />
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
