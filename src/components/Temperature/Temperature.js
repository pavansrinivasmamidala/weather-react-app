import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="col-5">
        <div className="changing-position">
          <div className="p-6 text-center">
            <h1 className="temperature-number" id="temperature-grade">
              <span className="temperature-number" id="grade">
                33
              </span>
              °C
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
