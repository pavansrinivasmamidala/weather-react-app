import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import "./Icon.css";

export default function Icon() {
  return (
    <div className="col-9 text-center icon-weather img-fluid">
      <i className="fas fa-cloud-rain icon-weather" id="icon-weather"></i>
      <FontAwesomeIcon className="cloud" icon={faCloud} />
    </div>
  );
}
