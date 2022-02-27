import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import {  getAllActivities, getAllRegions, getFilters } from "../../../redux/actions/actions";
//import { sortRecipes } from "../../actions/actions";
//import style from "./Filters.module.css";

export default function FilterSet() {
  //hooks
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query  = new URLSearchParams(location.search);

  const filterOption = ["a-z", "z-a", "population-higer", "population-lower"];
  

  
	//global states
	const activities = useSelector(state => state.allActivities);
	const regions = useSelector(state => state.allRegions);

//local states
	const [filters, setFilters] = useState({
		region: '',
		activity: '',
		order: ''
	});

  useEffect(() => {
		dispatch(getAllActivities());
		dispatch(getAllRegions());
	}, [dispatch])
  
  
	const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFilters(filters))
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   query.set('region', filters.region);
  //   query.set('activity', filters.activity);
  //   query.set('order', filters.order);
  //   query.set('search', '');
  //   query.set('page', 1);

  // };

  const handleChange = (e) => {
    e.preventDefault();
    setFilters({
			...filters,
			[e.target.name]: e.target.value
		})
    
    
  };

  return (
    <>
      <form className="form" id="form" onSubmit={(e) => handleSubmit(e)}>
          
          <select name="region" id="region" onChange={(e) => handleChange(e)}>
            <option key="filter" hidden defaultValue="region">
              
            Filter By Region
            </option>
            {regions.map((o) => {
              return (
                <option key={o.name} value={o.name} className="">
                  {o.name}

                </option>
              )
            })}
          </select>

          <select name="activity" id="activity" onChange={(e) => handleChange(e)}>
            <option key="filter" hidden defaultValue="activity">

            Filter By Activities
            </option>
              {activities.map((a) => {
                return (
                  <option key={a.name} value={a.name} className="">

                    {a.name}
            </option>
                )
              })}
          </select>

        <div className="select">
          <select name="order" id="order" onChange={(e) => handleChange(e)}>
            <option key="order" hidden defaultValue="order">
              Order By
            </option>
            {filterOption.map((option) => {
              return (
                <option key={option} value={option} className="">
                  {option.toUpperCase()}
                </option>
              );
            })}
          </select>
            
         
        </div>
        <button type="submit">Filter</button>
      </form>
    </>
  );
}
