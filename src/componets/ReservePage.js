import { useState, useEffect } from "react";
import { fetchAPI } from "../utils/TimeGenerator";

function ReservePage({ submitForm }) {
  const [date, setDate] = useState("date");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [guest, setNumberofGuset] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availlabletimes, setAvaillabletimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
  useEffect(
    function () {
      setAvaillabletimes(fetchAPI(new Date(date)));
    },
    [date]
  );

  var passdata = {
    date: date,
    time: time,
    guest: guest,
    occasion: occasion,
  };

  return (
    <form className="w-full max-w-md ml-auto mr-auto mt-10">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="date"
      >
        Choose Date
      </label>
      <input
        data-testid="input-date"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="date"
        type="date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="res-time"
      >
        Choose Time
      </label>{" "}
      <select
        data-testid="input-time"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="res-time"
        onChange={(e) => setTime(e.target.value)}
      >
        {availlabletimes.map((data) => {
          return <option key={data}>{data}</option>;
        })}
      </select>
      <label
        htmlFor="guests"
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        Number of guests
      </label>
      <input
        data-testid="input-guest"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => setNumberofGuset(e.target.value)}
      />
      <label
        htmlFor="occasion"
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        Occasion{" "}
      </label>{" "}
      <select
        data-testid="input-occasion"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="occasion"
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button
        aria-label="On Click"
        data-testid="input-button"
        onClick={(e) => {
          e.preventDefault();
          if (date === "date") {
            alert("A Reservation Date Required Please choose");
          } else {
            submitForm(passdata);
          }
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default ReservePage;
