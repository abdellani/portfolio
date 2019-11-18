import React from "react"
import './scss/index.scss'
import LeftPanel from "./components/leftPanel"
import RightPanel from "./components/rightPanel"
import Main from "./components/main"
import SourceCodeButton from "../general/source_code_button"

const Application = () =>
  <div className="container-fluid">
  <SourceCodeButton url="http://google.com"/>
    <div className="row justify-content-between">
      <LeftPanel />
      <Main />
      <RightPanel />
    </div>
  </div>

export default Application;