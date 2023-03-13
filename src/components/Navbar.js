import styled from "styled-components";
import logo from "../assets/eulogo.png";
import Search from "./Search";

function Navbar({handleSearch}) {

  const myIcon = 50
  const iconSize = 22


   

  return (
    <Wrapper>
      <nav className="navbar  backnav navbar-expand-lg p-1 fixed-top ">
        <div className="container">
         
          {/* navbar brand */}
          <div className="col-2">
            <a href="/" className="navbar-brand">
              <img
                src={logo}
                alt="edlogo"
                className="edlogo"
                width={myIcon}
                height={myIcon}
              />
            </a>
          </div>

          <Search 
            handleSearch={handleSearch}
          />


          {/* toggler */}
          <button
            className="navbar-toggler custom-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          {/* links */}
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ">
              <li className="nav-item text-center">
                <a href="/list" className="nav-link">
                  <svg  
                      width={iconSize}  
                      height={iconSize}  
                      fill="currentColor" 
                      className="bi bi-card-list" 
                      viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                  </svg>
                  <br />
                  List
                </a>
              </li>

              <li className="nav-item text-center">
                <a href="/add" className="nav-link">
                  <svg  
                      width={iconSize} 
                      height={iconSize} 
                      fill="currentColor" 
                      className="bi bi-file-earmark-plus" 
                      viewBox="0 0 16 16">
                    <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                  </svg>
                  <br />
                  Add
                </a>
              </li>

              <li className="nav-item text-center">
                <a href="/future" className="nav-link">
                  <svg 
                      width={iconSize} 
                      height={iconSize} 
                      fill="currentColor" 
                      className="bi bi-camera" 
                      viewBox="0 0 16 16">
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                  </svg>
                  <br />
                  Future
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  #nav {
    place-content: center;
  }

  .navbar-nav {
    flex-direction: row;
    justify-content: space-around;
  }

  .backnav {
    background-color: rgb(237, 239, 241);
  }

  .navbar-brand {
    font-size: 1.5rem;
  }

  .nav-item {
    padding-left: 2%;
    min-width: fit-content;
  }

  .nav-link {
    font-size: 1rem;
  }

  .nav-link:hover,
  .navbar-brand:hover {
    color: #14d179;
  }

  .nav-link,
  .navbar-brand,
  .custom-toggler {
    color: #0d6292;
  }

  /*color icon, use a svg image*/
  .custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(13, 98, 146, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
`;

export default Navbar;
