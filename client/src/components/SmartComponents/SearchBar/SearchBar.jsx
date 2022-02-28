
import axios from "axios";
import React from "react";

import { useDispatch } from "react-redux";
import { setAllCountries } from "../../../redux/actions/actions";
const server = "http://localhost:3001";


export default function SearchBar() {
  const dispatch = useDispatch();

  

  const findCountry = async(e) => {
    try {
      
      const searchName = await axios.get(`${server}/countries?name=${e.target.value}`)
      dispatch(setAllCountries(searchName.data))
    } catch (error) {
      console.log(error)
    }
  }
   
  
  return (
    <form >
     
      <input
        className="input"
        type="text"
        onChange={(e) => findCountry(e)}
        placeholder="Search Country"
      />
    </form>
  );
}


