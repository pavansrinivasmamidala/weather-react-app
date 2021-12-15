import React from "react";
import "./City.css";
import Icon from "../Icon/Icon";
import Description from "../Description/Description";
import Date from "../Date/Date";
import Forecast from "../Forecast/Forecast";
import Temperature from "../Temperature/Temperature";
import Humidity from "../Humidity/Humidity";
import Convertion from "../Convertion/Convertion";
import Credits from "../Credits/Credits";


export default function City() {
  return (
    <div className="City">
      <div className="container container-two">
        <div className="row g-2 rotation-right move-city-up">
          <div className="col-6"></div>
          <div className="col-6 move-city-right">
            <div className="text-center">
              <h1 className="tittle-city" id="show-city">
                TOKYO
              </h1>
            </div>

            <Icon />
            <Description />
          </div>
        </div>
      </div>
      <div className="container left-side">
        <div className="row g-2">
          <div className="col-12">
            <div className="container width-main-container move-content-up">
              <div className="row g-3 changing-position-details">
                <div className="col-2"></div>
                <div className="col-10">
                  <Date />

                  <div className="col-7"></div>
                  <div className="col-1"></div>
                  <Temperature />

                  <div className="col-6"></div>
                  <div className="col-2"></div>
                  <Humidity />
                  <Convertion />
                </div>
              </div>
            </div>
          </div>
          <Forecast />
          <Credits />
        </div>
      </div>
    </div>
  );
}
