import React from "react";
// import "../vessel_info/AuditOverviewPopover.css";
import { useHistory } from "react-router-dom";

function AuditOverviewPopover(props) {
  const history = useHistory();
  return (
    <div>
      <div  className="textmoreResolution">
        <span className="circle text-success"></span>
        <span onClick={() => history.push("/admin/audit")}>
          {" "}
          AUDIT OVERDUE :
        </span>
        <span
          className="overviewValues"
          onClick={() => history.push("/admin/audit")}
        >
          {props.surveyOverDue}
        </span>
        <br />
        <span className="circle text-info"></span>
        <span onClick={() => history.push("/admin/audit")}> AUDIT DUE :</span>
        <span className="overviewValues">{props.surveyDue}</span>
        <br />
        <span className="circle text-success"></span>
        <span onClick={() => history.push("/admin/finding")}>
          {" "}
          FINDINGS OVERDUE :
        </span>
        <span className="overviewValues">{props.findingsOverDue}</span>
        <br />
        <span className="circle text-info"></span>
        <span onClick={() => history.push("/admin/finding")}>
          {" "}
          FINDINGS DUE :
        </span>
        <span className="overviewValues">{props.findingsDue}</span>
        <br />
        <span className="circle text-danger"></span>
        <span onClick={() => history.push("/admin/certificates")}>
          {" "}
          EXPIRING CERTIFICTES :
        </span>
        <span className="overviewValues">{props.expiringCertificates}</span>
      </div>
    </div>
  );
}

export default AuditOverviewPopover;
