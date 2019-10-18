import React, { Fragment } from "react"
import Anime from "react-anime";
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faMedium } from '@fortawesome/free-brands-svg-icons'



const navbarContent = [
  { url: "mailto: abdellani@gmail.com", icon: faEnvelope, text: "Email" },
  { url: "https://www.linkedin.com/in/abdellani-mohamed/", icon: faLinkedin, text: "LinkedIn" },
  { url: "https://github.com/abdellani", icon: faGithubSquare, text: "Github" },
  { url: "https://medium.com/@abdellani/", icon: faMedium, text: "Medium" },
]
const navItem = ({ index, url, icon, text }) =>
  <li key={index} class="list-group-item">
    <a class="text-dark" href={url}>
      <FontAwesomeIcon icon={icon} /> {text}
    </a>
  </li>


const application = () =>
  <div class="h-100  d-flex flex-nowrap flex-column align-items-center justify-content-center">
    <Anime
      opacity={[0, 1]}
      translateX={[-500, 0]}
    >
      <div>
        Hi,
      I'm abdellani mohamed
      </div>
    </Anime>

    <div>
      <ul class="mt-3 list-group list-group-horizontal-sm">
        <Anime
          opacity={[0, 1]}
          translateY={[250, 0]}
          easing={'easeOutExpo'}
          delay={(el, i) => i * 200 + 400}
        >
          {navbarContent.map((element, index) => navItem({ index, ...element }))}
        </Anime>
      </ul>
    </div>
  </div>


export default application;