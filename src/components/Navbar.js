import styled from "styled-components";
import logo from "../assets/eulogo.png";

function Navbar() {
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
                width="60"
                height="60"
              />
            </a>
          </div>

          {/* search */}
          <div className="search col-6">
            <input
              className="form-control mr-sm-2"
              style={{ fontSize: "1.5rem" }}
              id="parameter"
              type="text"
              // onChange={handleChange}
              placeholder="Search"
            ></input>
          </div>

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
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-emoji-smile"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                  <br />
                  List
                </a>
              </li>

              <li className="nav-item text-center">
                <a href="/add" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                     width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-gear-wide-connected"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                  </svg>
                  <br />
                  Add
                </a>
              </li>

              <li className="nav-item text-center">
                <a href="/" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-folder2-open"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" />
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
