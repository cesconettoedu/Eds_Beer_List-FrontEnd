import React from 'react';
import { Button } from './AddBtnStyle';
import add from "../assets/add.png"
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
  
const AddBtnBeer = () =>{
  const navigate = useNavigate();

  const addB = () => {
    navigate(`/add`)
  }
  
   
  return (
    <Button>
     <img src={add} href="/add" alt="plus" onClick={addB} />
          Add
    </Button>
  );
}
  
export default AddBtnBeer;