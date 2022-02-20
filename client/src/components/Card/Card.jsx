import React from 'react'
import { Link } from 'react-router-dom';
import style from "./Card.module.css";

export default function Card(props) {
  const { idCountry, name, flags, continents } = props.data
  return (
    <div className = {style.containerCard}>
      
        <div className={style.imgContainer}> 
            <img src={flags ? flags : null} alt= "imagen"/>
        </div>
      <div className= {style.containerText}>
        <div className={style.container}> 
            <h1>{name}</h1> 
        </div>
        <div className={style.container}> 
            <h6>continent:{continents}</h6> 
        </div>
      </div>
      <div className={style.containerDesc}>
        <div className={style.containerInf}>
          <div className={style.grup}>
            <Link to={`/detail/${idCountry}`} className={style.link}>
              <img
                src={process.env.PUBLIC_URL + `/img/icons_card/plus.png`}
                alt="Time"
              />
              <span className={style.tooltiptext}>More Detail</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

