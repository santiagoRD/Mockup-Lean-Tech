import React from "react";
import "../styles/AddTravel.css";

const AddTravel = ({ changeModal }) => {
  return (
    <div className="container__button-add" onClick={() => changeModal(true)}>
      <button className="button-add">+</button>
    </div>
  );
};

export default AddTravel;
