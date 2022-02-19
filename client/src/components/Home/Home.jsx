import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../actions/index";
import Card from "../Card/Card";
import  PaginationComponent  from "../pagination/PaginationComponent"

const Home = () => {
    //Global States
    const country = useSelector((state) => state.allCountries);
    
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    return (
        <div>
          {country.length > 0 ? (
            <>
              <PaginationComponent
                data={country}
                Card={Card}
                title="Countries"
                pageLimit={5}
                dataLimit={10}
              />
            </>
          ) : (
           <h1>No Posts to display</h1>
          )}

           {/* {Array.isArray(country) ?
                    country.map((c) => {
                        return (
                            <Card 
                                key={c.id}
                                name={c.name}
                                flags={c.flags}
                                continents={c.continents}
                                id={c.id}
                            />
                        )
                    })
                    : (<h1>Not found</h1>

                    )}    */}
        </div>
      );
    
   
               

            
}
export default Home;
