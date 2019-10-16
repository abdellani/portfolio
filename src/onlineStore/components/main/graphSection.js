import React from "react"
import Chart from 'react-apexcharts'
import data from "../../data/data"
import profile from "../../images/profile1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const graphSection = () =>
  <div className="row my-3 shadow ">
    <div className="graph-zone col-md-8 p-3">
      <div>
        Revenue
        </div>
      <div className="chart">
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          width="100%"
        />
      </div>
    </div>
    <div className="graph-details p-0 col-md-4 d-flex flex-column  justify-content-between ">
      <div className="p-2">
        <div className="d-flex justify-content-between ">
          <div className="date">June 6</div> <div>:</div>
        </div>
        <div className="value">
          $23.342
          </div>
      </div>
      <div className="profile ml-4 p-3 my-3">
        <div className="d-flex justify-content-between align-items-center ">
          <div>
            <img className="profile-img" src={profile} alt="profile"/>
          </div>
          <div>
            Tim Snider
            </div>
          <div>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </div>
        <div className="d-flex justify-content-between  py-3 border-bottom border-secondary">
          <div>
            <div>
              $1230.400
              </div>
            <div className="text-secondary">
              Revenue
              </div>
          </div>
          <div className="text-success">
            +11%
            </div>
        </div>
        <div className="d-flex justify-content-between  py-3">
          <div>
            <div>
              14
              </div>
            <div className="text-secondary">
              Processed applications
              </div>
          </div>
          <div className="text-danger">
            -14%
            </div>
        </div>

      </div>
      <div className="d-flex justify-content-between align-items-center pl-2 ">
        <div className="date">June 5</div>
        <div className="next-botton py-2 px-4">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  </div>

export default graphSection