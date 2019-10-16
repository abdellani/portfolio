import React from 'react';
import YourTeam from "./component/yourTeam";
import SidePanel from "./component/sidePanel";
import GameType from './component/gameType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import avatar from "./images/avatar.jpg";
import { CSSTransition } from "react-transition-group";
import "./scss/index.scss"
class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "up to 500m near you",
      gameType: null,
      yourTeam: null,
      payement: null,
      reputation: 4.8,
      name: "Johny D."
    }
  }
  updateGameType(gameType) {
    this.setState({
      gameType
    })
  }
  render() {
    let { name, reputation, gameType } = this.state
    let timeout = 0;
    return (
      <div className="application">

        <SidePanel  resetGameType={()=> this.updateGameType(null)}{...this.state} />
        <div className="main">
          <div className="profile">
            Reputation
            <span className="space"></span>
            <span className="bold">{reputation}</span>
            <span className="space"></span>
            <span className="star">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="space"></span>
            .
            <span className="space"></span>
            {name}
            <span className="space"></span>
            <img src={avatar} />
          </div>
          <CSSTransition
            in={gameType === null}
            timeout={0}
            classNames=""
            unmountOnExit
          >
            <GameType clickHandler={(gameType) => this.updateGameType(gameType)} />
          </CSSTransition>
          <CSSTransition
            in={gameType !== null}
            timeout={timeout}
            classNames=""
            unmountOnExit
          >
            <YourTeam />
          </CSSTransition>
        </div>
      </div>
    )
  }
}
export default Application;
