import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { getCountries, newActivity } from '../../actions/actions';
import { NavBar } from '../NavBar/NavBar';
import style from "./AddNewActivity.module.css"


//methods
const validate = (input, e) => {
  const { name } = e.target;
  console.log("e.target:", e.target)
  let error = {};
  switch (name) {
    case "name":
      if (!/^[/A-Za-z\s]+$/g.test(input.name)) {
        error.name = "The name must not contain numbers";
      }
      break;
    case "difficulty":
      if (!/^[0-9]?[0-9]{1}$|^10$/.test(input.difficulty)) {
        error.difficulty = "The difficulty must be from 0 to 10";
      }
      break;
    case "duration":
      if (!/^[0-9]?[0-9]{1}$|^10$/.test(input.duration)) {
        error.duration = "The Duration must be from 0 to 10";
      }
      break;

    default:
      return "";
  }
  return error;
};


const AddNewActivity = () => {
  //Global states
  const country = useSelector((state) => state.allCountries);
  // console.log("country:", country)
  const Navigate = useNavigate();
  const dispatch = useDispatch();


  //Local states
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  })
  const handleInput = (e) =>{
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
      ...input, 
      [e.target.name]: e.target.value,
      
    }, e))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisable(errors)) {
      alert("it must fill all fields!")
    } else {
      dispatch(newActivity(input));
      alert("Activity/ies created successfully")
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "All",
        countries: ''
      })
      Navigate('/countries')

    }
    
  }
  function handleSelect(e) {
    setInput({
      ...input,
      countries: Array.from(e.target.seletedOptions, option => option.value).join(',')//[...input.countries, e.target.value]
    });
  };

  function handleSelectSeason(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }
  
  function handleDelete(e) {
    e.preventDefault();
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== e)
    });
  }
  function isDisable(errors) {
    return Object.keys(errors).length > 0;
  }
  useEffect(() => {
    dispatch(getCountries());
  
   
  }, [dispatch])
  
  return (
    <div>
      <NavBar />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={style.form}>
          <div className={style.containerInput}>
            <div className={style.grupo}>
              <input 
              type="text" 
              name='name'
              value={input.name}
              className={style.input}
              required
              onChange={(e) => handleInput(e)}
              />
              <span className={errors.name ? style.error : style.barra}></span>
              {errors.name && <h6 id={style.errorWord}>{errors.name}</h6>}
              <label htmlFor="name" className={style.label}>Name</label>
            </div>

            <div className={style.grupo}>
              <input
               type="number" 
               name='difficulty'
               value={input.difficulty}
               required
               className={style.input}
               onChange={(e) => handleInput(e)}
               />
               <span className={errors.difficulty ? style.error : style.barra}></span>
              {errors.difficulty && (
              <h6 id={style.errorWord}>{errors.difficulty}</h6>
              )}
              <label className={style.label}>Difficulty</label>

            </div>

            <div className={style.grupo}>
              <input
               type="number" 
               name='duration'
               value={input.duration}
               required
               className={style.input}
               onChange={(e) => handleInput(e)}
               />
               <span
                className={errors.duration ? style.error : style.barra}>

                </span>
              {errors.duration && (
              <h6 id={style.errorWord}>{errors.duration}</h6>
              )}
              <label className={style.label}>Duration</label>

            </div>

            <div className={style.grupo}>
              <select 
              className={style.input} 
              name='season'
              onChange={(e) => handleSelectSeason(e)}
              
              >
                {
                  ["All","Summer","Winter","Autum","Spring"].map((el) =>
                   <option key={el} value={el}>{el}</option>
                  )
                }
              </select>

            </div>

            <div className={style.grupo}>
              <select 
              className={style.input} 
              onChange={(e) => handleSelect(e)}
              multiple>
                <option value=""></option>
                {
                  country.map((c) => 
                    <option value={c.name} key={c.name}>
                      
                      {c.name}
                    </option>
                  )
                }

              </select>
                {
                  input.countries.map((c, i) => (
                    <ul key={i}>
                      <li>{c}</li>
                      <button onClick={(e) => handleDelete(e,c)}>X</button>
                    </ul>
                  ))
                }
            </div>

          </div>
          <div className={style.button}>
            <input 
            type="submit" 
            disabled={isDisable(errors)}
            value="Create Activity"
            />

          </div>

        </div>

      </form>
    </div>
  )
}
export default AddNewActivity;
