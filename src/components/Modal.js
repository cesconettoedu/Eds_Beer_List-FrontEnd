import React from 'react'
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
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children,  edit, secondModal, onClose }) {
  
  const navigate = useNavigate();


  if(!open) return null


     function edit(id) {
    navigate(`/edit/${id} `);    
  }


  return (
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <button className='btn mb-1 mt-1' onClick={() => edit(children.id)}>Edit</button>
          <button className='btn' onClick={() => secondModal(true)} >Delete</button>
          <button className='btn mb-1 mt-1' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </>
  )
}
