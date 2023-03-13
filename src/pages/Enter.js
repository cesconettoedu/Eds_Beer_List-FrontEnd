import { Link } from "react-router-dom";
import styled from 'styled-components'
import logo from "../assets/eulogo.png";
import cherrs from "../assets/back/cheers-mug.gif"

function Enter() {

  return (
    <Wrapper>
      <div className="container responsive">
        <div className="col text-center">
          
          <h1 className="pt-3 eds"> Ed's Beer List</h1>
          
          <img src={logo} alt="edlogo" className="edlogo" />
          
          <img src={cherrs} alt="edlogo" className="edlogo" />
          <div className="">
            <Link to="/list">
              <div className="btn w-100">ENTER</div>
            </Link>
          </div>
        
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`

.btn{
  font-size: 2rem;
}

.eds {
  color: var( --clr-complement-4)
}
`

export default Enter;
