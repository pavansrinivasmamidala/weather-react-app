import React from "react";
import "./Credits.css";

export default function Credits() {
  return (
    <div className="Credits">
      <div className="container">
        <div className="row">
          <div className="col-9 container-creator">
            <p className="created-by">
              <a
                href="https://github.com/milicodes/weather-app-page"
                target="_blank"
                rel="noreferrer"
                className="created-by"
              >
                <span> Open-source code </span>
              </a>
              by
              <a
                href="https://www.instagram.com/mili.codes/"
                target="_blank"
                rel="noreferrer"
                className="created-by"
              >
                <span> Mili </span>
              </a>
              ☁ 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
