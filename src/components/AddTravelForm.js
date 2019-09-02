import React, { useEffect, useState } from "react";
import "../styles/AddTravelForm.css";
import axios from "axios";

const AddTravelForm = ({ changeModal, updateTrips }) => {
  const [trip, saveTrip] = useState({});
  const [day, saveDay] = useState("");
  const [time, saveTime] = useState("");
  const [cityFrom, saveCityFrom] = useState("");
  const [stateFrom, saveStateFrom] = useState("");
  const [codeFrom, saveCodeFrom] = useState("");
  const [cityTo, saveCityTo] = useState("");
  const [stateTo, saveStateTo] = useState("");
  const [codeTo, saveCodeTo] = useState("");
  const [prize, savePrize] = useState("");
  const [quantity, saveQuantity] = useState("");

  const createNewTrip = async e => {
    e.preventDefault();

    //Validations

    //Create the new trip

    try {
      const response = await axios.post("http://localhost:4000/travel", {
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
      });
    } catch (error) {
      console.log(error);
    }
    updateTrips(true);
    changeModal(false);
  };

  return (
    <div className="addTravelForm__modal">
      <div className="addTravelForm__modal-container">
        <h2>Add a new Trip!</h2>
        <button onClick={() => changeModal(false)}>X</button>
        <form className="modal__form" onSubmit={createNewTrip}>
          <div className="modal__form-date">
            <label>Date</label>
            <div className="modal__form-date-data">
              <div className="modal_form-date-day">
                <label>
                  Day <span>*</span>
                </label>
                <input
                  type="text"
                  onChange={e => saveDay(e.target.value)}
                  required
                />
              </div>
              <div className="modal_form-date-day">
                <label>
                  Time <span>*</span>
                </label>
                <input
                  type="text"
                  onChange={e => saveTime(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="modal__form-trip">
            <div className="modal__form-trip-start">
              <label>From</label>
              <div className="modal__form-trip-data">
                <div className="modal__form-trip-city">
                  <label>
                    City <span>*</span>
                  </label>
                  <input
                    type="text"
                    onChange={e => saveCityFrom(e.target.value)}
                  />
                </div>
                <div className="modal__form-trip-state">
                  <label>
                    State <span>*</span>
                  </label>
                  <input
                    type="text"
                    onChange={e => saveStateFrom(e.target.value)}
                  />
                </div>
                <div className="modal__form-trip-code">
                  <label>
                    Code <span>*</span>
                  </label>
                  <input
                    type="number"
                    onChange={e => saveCodeFrom(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal__form-trip-end">
              <label>To</label>
              <div className="modal__form-trip-data">
                <div className="modal__form-trip-city">
                  <label>
                    City <span>*</span>
                  </label>
                  <input
                    type="text"
                    onChange={e => saveCityTo(e.target.value)}
                  />
                </div>
                <div className="modal__form-trip-state">
                  <label>
                    State <span>*</span>
                  </label>
                  <input
                    type="text"
                    onChange={e => saveStateTo(e.target.value)}
                  />
                </div>
                <div className="modal__form-trip-code">
                  <label>
                    Code <span>*</span>
                  </label>
                  <input
                    type="number"
                    onChange={e => saveCodeTo(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal__form-numbers">
            <div className="modal__form-prize">
              <label>
                Prize <span>*</span>
              </label>
              <input type="number" onChange={e => savePrize(e.target.value)} />
            </div>
            <div className="modal__form-quantity">
              <label>
                Quantity <span>*</span>
              </label>
              <input
                type="number"
                onChange={e => saveQuantity(e.target.value)}
              />
            </div>
          </div>
          <button className="modal__form-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTravelForm;
