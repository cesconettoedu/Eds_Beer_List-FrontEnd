import {  Link } from 'react-router-dom';
import styled from 'styled-components'
import { navLinks } from '../util/constants'

function Home() {
  return (
    
    <Wrapper style={{paddingTop: "10vw"}} id="#">
        {navLinks.map(link => { 
          return(
            <div key={link.id} >
              <div className="container justify-content-center py-4 entireBtn" >
                <Link to={link.url}>
                    <div  className='card align-items-center py-2' >
                      <h2> {link.text} </h2>
                        <img
                          className="icons img-fluid"
                          src={link.img}
                          alt="icon"
                        />
                    </div>
                         
                </Link>
              </div>
            </div>
          )
        })}
    </Wrapper>
  )
}

const Wrapper = styled.main`

.entireBtn{
  width: 38vw;
}

.icons {
  width: fit-content;  
}

.card {
  // background: url("./bgCardHome.jpg") center;
  background: linear-gradient(90deg,#ff9500 0%,#d5cb0f 100%);
  background-size: cover;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;  
}

.card:hover {
  transform: scale(1.05);
  box-shadow: -7px 4px 28px -3px #b527cf;
}

`
export default Home