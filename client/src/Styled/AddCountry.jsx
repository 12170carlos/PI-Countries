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

export const AddCountryItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;

    & > label {
        color: #00d1ff;
        margin-bottom: 5px ;
    }
    
`

export const AddCountryForm = styled.form`
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr;
`

export const AddCountryItemsWraper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;

    & > label {
        color: #00d1ff;
        margin-bottom: 5px;
    }
`

export const CreateCountryInput = styled.input`
    font-size: 16px;
  	font-family: 'Verdana', sans-serif;
  	font-weight: 400;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.25);
  	color: #e5f0ef;
  	width: 220px;
  	border: 2px solid #aaa;
    ::placeholder{
        color: lightgray;
      } 
      @media (max-width: 800px){
          width: 80vw;
      }
`