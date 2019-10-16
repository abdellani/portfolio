import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars, faCreditCard, faUsers,
  faThLarge, faUserAlt, faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons'
import cx from "classnames";
import { CSSTransition } from "react-transition-group";


let generateNavItem = (icon, title, description = null, status,func) =>
  <li key={title} onClick={func}>
    <div
      className={cx({
        "nav-icon": true,
        "filled": status === "filled",
        "selected": status === "selected"
      })}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
    <div
      className={cx({
        "nav-title": true,
        "filled": status === "filled",
        "selected": status === "selected"
      })}
    >
      <div >
        {title}
      </div>
      <div className={"nav-description"}>
        {description}
      </div>
    </div>
    <CSSTransition
      in={status === "selected"}
      timeout={1000}
      classNames="nav-arrow"
      className="nav-arrow"
      unmountOnExit
    >
      <FontAwesomeIcon icon={faLongArrowAltRight} />
    </CSSTransition>
  </li>

const SidePanel = ({ location, gameType, yourTeam, payement,resetGameType }) => {
  let status = ["filled", "selected", "unfilled"]
  let icons = [faUserAlt, faThLarge, faUsers, faCreditCard]
  let title = ["LOCATION", "game type", "your team", "Payment"]
  let statusSelector = 0;

  let items = [location, gameType, yourTeam, payement].map(
    (description, index) => {
      if (description == null) {
        if (statusSelector === 0 || statusSelector === 1) {
          statusSelector++
        }
      }
      return (
        generateNavItem(
          icons[index], 
          title[index], 
          description, 
          status[statusSelector],
          (index===1)?resetGameType:null
          )
      )
    }
  )

  return (
    <div className="side-panel">
      <div className="text-violet top-panel">
        <div>
          <span>
          </span>
          gamely
        </div>
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="main-text">
        Find a Team for game
      </div>
      <ul className="navbar">
        {items}
      </ul>
    </div>
  )
}
export default SidePanel;