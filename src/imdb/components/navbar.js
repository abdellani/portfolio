import React from "react"
import imdbLogo from "../images/imdb1-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () =>
  <div className="p-4 navigation-bar d-flex justify-content-between text-dark ">
    <img className="logo" src={imdbLogo} />
    <ul className="d-flex">
      <li
        className="mr-3 font-weight-bold"
      >
        Movies & TV Shows <FontAwesomeIcon icon={faAngleDown} />
      </li>
      <li
        className="mr-3 font-weight-bold"
      >
        Events & Photos <FontAwesomeIcon icon={faAngleDown} />
      </li>
      <li
        className="font-weight-bold"
      >
        News & Community <FontAwesomeIcon icon={faAngleDown} />
      </li>
    </ul>
  </div>

export default Navbar;