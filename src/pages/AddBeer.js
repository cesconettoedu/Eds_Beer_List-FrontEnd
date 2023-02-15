import React from 'react'
import styled from "styled-components";
import { Navbar } from '../components'
import Card from '../components/Card'

function AddBeer() {
  return (
    <Wrapper>
      
      <Navbar />
    
        <div className='center'>
          <Card />  
        </div>

    

    </Wrapper>
  )
}

const Wrapper = styled.main`

.center {
    display: flex;
    justify-content: center;
    padding-top: 100px;
}
`

export default AddBeer