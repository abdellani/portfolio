import React from "react"
import './scss/index.scss'
import LeftPanel from "./components/leftPanel"
import RightPanel from "./components/rightPanel"

const Application = () =>
  <div className="container-fluid">
    <div className="row">
    <LeftPanel />
    <div className="col-md-8">
    </div>
    <RightPanel/>
    </div>
  </div>

export default Application;