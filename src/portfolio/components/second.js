import React from "react"
import Typist from 'react-typist';
import Anime from "react-anime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import socialNetwork from "../images/socialNetwork.png"
import imdb from "../images/imdb.png"
import onlineStore from "../images/onlineStore.png"
import photography from "../images/photography.png"

const Card = ({ index, img, title, technologies, demoUrl, codeUrl, ideaSource }) =>
  <div key={index} className="card text-dark mx-1 my-1 mb-2">
    <img className="screenshot" src={img} />
    <div className="card-header bg-white">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{technologies}</h6>
    </div>
    <div className="card-body">
      {
        ideaSource &&
        <p className="card-text">
          <a target="_blank" href={ideaSource}>
            original designer
          </a>
        </p>
      }
    </div>
    <div className="card-footer px-0 bg-white d-flex flex-nowrap text-nowrap justify-content-around">
      <a
        href={demoUrl}
        className="card-link btn btn-outline-dark"
        target="_blank"
      >
        Demo
          </a>
      <a
        href={codeUrl}
        className="card-link btn btn-outline-dark mx-0"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithubSquare} /> Code Source
          </a>
    </div>
  </div>

const projects = [
  {
    img: onlineStore,
    title: "Online store",
    technologies: "HTML,CSS, Bootstrap and React",
    demoUrl: "/online-store",
    codeUrl: "#",
    ideaSource: "https://dribbble.com/shots/7476168-Online-store-dashboard-dark-mode"
  },
  {
    img: imdb,
    title: "IMDb",
    technologies: "HTML,CSS, Bootstrap and React",
    demoUrl: "/imdb",
    codeUrl: "#",
    ideaSource: "https://dribbble.com/shots/7228236-IMDb-website-concept"
  },
  {
    img: socialNetwork,
    title: "Social Network",
    technologies: "Ruby On Rails, Bootstrap",
    demoUrl: "https://fast-wave-25233.herokuapp.com/",
    codeUrl: "https://github.com/abdellani/final-project/"
  },
  {
    img: photography,
    title: "Sport !",
    technologies: "HTML,CSS, Bootstrap and React",
    demoUrl: "/photography",
    codeUrl: "#",
    ideaSource: "https://dribbble.com/shots/6804943-Gamely-Screens-Transition-Concept"
  },
]

const application = () =>
  <div
    className="h-100 d-flex flex-column align-items-center justify-content-center"
  >
    <Anime
      opacity={[0, 1]}
      translateY={[250, 0]}
      duration={3000}
      easing={'easeOutExpo'}
    >
      <div className="h3 mt-4 mb-5">

        Recent projects
      </div>
    </Anime>
    <div className="project-list-container w-50 d-flex flex-wrap  justify-content-center justify-content-md-around">
      <Anime
        opacity={[0, 1]}
        translateY={[250, 0]}
        duration={3000}
        delay={(el, i) => i * 200 + 400}
        easing={'easeOutExpo'}
      >
        {projects.map((project, index) => Card({ index, ...project }))}
      </Anime>
    </div>
  </div>

export default application;