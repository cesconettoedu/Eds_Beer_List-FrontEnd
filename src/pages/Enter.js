import { Link } from "react-router-dom";
import styled from 'styled-components'
import logo from "../assets/eulogo.png";
import back from "../assets/back/back.png"
import cherrs from "../assets/back/cheers-mug.gif"

function Enter() {

// const myStyle={
//         backgroundImage: `url(${back})`,
//         height:'100vh',
//         backgroundSize: 'contain',
//         backgroundRepeat: 'no-repeat',
//         minWidth: '-webkit-fill-available',
//     };

// const myStyle={
//   backgroundColor: "black"
// }



  return (
    <Wrapper>
      <div className="container responsive" 
      //  style={myStyle}
      >
        <div className="col text-center ">
          
          <h1 className="pt-3"> Ed's Beer List</h1>
          
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
`

export default Enter;
