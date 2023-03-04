import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Card } from "../components";



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


//just for comoditi , i will change
const casa = (event) => {
 navigate(`/list`);  
  event.stopPropagation();
  }



  useEffect(() => {
   single();
  }, []);


  
  return (
    <>
      {!!breja && (
        <Card 
          key={breja.id}
          id={breja.id}
          title={breja.name}
          image={breja.image}
          note={breja.note}
          star={breja.star}
        />         
      )}
      <button type="button" className="btn btn-primary" onClick={(event) => casa(event)}>Return</button>
    </>
  )
}


export default SingleBeer