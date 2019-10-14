import React from "react"
import "./scss/index.scss"
import Navbar from "./components/navbar"
import LeftPanel from "./components/leftPanel"
import RightPanel from "./components/rightPanel"

const Application = () =>
  <div className="container bg-white my-5 ">
    <div className="row">
      <div className="col-md-9 container">
        <div className="row">
          <div className="col-md-12">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <LeftPanel/>
          </div>

        </div>
      </div>
      <div className="col-md-3 px-0">
        <RightPanel />
      </div>
    </div>
  </div>


export default Application