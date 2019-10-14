import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Card from "./rightPanel/card"

const RightPanel = () =>
  <div 
  id="right-panel" 
  className={["d-flex","flex-column",
  "align-items-center","bg-light","d-flex","px-1"
  ].join(" ")}
  >
    <div
      className={[
        "bg-dark", "text-white", "rounded-circle", "d-flex",
        "justify-content-center", "align-items-center","my-4"
      ].join(" ")}
    >
      <FontAwesomeIcon icon={faTimes} />
    </div>
    <Card />
  </div>


export default RightPanel;