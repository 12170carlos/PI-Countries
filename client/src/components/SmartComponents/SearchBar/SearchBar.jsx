
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { searchCountry } from "../../../redux/actions/actions";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleSubmit = (input, e) => {
    e.preventDefault();
    e.target.value = "";
    dispatch(searchCountry(input));
  };
  return (
    <form onSubmit={(e) => handleSubmit(input, e)}>
      
      <input
        className="input"
        type="text"
        onChange={(e) => handleInput(e)}
        placeholder="Search Country"
      />
    </form>
  );
}


