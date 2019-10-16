import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

const Row = ({ profile, name, order, date, sum, payment }) =>
  <div className="row order w-100 py-3 my-1  ">
    <div className="col-md-3">
      <img className="profile mr-3" alt="profile" src={profile} />
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

export default Row;