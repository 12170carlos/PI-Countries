/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../actions/actions';
import style from "./PaginationComponent.module.css"
export default function PaginationComponent({ data, Card, name, pageLimit, countryPerPage }) {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setcurrentPage] = useState(1);
    const [pages] = useState(Math.round(data.length / countryPerPage));//data(country = 250)/ countryPerPage=10

    function goToNextPage(){
        setcurrentPage((page) => page + 1)
    }
    function gotToPrevPage(){
        setcurrentPage((page) => page - 1)
    }
    function changePage(e){
        const pageNumber = Number(e.target.textContent);
        setcurrentPage(pageNumber);
    }
    const getPaginatiedData = () =>{
        const indexOfLastCount = currentPage * countryPerPage;
        const indexOfFirstCount = indexOfLastCount - countryPerPage;
        // const startIndex = currentPage * countryPerPage - countryPerPage;
        // const endIndex = startIndex + countryPerPage;
        // return data.slice(startIndex, endIndex)
        return data.slice(indexOfFirstCount, indexOfLastCount)

    }

    const getPaginationGroup = () =>{
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    return (
    <>
        <h1>{name}</h1> 
        {/* show the countries, 10 countries at a time */}
        <div className={style.dataContainer}>
            {getPaginatiedData().map((d,id) => (
                <Card key={id} data={d} />
            ))}
        </div>
            {/* show the pagination
             it consist of next and previous buttons
             along with page numbers, in our case, 5 page numbres at a time
              */}
        <div className={style.pagination}>
            {/* previous button */}
            <button
                onClick={gotToPrevPage}
                className={`prev ${currentPage === 1 ? 'disable' : ''}`}
                >
                prev 

            </button>

            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
                <button 
                key={index}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
                >
                    <span>{item}</span>
                </button>
            ))}

            {/* next button */}
            <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? 'disable' : ''}`}
            >
                next
            </button>
        </div>
        
    </>
  )
}

