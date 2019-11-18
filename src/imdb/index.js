import React,{Fragment} from "react"
import "./scss/index.scss"
import Navbar from "./components/navbar"
import LeftPanel from "./components/leftPanel"
import RightPanel from "./components/rightPanel"
import Main from "./components/main"
import SourceCodeButton from "../general/source_code_button"
const Application = () =>
<Fragment>
  <SourceCodeButton url="https://github.com/abdellani/portfolio/tree/development/src/imdb"/>
  <div className="container bg-white my-5 pb-3 ">
    <div className="row">
      <div className="col-md-9 container">
        <div className="row">
          <div className="col-md-12">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <LeftPanel />
          </div>
          <div className="col-md-8 container">
            <Main/>
          </div>
        </div>
      </div>
      <div className="col-md-3 px-0">
        <RightPanel />
      </div>
    </div>
  </div>
</Fragment>

export default Application;
