import React from "react";
import imdbLogo from "../../images/imdb-logo.png"
import twitterLogo from "../../images/twitter-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Card = ({title,description,image}) =>
  <div className={[
    "twitter-card", "bg-white",
    "w-100", "px-3","mb-3"
  ].join(" ")}
  >
    <div
      className={[
        "first-row", "d-flex",
        "justify-content-center", "py-3", "border-bottom", "mb-3"
      ].join(" ")}
    >
      <div
        className={[
          "rounded-circle", "overflow-hidden",
          "d-flex", "justify-content-center", "align-items-center"
        ].join(" ")}
      >
        <img src={twitterLogo} />
      </div>
    </div>
    <div className="second-row d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={imdbLogo} className="rounded-circle" />
        <div className="d-flex flex-column pl-2 identifiers">
          <div className="font-weight-bold">
            IMDb <span className="text-primary"> <FontAwesomeIcon icon={faCheckCircle} /> </span>
          </div>
          <div className="text-secondary ">
            @IMDb
          </div>
        </div>
      </div>
      <div className="two-points font-weight-bold">
        :
      </div>
    </div>
    <div className="main mb-2">
        <div className="two-points font-weight-bold mt-3">
        {title}
        </div>
        <div className="text-secondary my-2">
          {description}
        </div>
        <div className="mb-2">
          <img className={"w-100"} src={image}/>
        </div>
    </div>
  </div>

export default Card;