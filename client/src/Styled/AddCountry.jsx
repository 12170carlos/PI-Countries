import styled from "styled-components";

export const AddCountryWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px ;

`
export const AddCountryFormWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px ;
    grid-auto-flow: row;
    align-items: center ;
    grid-template-areas:
        ". . ." ;
    color: white;
    justify-items: center;
    background-color: rgba(0, 0, 0, 0.75) ;
    width: 700px;
    padding-top: 10px;
    padding-bottom: 10px ;
`