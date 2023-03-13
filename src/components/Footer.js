import React from 'react'
import './styles.css';
import back from "../assets/wave.png"
import AddBtnBeer from './AddBtnBeer';
import Counter from './Counter';

export default function Footer(props) {
  return (
    <>
      <footer className="footer fixed-bottom ">
        <Counter count={props.count} />
        <AddBtnBeer />
        <img src={back} alt="" className='w-100 h-100'/>
      </footer>
    </>
  )
}
