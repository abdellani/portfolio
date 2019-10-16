import React from "react"
import profile from "../images/profile1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faChevronDown,faChevronRight,faLock } from '@fortawesome/free-solid-svg-icons'
const Order =({price,brand})=>
        <div className="order d-flex bg-dark-l1 align-items-center p-2 my-2">
          <div className="icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div  className=" p-2 w-100">
            <div className="font-weight-bold text-white">
              {price}
            </div>
            <div className="text-secondary">
            {brand}
            </div>
          </div>
          <div className="px-4">
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>

const rightPanel = () =>
  <div
    className={[
      "right-panel", "col-md-3", "d-flex",
      "flex-column", "p-0", "justify-content-between"
    ].join(" ")
    }>
    <div className={[
      "py-3", "border-bottom", "border-secondary", "text-secondary",
      "d-flex","px-5","justify-content-between","align-items-center"
    ].join(" ")
    }>
      <div>
        Account
      </div>
      <div>
        Order History
      </div>
      <div 
      className={[
        "border","border-secondary","other-options"
      ].join(" ")}
      >
        +4
      </div>

    </div>
    <div
      className={[
        "d-flex", "flex-column", "align-items-end","ml-4"
      ].join(" ")}
    >
      <div className={"profile-container w-100  bg-dark-l1 py-4 my-3"}>
        <div className={"d-flex align-items-center border-bottom border-secondary pb-3 "}>
          <div className="px-3">
            <img className="profile" alt="profile" src={profile} />
          </div>
          <div className="d-flex flex-column">
            <div>
              Tim Harrison
            </div>
            <div className="text-secondary">
              Chickago, II
            </div>
          </div>
          <div className="ml-3 mr-4 phone-icon d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
        </div>
        <div className="spend d-flex flex-column pt-2 px-4 ">
          <div className="d-flex justify-content-between align-items-center">
            Spend in total :
          <span className="h3">:</span>
          </div>
          <div className="h2">
            $ 15,342 <span className="chevron"><FontAwesomeIcon icon={faChevronDown} /></span>
          </div>
        </div>
      </div>
      <div className="last-orders w-100 pt-2 my-2">
        <div className="d-flex justify-content-between">
          <div>
            Last orders
          </div>
          <div className="text-secondary pr-3">
            view all
          </div>
        </div>
        <Order price="$165.32" brand="Nike Air Max"/>
        <Order price="$290.60" brand="Purse"/>
        <Order price="$830.00" brand="Jacket Loui Vuitton"/>
        <Order price="$90.10" brand="New Balance 574"/>
      </div>

    </div>
    <div className={[
      "d-flex", "justify-content-center", "font-weight-bold",
      "py-3", "border-top", "border-secondary", "text-secondary"
    ].join(" ")
    }>
      Edit
  </div>
  </div>

export default rightPanel;