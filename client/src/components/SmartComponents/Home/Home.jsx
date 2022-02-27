import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../../redux/actions/actions";
import Cards from "../../viewComponents/Cards/Cards";
import  PaginationComponent  from "../pagination/PaginationComponent"
import Loading from "../../viewComponents/Loading/Loading"
import { NavBar } from "../../viewComponents/NavBar/NavBar";
import FilterSet from "../Filters/FilterSet";
import Header from "../../viewComponents/Header/Header";
import SearchBar from "../SearchBar/SearchBar";

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
          <Header />
          <FilterSet />
         <SearchBar />
          {country.length > 0 ? (
            <>
              <PaginationComponent
                data={country}
                Cards={Cards}
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
