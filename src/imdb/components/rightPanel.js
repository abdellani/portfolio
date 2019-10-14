import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Card from "./rightPanel/card"
import gotImage from "../images/got.jpeg"

const RightPanel = () =>
  <div 
  id="right-panel" 
  className={["d-flex","flex-column",
  "align-items-center","bg-light","d-flex","px-1","overflow-auto"
  ].join(" ")}
  >
    <div
      className={[
        "cross-icon",
        "bg-dark", "text-white", "rounded-circle", "d-flex",
        "justify-content-center", "align-items-center","my-4",
      ].join(" ")}
    >
      <FontAwesomeIcon icon={faTimes} />
    </div>
    <Card 
    title={'Which Start Where Almost in "Game of Thrones"?'} 
    description={'when you play "Game of Thrones," you win or you die. For actions, you are cast or you miss out the biggest ...'}
    image={gotImage}
    />
    <Card 
    title={'Which Start Where Almost in "Game of Thrones"?'} 
    description={'when you play "Game of Thrones," you win or you die. For actions, you are cast or you miss out the biggest ...'}
    image={gotImage}
    />
  </div>


export default RightPanel;