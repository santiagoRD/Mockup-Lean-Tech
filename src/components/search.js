import React from "react";
const Search = () => {
  return (
    <div className="home__input-search">
      <input type="text" placeholder="Search" />
      <span className="icon-search home__input-icon"></span>
      <button className="home__button">Delivered</button>
    </div>
  );
};

export default Search;
