import React from "react"
import { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import it from "../images/it-chapter.webp"
import theLionKing from "../images/theLionKing.png"
import itChapter from "../images/itChapter.png"
import angelHasFallen from "../images/angelHasFallen.png"
import hustlers from "../images/hustlers.png"
import downtonAbbey from "../images/downtonAbbey.png"

const Item = ({ content }) =>
  <div
    className="d-flex justify-content-between px-3 py-3 font-weight-bold"
  >
    {content}
    <FontAwesomeIcon icon={faPlus} />
  </div>

const SubMenuItem = ({ image, title, benefits, rating }) =>
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
          {benefits}
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
        image={theLionKing}
        title={"the lion king"}
        benefits={"$537.7M"}
        rating={"7.8"}
      />
      <SubMenuItem
        image={itChapter}
        title={"It Chapter Two"}
        benefits={"$17.0M"}
        rating={"7.0"}
      />
      <SubMenuItem
        image={angelHasFallen}
        title={"Angel has fallen"}
        benefits={"$64.7M"}
        rating={"7.1"}
      />
      <SubMenuItem
        image={hustlers}
        title={"Hustlers"}
        benefits={"$16.8M"}
        rating={"6.8"}
      />
      <SubMenuItem
        image={downtonAbbey}
        title={"Downton Abbey"}
        benefits={"$31.0M"}
        rating={"7.8"}
      />
      <div className="more-result text-center py-3">
        More results
      </div>
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