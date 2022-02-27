/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { useLocation, useNavigate } from "react-router";
import style from './PaginationComponent.module.css'



export default function PaginationComponent({
  data,
  countryPerPage,
  pageLimit,
  name,
  Cards

}) {

  //hooks
  // const countriesPerPage = 10;

  // const navigate = useNavigate();
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);

  // let currentPage = parseInt(params.get('page')) || 1;

  // const countries = useSelector(state => state.countries);

  // let totalPages = Math.ceil(countries.length / countriesPerPage);

  // const handlePagination = (pageNumber) => {
  //   params.get('page', pageNumber);
  //   navigate({ search:params.toString() })
  // }

  // return (
  //   <div>
  //     <button className="" onClick={() => handlePagination(1)}>
  //       First
  //     </button>

  //     {currentPage - 3 > 0 && 
  //       <button onClick={() => handlePagination(currentPage - 3)}> {currentPage - 3}</button>};
  //     {currentPage - 2 > 0 && 
  //       <button onClick={() => handlePagination(currentPage - 2)}> {currentPage - 2}</button>};
  //     {currentPage - 1 > 0 && 
  //       <button onClick={() => handlePagination(currentPage - 1)}> {currentPage - 1}</button>};

  //     <label className=""> {currentPage}</label>

  //     {currentPage + 3 > 0 && 
  //       <button onClick={() => handlePagination(currentPage + 3)}> {currentPage + 3}</button>};
  //     {currentPage + 2 > 0 && 
  //       <button onClick={() => handlePagination(currentPage + 2)}> {currentPage + 2}</button>};
  //     {currentPage + 1 > 0 && 
  //       <button onClick={() => handlePagination(currentPage + 1)}> {currentPage + 1}</button>};

  //       <button className="" onClick={() => handlePagination(totalPages)}></button>
  //   </div>
  // )

  
  const [currentPage, setcurrentPage] = useState(1);
  const [pages, setPages] = useState(Math.round(data.length / countryPerPage)); //data(country = 250)/ countryPerPage=10
  
  //Hooks
  
  const dispatch = useDispatch()


  //methods
  function goToNextPage() {
    
    setcurrentPage((page) => page + 1);
  }
  function gotToPrevPage() {
    setcurrentPage((page) => page - 1);
  }
  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    setcurrentPage(pageNumber);
  }
  const getPaginatiedData = () => {
    //const indexOfLastCount = currentPage * countryPerPage;
    //const indexOfFirstCount = indexOfLastCount - countryPerPage;
    const startIndex = currentPage * countryPerPage - countryPerPage;
    const endIndex = startIndex + countryPerPage;
    return data.slice(startIndex, endIndex)
    
    //return data.slice(indexOfFirstCount, indexOfLastCount);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

 
  return (
    <>
      <h1>{name}</h1>
      {/* show the countries, 10 countries at a time */}
      <section className="countries">
        {getPaginatiedData().map((d, id) => (
          <Cards key={id} data={d} />
        ))}
      </section>
      {/* show the pagination
             it consist of next and previous buttons
             along with page numbers, in our case, 5 page numbres at a time
              */}
      <div className={style.pagination}>
        {/* previous button */}
        <button
          onClick={gotToPrevPage}
          className={`style.prev ${currentPage === 1 ? "disable" : ""}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`style.paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disable" : ""}`}
        >
          next
        </button>
      </div>
    </>
  );
}
