import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MODAL_STYLES ={
  position: 'fixed',
  borderRadius: '7px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding:'20px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000
}

export default function Modal({ open, children, onClose}) {
  
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


  function edit(id) {
    navigate(`/edit/${id} `);    
  }


  return (
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
            <button className='btn mb-1 mt-1' onClick={onClose}>Cancel</button>
            <button className='btn' onClick={() => del()}>Yes</button>
        </div>
      </div>
    </>
  )
}
