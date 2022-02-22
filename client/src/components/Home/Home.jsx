import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../actions/actions";
import Card from "../Card/Card";
import  PaginationComponent  from "../pagination/PaginationComponent"
import Loading from "../Loading/Loading"
import { NavBar } from "../NavBar/NavBar";

const Home = () => {
    //Global States
    const country = useSelector((state) => state.allCountries);
    
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    return (
        <div>
          <NavBar />
          {country.length > 0 ? (
            <>
              <PaginationComponent
                data={country}
                Card={Card}
                title="Countries"
                pageLimit={5}
                countryPerPage={10}
              />
            </>
          ) : (
           <Loading />
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
