import React from "react"
import it from "../images/it-chapter.webp"
import theLionKing from "../images/theLionKing.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const LeftPanel = () =>
  <div id="left-panel">
    <div
      className="w-100 px-1 py-1"
    >
      <img className="w-100" src={it} />
    </div>
    <div
      className="titles d-flex flex-column "
    >
      <div
        className="d-flex justify-content-between px-3 py-3 font-weight-bold"
      >
        opening this week
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div
        className="d-flex justify-content-between px-3 py-3 font-weight-bold selected"
      >
        now playing
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div class="sub-list">
        <div  className="px-3 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div>
            <img src={theLionKing}/>
            </div>
            <div className="pl-2 d-flex flex-column">
              <div className="font-weight-bold">
                the lion king
              </div>
              <div className="text-secondary">
                5534.7M
              </div>
            </div>
          </div>
          <div className="text-warning font-weight-bold">
            7.8
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-between py-3 px-3 font-weight-bold"
      >
        comming soon
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div
        className="d-flex justify-content-between py-3 px-3 font-weight-bold"
      >
        around the web
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  </div>
export default LeftPanel;