import React from "react";
import "./Date.css";

export default function Date() {
  return (
    <div className="Date">
      <div className="col-4">
        <div className="text-center p-2 today-date">
          <h3 className="today-date" id="date">
            SUNDAY 9:00 PM
          </h3>
        </div>
      </div>
    </div>
  );
}
