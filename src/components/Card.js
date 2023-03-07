import React, { useState, useEffect } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

import mug0 from "../assets/mugs/00mugs.png"
import mug1 from "../assets/mugs/01mugs.png"
import mug2 from "../assets/mugs/02mugs.png"
import mug3 from "../assets/mugs/03mugs.png"
import mug4 from "../assets/mugs/04mugs.png"
import mug5 from "../assets/mugs/05mugs.png"


function CardBeer({addre, id, title, image, note, star}) {
  
  const [stars, setStars] = useState();
  const navigate = useNavigate();
  const refresh = () => window.location.reload(true)  //refresh a page
  const [isOpen, setIsOpen] = useState(false)

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
  
  
const editDel = (event) => {
  // used to stop the father be clicked
  event.stopPropagation();
}



function edit(id) {
  navigate(`/edit/${id} `);    
}

  useEffect(() => {
    StarClick(stars)
  }, [star]);

  return (
    <>
     
        <div className="card m-2 align-items-center "  key={id} onClick={() => singleBeer(id)}>
          <div className="col-4 img-square">
            <img src={image} className="card-img-top img-fluid rounded pt-1 pb-1" alt="Image beer"/>
          </div>
          <div className="col-6 card-body d-flex  flex-column  align-items-center">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{note}</p>
            <div className="mugs">
              <img src={stars} className="card-img-top rounded p-1" alt="Descrição imagem"/>
            </div>
          </div>
         
          <div className="dropdown mb-4 dropstart">
            <a
              className="bi bi-three-dots-vertical "
              role="button"
              id="dropdown-direita"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={(event) => editDel(event)}
              ></a>
            <ul className="dropdown-menu" aria-labelledby="dropdown-direita" onClick={(event) => editDel(event)}>
              <li><button className="dropdown-item" onClick={() => setIsOpen(true)} > Delete </button></li>           
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                  
                  {{id: id, addre: addre }}
                </Modal>
              <li><button className="dropdown-item" onClick={() => edit(id)}>Edit</button></li>
              
            </ul>
          </div>
        </div>

        
     
    </>
  );
};

export default CardBeer;
