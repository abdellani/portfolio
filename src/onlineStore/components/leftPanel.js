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
        "d-flex", "flex-column",
        "justify-content-between", "align-items-center"
      ].join(" ")}
    >
      <div className="border-bottom border-secondary pb-4 mb-4">
        <div className="icon darker">
          <FontAwesomeIcon
            icon={faRadiation}
          />
        </div>
      </div>
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