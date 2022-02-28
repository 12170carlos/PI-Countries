import React from "react";
import { Link } from "react-router-dom";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { id, name, flag, population, subregion } = props.data;
  return (
    <div className={style.containerCard}>
      <div className={style.imgContainer}>
        <img src={flag ? flag : null} alt="imagen" />
      </div>
      <div className={style.containerText}>
        <div className={style.container}>
          <h4>
            <span>{name}</span>
          </h4>
        </div>
        <div className={style.container}>
          <h4>
            {/* Region: {region} */}
            Region: <span>{subregion.region.name}</span>
          </h4>
        </div>
        <div className={style.container}>
          <h4>
            Population: <span>{population}</span>
          </h4>
        </div>
      </div>
      <Link to={`/detail/${id}`}
      className="btn"
      >More Info</Link>
     
    </div>
  );
}