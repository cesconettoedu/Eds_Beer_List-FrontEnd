import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Card } from "../components";
import styled from 'styled-components'



function SingleBeer({addre}) {
  
  const [breja, setBreja] = useState()
  let { id } = useParams();
  const navigate = useNavigate();


  async function single() {
    try {
      const res = await axios.get(addre + `/${id}`);
      setBreja(res.data[0]);  
    } catch (err) {
      console.error(err.message);
    }
  }



  const backToList = (event) => {
    navigate(`/list`);  
    event.stopPropagation();
  }



  useEffect(() => {
   single();
  }, []);


  
  return (
    <Wrapper>
      {!!breja && (
        <Card 
          key={breja.id}
          id={breja.id}
          title={breja.name}
          image={breja.image}
          note={breja.note}
          star={breja.star}
          addre={addre}
        />         
      )}
      <button type="button" className="btn btn-primary" onClick={(event) => backToList(event)}>Return</button>
    </Wrapper>
  )
}
const Wrapper = styled.main`
{
  text-align: -webkit-center;
}
.card {
    height: 52em;
    flex-direction: column;
    max-width: 348px;
  }

  .img-square {
    width: 90%;
    height: 402px;
  }

  .card img {
    max-width: 296px;
    max-height: 389px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
  }

 
`

export default SingleBeer