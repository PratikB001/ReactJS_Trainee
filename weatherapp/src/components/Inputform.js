import React, { useState } from "react";
import "./css/inputform.css";

const Inputform = () => {
  const [locationInput, setLocationInput] = useState("");

  const inputHandler = (event) => {
    setLocationInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (locationInput.trim() === "") {
      alert("Please Enter Location");
      return;
    }
    console.log(locationInput);

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='input'>
        <input
          placeholder='Enter location'
          type='text'
          onChange={inputHandler}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Inputform;
