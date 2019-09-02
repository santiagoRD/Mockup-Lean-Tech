import React, { useEffect, useState } from "react";
import check from "../assets/check.png";
import TravelInfo from "./TravelInfo";
import AddTravel from "./AddTravel";
import AddTravelForm from "./AddTravelForm";

const HomeContent = ({ travels, updateTrips }) => {
  const [modal, changeModal] = useState(false);
  const [searchName, UpdateSearchName] = useState("");

  const filterTrips = travels.filter(trip => {
    if (
      trip.cityTo.toLowerCase().includes(searchName.toLowerCase()) ||
      trip.cityFrom.toLowerCase().includes(searchName.toLowerCase())
    ) {
      return trip;
    }
  });

  return (
    <section className="home__right-section">
      <div className="home__search">
        <img src={check} alt="" />
        <input
          type="text"
          placeholder="Search"
          onChange={e => UpdateSearchName(e.target.value)}
        />
      </div>
      <div className="home__travel-info">
        {filterTrips.map(
          ({
            id,
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
          }) => (
            <TravelInfo
              key={id}
              day={day}
              time={time}
              cityFrom={cityFrom}
              stateFrom={stateFrom}
              codeFrom={codeFrom}
              cityTo={cityTo}
              stateTo={stateTo}
              codeTo={codeTo}
              prize={prize}
              quantity={quantity}
            />
          )
        )}
      </div>
      <AddTravel changeModal={changeModal} />
      {modal ? (
        <AddTravelForm changeModal={changeModal} updateTrips={updateTrips} />
      ) : null}
    </section>
  );
};

export default HomeContent;
