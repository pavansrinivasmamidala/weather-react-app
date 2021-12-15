import React from "react";
import "./Convertion.css";

export default function Convertion() {
  return (
    <div className="Convertion">
      <div className="row g-2">
        <div className="col-5 text-center">
          <button
            className="btn btn-lg btn-outline-light celsius-fahrenheit"
            type="button"
            id="celcius"
          >
            °C
          </button>
          <button
            className="btn btn-lg btn-outline-light celsius-fahrenheit"
            type="button"
            id="fahrenheit"
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
