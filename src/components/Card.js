import React, { useState, useEffect } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

import mug0 from "../assets/mugs/00mugs.png"
import mug1 from "../assets/mugs/01mugs.png"
import mug2 from "../assets/mugs/02mugs.png"
import mug3 from "../assets/mugs/03mugs.png"
import mug4 from "../assets/mugs/04mugs.png"
import mug5 from "../assets/mugs/05mugs.png"


function CardBeer({ id, title, image, note, star}) {
  
  const [stars, setStars] = useState();
  const navigate = useNavigate();


  const StarClick = (x) => {

    if(star == 0) {
      setStars(mug0)
    }
    if(star == 1) {
      setStars(mug1)
    }
    if(star == 2) {
      setStars(mug2)
    }
    if(star == 3) {
      setStars(mug3)
    }
    if(star == 4) {
      setStars(mug4)
    }
    if(star == 5) {
      setStars(mug5)
    }
  }


  const singleBeer = (id) => {
    navigate(`/${id}`)
  }


  
// just for test  , but will be link to edit or delete
 const casa = (event) => {
  navigate(`/`)
  event.stopPropagation();
  }




  useEffect(() => {
    StarClick(stars)
  }, []);



  return (
    <>
      {/* <div className="allCard" key={id}>
        <div className="card" style={{ width: "18rem" }} onClick={() => singleBeer(id)}>
          <h1 className="card-title text-center">{title}</h1>
          <img src={image} className="card-img-top " alt="..."></img>
          <div className="card-body">
            <p className="card-text">{note}</p>
            <div className="">
              <img src={stars} alt="stars"  
                width="240"
                height="60"/>
            </div>
          </div>
        </div>
      </div> */}
    
        <div className="card m-2 align-items-center "  key={id} onClick={() => singleBeer(id)}>
          <div className="col-4 img-square">
            <img src={image} className="card-img-top img-fluid rounded pt-1 pb-1" alt="Descrição imagem"/>
          </div>
          <div className="col-6 card-body d-flex  flex-column  align-items-center">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{note}</p>
            <div className="mugs">
            <img src={stars} className="card-img-top rounded p-1" alt="Descrição imagem"/>
            </div>
          </div>
          <button type="button" className="bi bi-three-dots-vertical pt-2 " onClick={(event) => casa(event)}></button>
        </div>
  
  
    </>
  );
}

;

export default CardBeer;
