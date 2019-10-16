import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from "../../images/profile1.png"
import profile1 from "../../images/profile2.png"
import { faThLarge, faSearch, faPhoneAlt, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Row = ({ profile, name, order, date, sum, payment }) =>
  <div className="row order w-100 py-3 my-1  ">
    <div className="col-md-3">
      <img className="profile mr-3" src={profile} />
      {name}
    </div>
    <div className="col-md-2 d-flex justify-content-between align-items-center">
      {order}
    </div>
    <div className="col-md-2 d-flex justify-content-between align-items-center">
      {date}
    </div>
    <div className="col-md-2 d-flex justify-content-between align-items-center">
      {sum}
    </div>
    <div className="col-md-3 w-100 d-flex justify-content-between align-items-center">
      {payment}
      <div className="d-flex justify-content-between align-items-center">
        <div className="phone-icon">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <div className="d-flex px-2">
          :
        </div>
      </div>
    </div>
  </div>

const lastOrders=()=>
<div className="last-orders row p-4">
      <div className="w-100 d-flex justify-content-between">
        <div>Last orders <FontAwesomeIcon icon={faSearch} /></div>
        <div>:</div>
      </div>
      <div className="row w-100 py-3 text-secondary">
        <div className="col-md-3">
          Name
        </div>
        <div className="col-md-2">
          Order
        </div>
        <div className="col-md-2">
          Date
        </div>
        <div className="col-md-2">
          Sum
        </div>
        <div className="col-md-3">
          Payment method
        </div>
      </div>
      <Row
        profile={profile}
        name="Tommy hatcher"
        order="N°854323"
        date="jun 23. 2019"
        sum="$165.32"
        payment="PayPal"
      />
      <Row
        profile={profile1}
        name="Lisa Ashton"
        order="N°854324"
        date="jun 24. 2019"
        sum="$332.45"
        payment="VISA"
      />
      <Row
        profile={profile}
        name="Bob Morrison"
        order="N°854325"
        date="jun 25. 2019"
        sum="$165.90"
        payment="PayPal"
      />
    </div>
 
 export default lastOrders