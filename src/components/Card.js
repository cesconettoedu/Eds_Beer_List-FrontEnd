import React, { useState, useEffect } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Modal2 from "./Modal2";


import mug0 from "../assets/mugs/00mugs.png"
import mug1 from "../assets/mugs/01mugs.png"
import mug2 from "../assets/mugs/02mugs.png"
import mug3 from "../assets/mugs/03mugs.png"
import mug4 from "../assets/mugs/04mugs.png"
import mug5 from "../assets/mugs/05mugs.png"


function CardBeer({addre, id, title, image, note, star, notWork}) {
  


  const [stars, setStars] = useState();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

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
    if(!notWork) {
      navigate(`/${id}`)
    }
  }
  
  
   const secondModal = (choice) => {
    setIsOpen2(choice)
  }
  

  const hide3Dots = () => {
    let element = document.getElementById("3dots");

      if (!notWork) {
        element.removeAttribute("hidden");
      } else {
        element.setAttribute("hidden", "hidden");
      }
  }

  useEffect(() => {
    StarClick(stars)
    hide3Dots()
  }, [star]);

  return (
    <>

        <div className="card m-1 align-items-center " key={id}  disabled={notWork}>
          <div className="img-square order-xs-2 d-flex justify-content-center"  onClick={() => singleBeer(id)}>
            <img src={image} className="beerimg card-img-top img-fluid rounded p-1 hide-bg" alt="image not found" id="edu"/>                     
          </div>
          <div className=" card-body order-xs-3" onClick={() => singleBeer(id)}>
            <h3 className="card-title ">{title}</h3>
            <p className="card-text text-center">{note}</p>
            <div className="mugs">
              <img src={stars} className="card-img-top rounded" alt="No imagem"/>
            </div>
          </div>
          
          <div className='pt-1 order-xs-1 dots' id="3dots" >
            <div className="" >
            <button
              type="button"
              className="bi bi-three-dots-vertical "
              disabled={notWork}
              onClick={() => setIsOpen(true)}
            ></button>
           
             <Modal  
                open={isOpen} 
                onClose={() => setIsOpen(false)}  
                secondModal={secondModal}
                >
                  {{id: id, addre: addre}}
             </Modal>
             
             <Modal2 
                open={isOpen2} 
                onClose={() => setIsOpen2(false)} >
                   {/* inside here is pass as a children */}
                   {{id: id, addre: addre}}
             </Modal2>
                        
          </div>
          </div>

        </div>



          

       
    </>
  );
};

export default CardBeer;
