import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Modal({ open, children, onClose }) {
  
  const navigate = useNavigate();
  const refresh = () => window.location.reload(true)  //refresh a page


  if(!open) return null


   // To delete a beer
  async function del() {
     try {
      await axios.delete(children.addre + `/${children.id}`); 
      navigate(`/list`);
      refresh();    
    } catch (err) {
      console.error(err.message);
    }
  }


  return (
    <div>
      <button onClick={onClose}>Cancel</button>
      <button onClick={() => del()}>Yes</button>
    </div>
  )
}
