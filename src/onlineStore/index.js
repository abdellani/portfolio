import React from "react"
import './scss/index.scss'
import LeftPanel from "./components/leftPanel"
import RightPanel from "./components/rightPanel"
import Main from "./components/main"

const Application = () =>
  <div className="container-fluid">
    <div className="row justify-content-between">
      <LeftPanel />
      <Main />
      <RightPanel />
    </div>
  </div>

export default Application;