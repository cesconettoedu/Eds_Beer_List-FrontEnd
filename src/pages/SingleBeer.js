import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Card } from "../components";



function SingleBeer({addre}) {
  
  const [breja, setBreja] = useState()
  let { id } = useParams();

  async function single() {
    console.log("aaaaaaaaa:", id);
    try {
      const res = await axios.get(addre + `/${id}`);
       console.log("bbbbbbbbbb", res.data[0]);
      setBreja(res.data[0]);  
      console.log(breja);
    } catch (err) {
      console.error(err.message);
    }
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
    </>
  )
}


export default SingleBeer