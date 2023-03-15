import React, { Component, useState } from "react";
import "../styles/App.css";
import { cellsgenerator } from "./cellsgenerator";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const App = () => {
  const [year_month, setYear_Month] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  const cells = cellsgenerator(year_month.year, year_month.month);

  const handleButtons = (action) => {
    switch (action) {
      case "prev-year":
        setYear_Month({ ...year_month, year: year_month.year - 1 });
        return;
      case "prev-month": {
        if (year_month.month <= 0) {
          setYear_Month({ year: year_month.year - 1, month: 11 });
          return;
        }
        setYear_Month({ ...year_month, month: year_month.month - 1 });
        return;
      }
      case "next-month": {
        if (year_month.month >= 11) {
          setYear_Month({ year: year_month.year + 1, month: 0 });
          return;
        }
        setYear_Month({ ...year_month, month: year_month.month + 1 });
        return;
      }
      case "next-year":
        setYear_Month({ ...year_month, year: year_month.year + 1 });
        return;
      default:
        return;
    }
  };
  console.log(year_month);
  return (
    <div id="main">
      <h1 id="heading">Calendar</h1>
      <input
        id="year-text-box"
        type="text"
        value={year_month.year}
        onChange={(e) => setYear_Month({ ...year_month, year: e.target.value })}
      ></input>
      <select
        id="month"
        value={months[year_month.month]}
        onChange={(e) =>
          setYear_Month({ ...year_month, month: e.target.value })
        }
      >
        {months.map((month, i) => (
          <option value={month} key={i}>
            {month}
          </option>
        ))}
      </select>
      <span id="year">{year_month.year}</span>
      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            {days.map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(cells).map((week) => (
            <tr>
              {cells[week].map((day) => (
                <td>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <span>
          <button
            id="previous-year"
            type="button"
            onClick={() => handleButtons("prev-year")}
          >{`<<`}</button>
        </span>
        <span>
          <button
            id="previous-month"
            type="button"
            onClick={() => handleButtons("prev-month")}
          >{`<`}</button>
        </span>
        <span>
          <button
            id="next-month"
            type="button"
            onClick={() => handleButtons("next-month")}
          >{`>`}</button>
        </span>
        <span>
          <button
            id="next-year"
            type="button"
            onClick={() => handleButtons("next-year")}
          >{`>>`}</button>
        </span>
      </div>
    </div>
  );
};

export default App;
