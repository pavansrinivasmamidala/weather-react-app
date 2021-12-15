import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="row g-2">
      <div className="col-3"></div>
      <div
        className="col-8 text-center rotate-text description-text"
        id="description-text"
      >
        <h4 className="description text-center" id="description-weather">
          Partly Cloudy
        </h4>
      </div>
    </div>
  );
}
