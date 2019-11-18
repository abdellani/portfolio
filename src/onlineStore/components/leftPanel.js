import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faCommentAlt, faCog, faWindowMaximize, faRadiation } from '@fortawesome/free-solid-svg-icons'
import profile from "../images/profile1.png"
const leftPanel = () =>
  <div
    className={[
      "left-panel", "col-md-1", "py-2",
       "d-flex", "flex-column",
      "justify-content-between", "align-items-center"
    ].join(" ")}
  >
    <div
      className={[
        "d-flex", "flex-md-column",
        "justify-content-between", "align-items-center"
      ].join(" ")}
    >
        <div className="icon darker mb-md-4">
          <FontAwesomeIcon
            icon={faRadiation}
          />
        </div>
        <span className="border-bottom border-secondary w-100 d-md-block mb-md-4 d-none"></span>
      <div className="icon darker">
        <FontAwesomeIcon
          icon={faThLarge}
        />
      </div>
      <div className="icon">
        <FontAwesomeIcon
          icon={faCommentAlt}
        />
      </div>
      <div className="icon">
        <FontAwesomeIcon
          icon={faWindowMaximize}
        />
      </div>
      <div className="icon">
        <FontAwesomeIcon
          icon={faCog}
        />
      </div>
    </div>
    <div>
      <img className="profile-image" src={profile} />
    </div>

  </div>

export default leftPanel;