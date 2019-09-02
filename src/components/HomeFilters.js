import React from "react";
import Search from "./search";

const HomeFilters = () => {
  return (
    <section className="home__left-section">
      <div className="home__filters">
        <p className="home__filters-text">
          <span className="icon-bulb"></span>Smart Filters
        </p>
        <div className="home__filters-checkbox">
          <div className="home__filters-container">
            <span className="icon-sale"></span>
            <input type="checkbox" />
          </div>
          <div className="home__filters-container">
            <span className="icon-calendar"></span>
            <input type="checkbox" />
          </div>
          <div className="home__filters-container">
            <span className="icon-heart"></span>
            <input type="checkbox" />
          </div>
        </div>
      </div>
      <div className="home__status">
        <p className="home__status-text">Status</p>
        <Search />
      </div>
    </section>
  );
};

export default HomeFilters;
