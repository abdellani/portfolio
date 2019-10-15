import React from "react"
import { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import greenBook from "../images/greenbook.jpeg"
import theLionKing from "../images/theLionKing.jpeg"
import angelHasFallen from "../images/angelHasFallen.jpg"
import terminator from "../images/terminator.jpg"
import abominable from "../images/abominable.png"

let Main = () =>
  <Fragment>
    <div className="row">
      <div className="h2 font-weight-bold">
        Explore
              </div>
      <div className="d-flex w-100 align-items-center">
        <input
          id="filter"
          className="w-100 bg-light border-0 py-3 px-2"
          type="text"
          placeholder="Find Movies, TV shows, Celebreties and more ..."
        />
        <div className="text-nowrap font-weight-bold px-2 d-flex align-items-center">
          <span className="red-circle mx-2 d-flex align-items-center justify-content-center">5</span>
          <div>
            All filter
          </div>
        </div>
      </div>
    </div>
    <div className="row explore-movie py-3">
      <div className="col-md-4 px-1">
        <img src={theLionKing} />
      </div>
      <div className="col-md-3 px-1">
        <div className="second-column d-flex flex-column">
          <div
            className="facebook d-flex justify-content-center align-items-center text-white font-weight-bold mb-1"
          >
            <div className="h4 pr-1">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div>
              <div>
                Follow Us on Facebook
              </div>
              <div>
                <FontAwesomeIcon icon={faHandPointRight} />
              </div>
            </div>
          </div>
          <div
            className="snapshot d-flex justify-content-center align-items-center   font-weight-bold"
          >
            <div className="h3 pr-1">
              🤩
            </div>
            <div>
              <div className="text-dark">
                IMDb snapshot
              </div>
              <div className="text-danger">
                2019 Emmys
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 px-1">
        <img src={angelHasFallen} />
      </div>
      <div className="col-md-2 px-1">
        <div className="fourth-column d-flex flex-column">
          <div
            className="d-flex justify-content-center align-items-center text-dark font-weight-bold mb-1"
          >
            VIEW ALL
          </div>
          <div
            className="yellow-imdb d-flex justify-content-center align-items-center text-dark"
          >
            IMDB
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 h3 font-weight-bold">
        <span className="text-secondary">Poll:</span> Top Movies 2019
      </div>
    </div>
    <div className="row top-movie">
      <div className="col-md-4">
        <img src={greenBook} />
      </div>
      <div className="col-md-4">
        <img src={terminator} />
      </div>
      <div className="col-md-4">
        <img src={abominable} />
      </div>
    </div>
  </Fragment>

export default Main