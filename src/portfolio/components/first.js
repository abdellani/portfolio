import React, { Fragment } from "react"
import Anime from "react-anime";

const paragraphs = [
  <Fragment>
    Hi !
  </Fragment>,
  <Fragment>
    I'm Mohamed ABDELLANI
  </Fragment>,
  <Fragment>
    I have a <span class="text-danger font-weight-bold">master degree</span> in computer science from the <a href="https://www.linkedin.com/company/ecole-nationale-sup-rieure-d'informatique/about/">
      Higher School for Computer Science (Algiers/Algeria)
      </a>.
  </Fragment>
  ,
  <Fragment>
    I'm also an Offesive Security Certified Professional (<span class="text-danger font-weight-bold">OSCP</span>).
  </Fragment>
  ,
  <Fragment>
    I started my career as a network and system administrator, but then
    I decided to join <a href="https://www.microverse.org/">Microverse</a> to become a <span class="text-danger font-weight-bold">full-stack developer</span>.
  </Fragment>
  ,
  <Fragment>
    I use <span class="text-danger font-weight-bold">Ruby On Rails</span> and <span class="text-danger font-weight-bold">React JS</span> to build my projects.
  </Fragment>
]



const application = () =>
  <div class="h-100  d-flex flex-nowrap flex-column align-items-center justify-content-center">
    <div class="w-md-80 d-flex flex-nowrap flex-column">
      <Anime
        opacity={[0, 1]}
        translateY={[500, 0]}
        duration={3000}
        easing={'easeOutExpo'}
        delay={(el, i) => i * 500}
      >
        {paragraphs.map((element, index) => <span>{element} <br /></span>)}
      </Anime>
    </div>
  </div>


export default application;