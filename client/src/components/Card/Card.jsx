import React from 'react'
import style from "./Card.module.css"

export default function Card(props) {
  const { id, name, flags, continents } = props.data
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

    </div>
  )
}

