import React from "react"
import Typist from 'react-typist';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import "./scss/index.scss"
import FirstPage from "./components/first"
import SecondPage from "./components/second"
import ThirdPage from "./components/third"
import FourthPage from "./components/fourth"

const Application = () =>
<div className="wrapper">
  <AwesomeSlider
  >
    <div className="content">
      <FirstPage />
    </div>
    <div className="content">
    <SecondPage />
    </div>
    <ThirdPage />
    <FourthPage />
  </AwesomeSlider>
</div>
export default Application;

// const navar = () =>
//   <nav>
//     <ul>
//       <li>
//         <Link to="/imdb" target="_blank" >imdb</Link>
//       </li>
//       <li>
//         <Link to="/online-store" target="_blank">online store</Link>
//       </li>
//       <li>
//         <Link to="/photography" target="_blank">photography</Link>
//       </li>
//     </ul>
//   </nav>