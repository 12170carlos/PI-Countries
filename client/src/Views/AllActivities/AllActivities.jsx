import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./AllActivities.module.css";
import { getAllActivities } from "../../redux/actions/actions";
import ActivityCard from "./ActivityCard/ActivityCard";
import { useNavigate } from "react-router";

function AllActivities() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

   
     
  
  

  useEffect(() => {
    dispatch(getAllActivities());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  

  let c = useSelector((state) => state.allActivities);

  return (
    <div className={s.image}>
      <div className={s.container}>
        {c.map((ac) => (
          <div key={ac.id}>
            <ActivityCard
              key={ac.id}
              name={ac.name}
              difficult={ac.difficult}
              duration={ac.duration}
              season={ac.season}     
            />
           
          </div>
        ))}

      </div>
      <center>
        <button className={s.goBack} onClick={() => navigate(-1)}>
          Go Back
        </button>

      </center>
    </div>
  );
}

export default AllActivities;
