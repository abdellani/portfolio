import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from "react-transition-group";

class YourTeam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: [false, false]
    }
  }
  componentDidMount() {
    let i = 0;
    let inter = setInterval(() => {
      let array = []
      for (let j = 0; j < 2; j++) {
        array.push(i >= j)
      }
      this.setState({ mounted: array })
      i++;
      if (i === 2) {
        clearInterval(inter)
      }
    }, 400);
  }

  render() {
    let { mounted } = this.state
    return (
      <div className="your-team">
        <div className="title">
          Your team
        </div>
        <div className="card-container">
          <CSSTransition
            in={mounted[0]}
            timeout={1000}
            classNames="panel-animation"
            unmountOnExit
          >
            <div className="card">
              <div className="icon">
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
              <div className="action">
                Join
            </div>
              <div className="description">
                Join to another team to get some fun
            </div>
              <div className="footer">
                <span className="important">78 teams</span> are waiting
            </div>
            </div>
          </CSSTransition>
          <CSSTransition
            in={mounted[1]}
            timeout={1000}
            classNames="panel-animation"
            unmountOnExit
          >
            <div className="card">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="action">
                Create new
            </div>
              <div className="description">
                Invite your friends or wait for any other players
            </div>
              <div className="footer">
                <span className="important">316 players</span> are near you
            </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    )
  }
}
export default YourTeam;