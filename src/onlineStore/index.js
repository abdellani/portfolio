import React from "react"
import './scss/index.scss'
import LeftPanel from "./components/leftPanel"
import RightPanel from "./components/rightPanel"
import Main from "./components/main"
import SourceCodeButton from "../general/source_code_button"

const Application = () =>
  <div className="container-fluid">
  <SourceCodeButton url="https://github.com/abdellani/portfolio/tree/development/src/onlineStore"/>
    <div className="row justify-content-between">
      <LeftPanel />
      <Main />
      <RightPanel />
    </div>
  </div>

export default Application;