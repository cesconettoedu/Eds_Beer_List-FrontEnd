import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import Card from "../components/Card";

function AddBeer() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [star, setStar] = useState("");

  return (
    <Wrapper>
      <Navbar />

      <div className="center">
        <Card 
          image={image} 
          title={title} 
          note={note}
        />
      </div>

      <br />

      <div className="container d-flex justify-content-center">
        <form>
          <div className="mb-3">
            <label for="beerName" class="form-label">
              Beer Name
            </label>
            <input
            className="form-control form-control-lg my-1"
            type="text"
            title="title"
            maxLength="50"
            placeholder="Beer Name"
            onChange={(e) => setTitle(e.target.value)}
            // value={name || ""}
          />
          </div>

          <div className="mb-3">
            <label for="pictureAddress" class="form-label">
              Picture Address
            </label>
            <input
            className="form-control form-control-lg my-1"
            type="text"
            name="image"
            placeholder="Picture address"
            onChange={(e) => setImage(e.target.value)}
            // value={image || ""}
          />
          </div>   

          <div className="mb-3">
            <label for="note" class="form-label">
              Note
            </label>
            <input
            className="form-control form-control-lg my-1"
            type="text"
            note="note"
            placeholder="Note"
            onChange={(e) => setNote(e.target.value)}
            // value={image || ""}
          />
          </div> 

          <div className="mb-3">
            <label for="note" class="form-label">
              Note
            </label>
            <input
            className="form-control form-control-lg my-1"
            type="text"
            star="star"
            
            onChange={(e) => setStar(e.target.value)}
            // value={image || ""}
          />
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

 
`;

export default AddBeer;
