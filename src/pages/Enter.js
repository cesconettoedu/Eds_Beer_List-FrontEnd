import { Link } from "react-router-dom";
import styled from 'styled-components'
import logo from "../assets/eulogo.png";

function Enter() {
  return (
    <Wrapper>
      <div className="container ">
        <div className="col text-center py-5">
          
          <h1 className="py-5"> Ed's Beer List</h1>
          
          <img src={logo} alt="edlogo" className="edlogo" />
          
          <div className="py-5">
            <Link to="/list">
              <div className="btn">ENTER</div>
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
`

export default Enter;
