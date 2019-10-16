import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import soccer from "../images/soccer.png"
import hockey from "../images/hockey.png"
import rugby from "../images/rugby.png"
import athletics from "../images/athletics.png"
import fencing from "../images/fencing.png"
import americanFootball from "../images/americanFootball.png"
import tenis from "../images/tenis.jpg"
import basketball from "../images/basketball.jpg"
import { CSSTransition } from "react-transition-group";


class GameType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: [false, false, false, false, false, false]
    }
  }
  componentDidMount() {
    let i = 0;
    let inter = setInterval(() => {
      let array = []
      for (let j = 0; j < 6; j++) {
        array.push(i >= j)
      }
      this.setState({ mounted: array })
      i++;
      if (i === 6) {
        clearInterval(inter)
      }
    }, 400);
  }
  render(props) {
    let timeout = 1000;
    let { mounted } = this.state;
    let { clickHandler } = this.props
    return (
      <div className="game-type" >
        <div className="search">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input type="text" placeholder=" Find your sport" />
        </div>
        <div className="main-content">
          <div className="column">
            <CSSTransition
              in={mounted[0]}
              timeout={timeout}
              classNames="panel-animation"
              style={{
                backgroundImage: `url(${tenis})`,
                backgroundSize: "250px 250px"
              }}
              onClick={() => clickHandler("Tenis")}
              unmountOnExit
            >
              <div className="sport-image-panel" >
                Tenis
                <br />
                <span className="small">
                  98 teams <span className="white-transparent">are waiting </span>
                </span>
              </div>
            </CSSTransition>
            <CSSTransition
              in={mounted[2]}
              timeout={timeout}
              classNames="panel-animation"
              unmountOnExit
            >
              <div className="two-sports-panel">
                <div onClick={() => clickHandler("Hockey")}>
                  <img src={hockey} />
                </div>
                <div onClick={() => clickHandler("Rugby")} >
                  <img src={rugby} />
                </div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={mounted[4]}
              timeout={timeout}
              classNames="panel-animation"
              unmountOnExit
            >
              <div onClick={() => clickHandler("Athletics")} className="one-sport-panel">
                <div className="icon">
                  <img src={athletics} />
                </div>
                <div className="text text-violet">
                  <span className=" bold">Athletics</span>
                  <br />
                  <span className="small">
                    12 teams
              </span>
                </div>
              </div>
            </CSSTransition>
          </div>
          <div className="column">
            <CSSTransition
              in={mounted[1]}
              timeout={timeout}
              classNames="panel-animation"
              unmountOnExit
            >
              <div className="one-sport-panel" onClick={() => clickHandler("Soccer")}>
                <div className="icon">
                  <img src={soccer} />
                </div>
                <div className="text text-violet">
                  <span className=" bold">Soccer</span>
                  <br />
                  <span className="small">
                    24 teams
              </span>
                </div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={mounted[3]}
              timeout={timeout}
              classNames="panel-animation"
              style={{
                backgroundImage: `url(${basketball})`,
                backgroundSize: "250px 250px"
              }}
              unmountOnExit
            >
              <div className="sport-image-panel" onClick={() => clickHandler("Basketball")}>
                Basketball
            <br />
                <span className="small">
                  58 teams <span className="white-transparent">are waiting </span>
                </span>
              </div>
            </CSSTransition>
            <CSSTransition
              in={mounted[5]}
              timeout={timeout}
              classNames="panel-animation"
              unmountOnExit
            >
              <div className="two-sports-panel">
                <div  onClick={() => clickHandler("Fencing")}>
                  <img src={fencing} />
                </div>
                <div onClick={() => clickHandler("American football")}>
                  <img src={americanFootball} />
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>)
  }
}
export default GameType;