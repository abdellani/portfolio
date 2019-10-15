import React from "react"
import { Fragment } from "react"
import it from "../images/it-chapter.webp"
import theLionKing from "../images/theLionKing.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const Item = ({ content }) =>
  <div
    className="d-flex justify-content-between px-3 py-3 font-weight-bold"
  >
    {content}
    <FontAwesomeIcon icon={faPlus} />
  </div>

const SubMenuItem = ({image,title,movieGoers,rating}) =>
  <div className="px-3 py-1 d-flex flex-row justify-content-between align-items-center">
    <div className="d-flex align-items-center">
      <div>
        <img src={image} />
      </div>
      <div className="pl-2 d-flex flex-column">
        <div className="font-weight-bold">
          {title}
        </div>
        <div className="text-secondary">
          {movieGoers}
        </div>
      </div>
    </div>
    <div className="text-warning font-weight-bold">
      {rating}
    </div>
  </div>

const SelectedItem = ({ content }) =>
  <Fragment>
    <div
      className="d-flex justify-content-between px-3 py-3 font-weight-bold selected"
    >
      {content}
      <FontAwesomeIcon icon={faMinus} />
    </div>
    <div class="sub-list">
    <SubMenuItem 
    image={ theLionKing} 
    title={"the lion king"}
    movieGoers={"5557M"}
    rating={"7.8"}
    />
    <SubMenuItem 
    image={ theLionKing} 
    title={"the lion king"}
    movieGoers={"5557M"}
    rating={"7.8"}
    />
    <SubMenuItem 
    image={ theLionKing} 
    title={"the lion king"}
    movieGoers={"5557M"}
    rating={"7.8"}
    />
    <SubMenuItem 
    image={ theLionKing} 
    title={"the lion king"}
    movieGoers={"5557M"}
    rating={"7.8"}
    />
    <SubMenuItem 
    image={ theLionKing} 
    title={"the lion king"}
    movieGoers={"5557M"}
    rating={"7.8"}
    />
    <SubMenuItem 
    image={ theLionKing} 
    title={"the lion king"}
    movieGoers={"5557M"}
    rating={"7.8"}
    />
    </div>
  </Fragment>

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
      <Item content="opening this week" />
      <SelectedItem content="now playing" />
      <Item content="comming soon" />
      <Item content="around the web" />

    </div>
  </div>
export default LeftPanel;