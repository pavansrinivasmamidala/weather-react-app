import React from "react";
import "./Humidity.css";

export default function Humidity() {
  return (
    <div className="Humidity">
      <div className="col-5">
        <div className="changing-position">
          <div className="text-center details-temp">
            <p>
              <i className="fas fa-tint detail-icon" id="humid-icon"></i>
              <span className="percentage" id="humidity">
                {" "}
                56%{" "}
              </span>
              <i className="fas fa-wind detail-icon" id="wind-icon"></i>
              <span className="percentage" id="wind">
                16 km/h
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
