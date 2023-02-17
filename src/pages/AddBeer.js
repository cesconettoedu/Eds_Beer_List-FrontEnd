import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import Card from "../components/Card";
import mug from "../assets/mugs/beerIconFull.png";
import mug0 from "../assets/mugs/00mugs.png"
import mug1 from "../assets/mugs/01mugs.png"
import mug2 from "../assets/mugs/02mugs.png"
import mug3 from "../assets/mugs/03mugs.png"
import mug4 from "../assets/mugs/04mugs.png"
import mug5 from "../assets/mugs/05mugs.png"


import axios from "axios";

function AddBeer({addre}) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [star, setStar] = useState(0);

    
 
// add beer
  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
     
      title,
      image,
      note,
      star
    }

    try {    
      console.log(body);  
      axios.post(addre + `/add`, body)
       .then((response) => {
         console.log("addddddddd");
        
       })
       } catch (err) {
         console.error(err.response);
       }
      
  }









  return (
    <Wrapper>
      <Navbar />

      <div className="center">
        <Card 
          image={image} 
          title={title} 
          note={note}
          star={star}
        />
      </div>

      <br />

      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="beerName" className="form-label">
              Beer Name
            </label>
            <input
            className="form-control form-control-lg my-1"
            type="text"
            title="title"
            maxLength="50"
            placeholder="Beer Name"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
          </div>

          <div className="mb-3">
            <label htmlFor="pictureAddress" className="form-label">
              Picture Address
            </label>
            <input
            className="form-control form-control-lg my-1"
            type="text"
            name="image"
            placeholder="Picture address"
            onChange={(e) => setImage(e.target.value)}
            value={image || ""}
          />
          </div>   

          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Note
            </label>
            <input
            className="form-control form-control-lg my-1"
            type="text"
            note="note"
            placeholder="Note"
            onChange={(e) => setNote(e.target.value)}
             value={note || ""}
          />
          </div> 



          <div className="mb-3">
            <label htmlFor="taste" className="form-label">
             Taste
            </label>
            
            {/* ainda nao ta funcionando , conflito depois que coloquei no card na lista */}
            <div>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(1)}/>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(2)}/>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(3)}/>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(4)}/>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(5)}/>
            </div>
          

          </div>  

        
          <button className=' btn include' type="submit">Add Beer</button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .center {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }

  .formAll {
    text-align: -webkit-center;
  }
  .formRow {
    width: 60%;
  }

  .mug {
    width: 4rem;
    height: 5rem;
    cursor: pointer;
  }
  




  
  .slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}
`;

export default AddBeer;
