import React from "react"
import Typist from 'react-typist';
import Anime from "react-anime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import socialNetwork from "../images/socialNetwork.png"

const Card = () =>
  <div className="card text-dark mx-1 my-1">
    <img className="screenshot" src={socialNetwork} />
    <div className="card-header bg-white">
      <h5 className="card-title">Social network</h5>
      <h6 className="card-subtitle mb-2 text-muted">Ruby On Rails, Bootstrap</h6>
    </div>
    {/* <div className="card-body">
      <p className="card-text">Brief description of the project</p>
    </div> */}
    <div className="card-footer bg-white d-flex flex-nowrap text-nowrap justify-content-between">
      <a href="#" className="card-link btn btn-outline-dark">
        Demo
          </a>
      <a href="#" className="card-link btn btn-outline-dark">
        <FontAwesomeIcon icon={faGithubSquare} /> Code Source
          </a>
    </div>
  </div>

const projectList = ["project1", "project1", "project1", "project1",]
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
      <div className="my-4">

        Recent projects
    </div>
    </Anime>
      <Anime
        opacity={[0, 1]}
        translateY={[250, 0]}
        duration={3000}
        delay={(el, i) => i * 200 + 400}
        easing={'easeOutExpo'}
      >
    <div className="w-50 overflow-auto d-flex">

        <Card />
        <Card />
        <Card />
        <Card />
    </div>
      </Anime>
  </div>

export default application;