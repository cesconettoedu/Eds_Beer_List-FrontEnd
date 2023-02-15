import React from "react";
import styled from "styled-components";
import stars from "../assets/05mugs.png";

function CardBeer({ id, title, image, note }) {


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
