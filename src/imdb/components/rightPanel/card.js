import React from "react";
import imdbLogo from "../../images/imdb-logo.png"
import twitterLogo from "../../images/twitter-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Card = () =>
  <div className={[
    "twitter-card", "bg-white",
  "w-100","px-3"
  ].join(" ")}
  >
    <div
      className={[
        "first-row","d-flex",
        "justify-content-center","py-3", "border-bottom"
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
    <div className="second-row">
      <img src={imdbLogo} className="rounded-circle" />
      <div className="d-flex flex-column">
        <div>
          IMDb <span className="text-primary"> <FontAwesomeIcon icon={faCheckCircle} /> </span>
        </div>
        <div>
          @IMDb
        </div>
      </div>
    </div>
  </div>

export default Card;