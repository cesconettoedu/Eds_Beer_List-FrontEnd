import React, { useState, useEffect } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import mug0 from "../assets/mugs/00mugs.png"
import mug1 from "../assets/mugs/01mugs.png"
import mug2 from "../assets/mugs/02mugs.png"
import mug3 from "../assets/mugs/03mugs.png"
import mug4 from "../assets/mugs/04mugs.png"
import mug5 from "../assets/mugs/05mugs.png"


function CardBeer({addre, id, title, image, note, star}) {
  
 console.log(addre);

  const [stars, setStars] = useState();
  const navigate = useNavigate();
  const refresh = () => window.location.reload(true)  //refresh a page

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


 
//used to stop the father be clicked
 const editDel = (event) => {
  // navigate(`/`)  just for test propouse
  event.stopPropagation();
  }
  


 // To delete a beer
  async function del(id) {
     try {
      // const choice = window.confirm("Are you sure you want to delete this BEER ?")
      // if(choice) {

      //   await axios.delete(addre + `/${id}`); 
      //   refresh();
      // }

      
      await axios.delete(addre + `/${id}`); 
      refresh();
      
     } catch (err) {
       console.error(err.message);
     }
   }

  

  useEffect(() => {
    StarClick(stars)
  }, []);

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
         
          <div class="dropdown mb-4 dropstart">
            <a
              class="bi bi-three-dots-vertical "
              role="button"
              id="dropdown-direita"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={(event) => editDel(event)}
              ></a>
            <ul class="dropdown-menu" aria-labelledby="dropdown-direita" onClick={(event) => editDel(event)}>
              <li><a href="#" class="dropdown-item" onClick={() => del(id)}>Delete</a></li>
              <li><a href="#" class="dropdown-item">Edit</a></li>
            </ul>
          </div>

        </div>
  
  
    </>
  );
};

export default CardBeer;
