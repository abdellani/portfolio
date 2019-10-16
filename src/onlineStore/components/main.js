import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge} from '@fortawesome/free-solid-svg-icons'
import LastOrders from "./main/lastOrders.js"
import GraphSection from "./main/graphSection.js"
import RevenueSummary from "./main/revenueSummary"
const main = () =>
  <div className="main col-md-7 py-4 ">
    <div className="d-flex justify-content-between">
      <div>
        Dashboard
      </div>
      <div>
        <FontAwesomeIcon icon={faThLarge} />
      </div>
    </div>
    <RevenueSummary/>
    <GraphSection/>
    <LastOrders/>
  </div>

export default main