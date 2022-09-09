import React from "react";
// import "../vessel_info/VesselOverviewPopover.css";

function VesselOverviewPopover(props) {
  return (
    <div>
      <div  className="textmoreResolution">
        <span className="circle text-success"></span> IMO NUMBER :{" "}
        <span className="overviewValues">{props.imoNo}</span>
        <br />
        <span className="circle text-info"></span> OFFICIAL NUMBER :{" "}
        <span className="overviewValues">{props.imoNo}</span>
        <br />
        <span className="circle text-warning"></span> VESSEL TYPE :{" "}
        <span className="overviewValues">{props.vesselType}</span>
        <br />
      </div>
    </div>
  );
}

export default VesselOverviewPopover;
