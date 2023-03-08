import React from 'react'
import Photo from '../assets/future.jpeg'
import { useNavigate } from 'react-router-dom';

function Future() {

const navigate = useNavigate();

const List = (event) => {
 navigate(`/list`);  
  }

  return (
    <>
      <div className='d-flex justify-content-center pt-5' onClick={() => List()}>
        <img 
          src={Photo} alt="nada" 
          width='90%' 
          height='90%' 
          style= {{maxWidth:'380px', maxHeight:'680px'}}/>
      </div>
    </>

  )
}

export default Future;