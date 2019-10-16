import React from "react"
const revenueSummary=()=>
<div className="my-4 row justify-content-between">
      <div className="col-md-4 revenue d-flex justify-content-between align-items-center p-2 px-4">
        <div>
          <div className="value">$1032.43</div>
          <div className="description text-secondary">Daily revenue</div>
        </div>
        <div className="augmentation">
          +11%
          </div>
      </div>
      <div className="col-md-4 revenue d-flex justify-content-between align-items-center p-2 px-4">
        <div>
          <div className="value">$12230.400</div>
          <div className="description text-secondary">Total revenue</div>
        </div>
        <div className="augmentation">
          +22%
          </div>
      </div>
      <div className="col-md-3 revenue d-flex justify-content-between align-items-center p-2 px-4">
        <div>
          <div className="value">732</div>
          <div className="description text-secondary">Total customers</div>
        </div>
      </div>
    </div>

export default revenueSummary;