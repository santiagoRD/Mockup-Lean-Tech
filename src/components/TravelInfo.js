import React, { useEffect, useState } from "react";
import check from "../assets/check.png";
import "../styles/TravelInfo.css";

const TravelInfo = ({
  day,
  time,
  cityFrom,
  stateFrom,
  codeFrom,
  cityTo,
  stateTo,
  codeTo,
  prize,
  quantity
}) => {
  return (
    <div className="travel__container">
      <img src={check} alt="" />
      <div className="travel__container-info">
        <div className="container__info-fecha">
          <p>
            {day}
            <br /> {time}
          </p>
        </div>
        <div className="container__info-location">
          <span className="icon-compass"></span>
          <div className="info-location">
            <p className="info-location-p1">
              {cityFrom}, {stateFrom}, {codeFrom}
            </p>
            <div className="info-location-item"></div>
            <p className="info-location-p2">
              {cityTo}, {stateTo}, {codeTo}
            </p>
          </div>
        </div>
        <div className="container__info-prize">
          <span className="icon-truck"></span>
          <p className="info-prize">${prize}</p>
          <div className="container__info-quantity">{quantity}</div>
        </div>
        <div className="container__infor-menu">
          <span className="icon-dots-horizontal-triple"></span>
        </div>
      </div>
    </div>
  );
};

export default TravelInfo;
