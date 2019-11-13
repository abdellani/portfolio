import React from "react"
import Anime from "react-anime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faMedium } from '@fortawesome/free-brands-svg-icons'

const contactItems = [
  { url: "mailto: abdellani@gmail.com", icon: faEnvelope, text: "Email" },
  { url: "https://www.linkedin.com/in/abdellani/", icon: faLinkedin, text: "LinkedIn" },
  { url: "https://github.com/abdellani", icon: faGithubSquare, text: "Github" },
  // { url: "https://medium.com/@abdellani/", icon: faMedium, text: "Medium" },
]
const contactBar = ({ index, url, icon, text }) =>
  <li key={index} class="list-group-item">
    <a class="text-dark" href={url}>
      <FontAwesomeIcon icon={icon} /> {text}
    </a>
  </li>

const application = () =>
  <div class="h-100  d-flex flex-nowrap flex-column align-items-center justify-content-center">

      <Anime
        opacity={[0, 1]}
        translateY={[250, 0]}
        easing={'easeOutExpo'}
        duration={3000}
        delay={500}
      >
        <div class="h3 text-center">
          Contact :
        </div>
      </Anime>

      <ul class="mt-3 list-group list-group-horizontal-sm">
        <Anime
          opacity={[0, 1]}
          translateY={[250, 0]}
          easing={'easeOutExpo'}
          delay={(el, i) => i * 500 + 500}
        >
          {contactItems.map((element, index) => contactBar({ index, ...element }))}
        </Anime>
      </ul>
  </div>
export default application;