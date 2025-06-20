"use client";
import React, { useState } from "react";
import states from "@/utils/state";

const LocationState = () => {
  const [enterText, setEnterText] = useState("");
  const [stateName, setStateName] = useState([]);
  const [showLabel, setLabel] = useState(false);
  const handleLable = () => {
    setLabel(true);
  };
  const handleInput = (e) => {
    const value = e.target.value;
    setEnterText(value);
    if (value.trim() !== "") {
      const filterState = states.filter((state) =>
        state.toLowerCase().includes(value.toLowerCase())
      );
      setStateName(filterState);
    } else {
      setStateName([]);
    }
  };
  const handleSelect = (data) => {
    setEnterText(data);
    setStateName([]);
  };
  return (
    <div className="w-full flex flex-col flex-wrap">
      <div className="flex flex-col">
        {showLabel && <label className="text-primary px-3">Location</label>}
      </div>
      <div>
        <input
          type="text"
          placeholder="enter location"
          className="w-full outline-none px-3"
          value={enterText}
          onChange={handleInput}
          onClick={handleLable}
        />
        <hr></hr>
        <div className="w-full flex justify-end pr-4">
          <button className="btn btn-primary">search jobs</button>
        </div>
      </div>
      {stateName.length > 0 && (
        <ul
          className="w-full md:w-[20vw] max-h-[50vh] overflow-y-auto border rounded-3  mx-3"
          style={{scrollbarWidth: "none" }}
        >
          {stateName.map((state, index) => (
            <li key={index} onClick={() => handleSelect(state)}>
              {state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationState;
