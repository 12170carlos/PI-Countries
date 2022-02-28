import React from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { filterByActivity, filterByContinent, getAllActivities, getOrder }  from "../../../redux/actions/actions";


export default function FilterSet() {
  //hooks
  const dispatch = useDispatch();
  
  
  const filterOption = ["a-z", "z-a", "population-higer", "population-lower"];
  const activities = useSelector((state) => state.allActivities)


  useEffect(() => {
    dispatch(getAllActivities())
  }, [])
  
  const handleOrder = (e) => {
    e.preventDefault()
    dispatch(getOrder(e.target.value))
    
  }
 const handleChange = (e) => {
  e.preventDefault()
  document.getElementById('activity').value='default'
  dispatch(filterByContinent(e.target.value))
 }

 

  
  return (
    <>
      <form className="form" id="form" >
          
          <select
           name="FILTER"  
           defaultValue="select"
           onChange={(e) => handleOrder(e)}
           className=""
           >

            <option
              key="filter"
              hidden
              defaultValue="filter"
              className=""
            >   
              
            Filter 
            </option>
            {filterOption.map((o) => {
              return (
                <option key={o} value={o} className="">
                  {o.toUpperCase()}

                </option>
              )
            })}
          </select>
         
          <select 
          name="" 
          id="continent"
          onChange={(e) => handleChange(e)}
          >
            <option value="default">Selection Continent</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>


          <select 
          name="acivity" 
          id="activity"
          onChange={(e) => {dispatch(filterByActivity(e.target.value)) 
            document.getElementById('continent').value='default'}}
          >
            <option value="default">Select Activity</option>
            {activities?.map(c => {
              return(
                <option key={c.id} value={c.name}>{c.name}</option>
              )
            })}
          </select>
      </form>
    </>
  );
}
