import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import Card from "../components/Card";
import mug from "../assets/mugs/beerIconFull.png";
import axios from "axios";

function AddBeer({addre, edit }) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("No comments yet");
  const [star, setStar] = useState(0);
  
  const [scrShot, setScrShot] = useState("");
 
  const navigate = useNavigate();
  const refresh = () => window.location.reload(true)  //refresh a page
  let { id } = useParams();



// add beer
  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      title,
      image,
      note,
      star
    }

    if(edit){
      try {
        axios.put(addre + `/${id}`,body
        )
          .then((res) => {
            single(id)
            navigate('/list')
            refresh();
          })
      } catch (err) {
        console.error(err.message);
      }
    } else {
        try {    
          axios.post(addre + `/add`, body)
            .then((response) => {
            navigate(`/list`); 
            refresh();
       })
       } catch (err) {
         console.error(err.response);
       }   
  }
}



  //load a single beer to edit
  async function single() {
    try {
      const res = await axios.get(addre + `/${id}`);
      setTitle(res.data[0].name);
      setImage(res.data[0].image);
      setNote(res.data[0].note);
      setStar(res.data[0].star);
    } catch (err) {
       console.error(err.message);
    }
  }


//just to return to list
const List = (event) => {
 navigate(`/list`);  
}

//just to go to future
const Future = (event) => {
 navigate(`/future`);  
}



 useEffect(() => {
  
  if(edit){
    single();
  }
  }, []);



  return (
    <Wrapper>

      <div className="center">
      
        <Card 
          image={image} 
          title={title} 
          note={note}
          star={star}
          notWork={true}
          
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
            maxLength="15"
            placeholder="Beer Name"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
            required
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
          <button 
            type="button"
            className="btn"
            onClick={() => Future()}
          >Take picture</button>
          </div>   

          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Note
            </label>
            <input
            className="form-control form-control-lg my-1"
            type="text"
            note="note"
            maxLength="50"
            placeholder="Note"
            onClick={() => setNote('')}
            onChange={(e) => setNote(e.target.value)}
            value={note || ""}
          />
          </div> 



          <div className="mb-3">
            <label htmlFor="taste" className="form-label">
             Score
            </label>
            <div className="text-center">
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(1)}/>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(2)}/>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(3)}/>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(4)}/>
              <img src={mug} className="mug" alt="glass" onClick={() => setStar(5)}/>
            </div>
          </div>  
 

        {edit &&
        <div className="d-flex justify-content-around">
          <button className=' btn include' type="submit">Confirm</button>
          <button className=' btn include' type="button" onClick={() => List()} >Cancel</button>
        </div>
        }
        {!edit &&
        <div className="d-flex justify-content-around">
          <button className=' btn include' type="submit">Add Beer</button>
          <button className=' btn include' type="button" onClick={() => List()} >Cancel</button>
        </div>
        }


        </form>
        
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .center {
    display: flex;
    justify-content: center;
    padding-top: 25px;
  }

  .formAll {
    text-align: -webkit-center;
  }
  .formRow {
    width: 60%;
  }

  .mug {
    width: 3.3rem;
    height: 4.3rem;
    cursor: pointer;
    opacity: 0.3;
  }
  
  .mug:hover {
    opacity: 100;
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
