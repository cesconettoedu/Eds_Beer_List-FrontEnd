import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mug1 from "../assets/mugs/01mugs.png"
import mug2 from "../assets/mugs/02mugs.png"
import mug3 from "../assets/mugs/03mugs.png"
import mug4 from "../assets/mugs/04mugs.png"
import mug5 from "../assets/mugs/05mugs.png"


function CardBeer({ id, title, image, note, star}) {
  
  const [stars, setStars] = useState();

  const StarClick = (id) => {
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



  useEffect(() => {

    StarClick(star)
  }, []);



  return (
    <Wrapper>
      <div className="allCard" key={id}>
        <div className="card" style={{ width: "18rem" }}>
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
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .allCard {
    padding: 2rem;
  }

  .card {
    padding: 4%;
    background: linear-gradient(90deg, #ff9500 0%, #d5cb0f 100%);
  }

  .card-img-top {
    width: 100%;
    height: 30vh;
    object-fit: contain;  
  }
`;

export default CardBeer;
