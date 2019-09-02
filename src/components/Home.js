import React from "react";
import HomeFilters from "./HomeFilters";
import HomeContent from "./HomeContent";
import "../styles/Home.css";

const Home = ({ travels, updateTrips }) => {
  return (
    <div className="home__container">
      <HomeFilters />
      <HomeContent travels={travels} updateTrips={updateTrips} />
    </div>
  );
};

export default Home;
