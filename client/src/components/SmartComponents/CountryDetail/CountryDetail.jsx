/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getByDetail, setLoading, resetDetail } from '../../../redux/actions/actions'
import Loading from '../../viewComponents/Loading/Loading'


const CountryDetail = () => {
  //Global state
  const country = useSelector((state) => state.detailed)
  const loading = useSelector((state) => state.loading)



  //hooks
  const params = useParams();
  const dispatch = useDispatch();
  //console.log("params:", params)

  /*mounting*/
  useEffect(() => {
    dispatch(getByDetail(params.id));
  }, [])

  useEffect(() => {
    country ? dispatch(setLoading(false)) : dispatch(setLoading(true))
  }, [country])

  /*unmounting*/
  useEffect(() => {
    dispatch(setLoading(true))
    return dispatch(resetDetail());
  }, []);

  return (
    <>
      {
        loading ? <Loading />
        :
        <div>
          <div className="imagen"> 
            <img src={country.flag ? country.flag : null} alt= "imagen"/>
          </div>

          <div className="nombre"> 
            <h1>{country.name}</h1> 
          </div>

          <div className="region"> 
            <h3>Región:{country?.subregion?.region?.name}</h3> 
          </div>

          <div className="capital"> 
            <h3>Capital:{country.capital}</h3> 
          </div>

          <div className="subregion"> 
            <h3>Subregion:{country?.subregion?.name}</h3> 
          </div>
          
          <div className="area"> 
            <h3>Area:{country.area} km2</h3> 
          </div>

          <div className="population"> 
            <h3>Population:{country.population}</h3> 
          </div>
          
          <div>
             
              {country.activities?.map((act,i) => {
                return (
                <div className="activities" key={i}> 
                  <h3> {act.name} </h3> 
                  <h3> {act.difficulty} </h3> 

                </div>
                )
              })}
           
          </div>
          
          
        </div>
        
      }
    </>
  )
}
export default CountryDetail
