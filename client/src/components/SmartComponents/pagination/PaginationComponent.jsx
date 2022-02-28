/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
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
    
    return new Array(Math.ceil(data.length / 10) !== 25 ? Math.ceil(data.length / 10) : pageLimit ).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    setPages(Math.ceil(data.length / 10))
    console.log(pages)
    setcurrentPage(1)
  }, [data])

 
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
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={gotToPrevPage}
          className={`prev ${currentPage === 1 ? "disable" : ""}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
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