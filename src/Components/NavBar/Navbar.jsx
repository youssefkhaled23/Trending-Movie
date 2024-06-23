
import { Link } from "react-router-dom";
import img from "./img/images.jpeg"
import "./Css/navbar.css"
import { useContext } from "react";
import { dataText } from "../../Context/Context";

export default function Navbar() {
  // Call The Context To Get The Function
  let {getInputValue} = useContext(dataText)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black p-2 pt-3">
        <div className="container">
            <div className="logo d-flex justify-content-center align-items-center">
                <img src={img} className="logo-img me-2 rounded-2" alt="Logo" />
            <Link className="navbar-brand text-white" to="">
            MovieNight
          </Link>
            </div> 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-3 mt-lg-0">
              <li className="nav-item mt-1">
              <input onChange={getInputValue} className="form-control Search me-2 p-1 bg-gradient" type="search" placeholder="Search" aria-label="Search" />
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="Movie">
                  Movie
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="Tv">
                  Tv
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
