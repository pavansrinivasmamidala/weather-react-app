import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div class="row g-2">
      <div class="col-3"></div>
      <div
        class="col-8 text-center rotate-text description-text"
        id="description-text"
      >
        <h4 class="description text-center" id="description-weather">
          Partly Cloudy
        </h4>
      </div>
    </div>
  );
}
