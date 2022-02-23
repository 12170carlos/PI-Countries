import React from 'react'
import { Link } from 'react-router-dom';
import style from "./Card.module.css";

export default function Card(props) {
  const { id, name, flag, region, capital, population, subregion } = props.data
  return (
    <article >
      
      <div className = {style.containerCard}>
      
      <div className={style.imgContainer}> 
          <img src={flag ? flag : null} alt= "imagen"/>
      </div>
    <div className= {style.containerText}>
      <div className={style.container}> 
          <h1>{name}</h1> 
      </div>
      <div className={style.container}> 
          <h6>Region:{subregion.region.name}</h6> 
      </div>
    </div>
    <div className={style.containerDesc}>
      <div className={style.containerInf}>
        <div className={style.grup}>
          <Link to={`/detail/${id}`} className={style.link}>
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
    </article>
  )
}

