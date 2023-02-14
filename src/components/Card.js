import React from "react";
import styled from 'styled-components'

function CardBeer({ id, title, image, note }) {

  return (
    <Wrapper>
      <div style={{padding: "2vw"}} key={id}>
        <div className="card" style={{width: "18rem"}}>
          <img src={image} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h1 className="card-title">{title}</h1>
            <p className="card-text">
              {note}
            </p>
            <div className="btn btn-primary">
              Go somewhere
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
.card {
  background: linear-gradient(90deg, #ff9500 0%, #d5cb0f 100%);
}

.card-img-top{
  
}

`

export default CardBeer;
