import React from "react";
import './Forecast.css';

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div
            className="container-fluid position-next-days"
            id="nextDayTemplate"
          >
            <div className="row text-center g-2">
              <div className="col-4">
                <div className="p-3 text-center next-days-edit color-cloud">
                  <h5 className="card-title" id="one">
                    MON
                  </h5>
                  <i className="fas fa-cloud icon icon-days" id="iconNext"></i>
                  <p className="card-text" id="max">
                    <strong>31</strong>&deg 29&deg
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 text-center next-days-edit color-cloud">
                  <h5 className="card-title" id="one">
                    TUE
                  </h5>
                  <i className="fas fa-cloud icon icon-days" id="iconNext"></i>
                  <p className="card-text" id="max">
                    <strong>31</strong>&deg 29&deg
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 text-center next-days-edit color-cloud">
                  <h5 className="card-title" id="one">
                    WED
                  </h5>
                  <i className="fas fa-cloud icon icon-days" id="iconNext"></i>
                  <p className="card-text" id="max">
                    <strong>31</strong>&deg 29&deg
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 text-center next-days-edit color-rain">
                  <h5 className="card-title" id="one">
                    THU
                  </h5>
                  <i
                    className="fas fa-cloud-showers-heavy icon icon-days"
                    id="iconNext"
                  ></i>
                  <p className="card-text" id="max">
                    <strong>29</strong>&deg 27&deg
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 text-center next-days-edit color-clear">
                  <h5 className="card-title" id="one">
                    FRI
                  </h5>
                  <i className="fas fa-sun icon icon-days" id="iconNext"></i>
                  <p className="card-text" id="max">
                    <strong>31</strong>&deg 29&deg
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 text-center next-days-edit color-cloud">
                  <h5 className="card-title" id="one">
                    SAT
                  </h5>
                  <i className="fas fa-cloud icon icon-days" id="iconNext"></i>
                  <p className="card-text" id="max">
                    <strong>31</strong>&deg 29&deg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
