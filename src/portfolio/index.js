import React from "react"
import Typist from 'react-typist';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import "./scss/index.scss"
import FirstPage from "./components/first"
import SecondPage from "./components/second"
import ThirdPage from "./components/third"
// import FourthPage from "./components/fourth"

const Application = () =>
  <div className="wrapper">
    <AwesomeSlider
    >
      <div className="content first-page">
        <FirstPage />
      </div>
      <div className="content">
        <SecondPage />
      </div>
      <div className="content">
        <ThirdPage />
      </div>
      {/* 
    <FourthPage /> */}
    </AwesomeSlider>
  </div>
export default Application;
