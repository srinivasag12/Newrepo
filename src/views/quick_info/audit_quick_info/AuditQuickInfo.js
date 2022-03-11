import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import LanguageIcon from "@material-ui/icons/Language";
import RoomIcon from "@material-ui/icons/Room";
import InfoIcon from "@material-ui/icons/Info";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import AssignmentIcon from "@material-ui/icons/Assignment";
import StorageIcon from "@material-ui/icons/Storage";

const audits = [
  {
    auditorName: "John Oliver",
    auditorReportNo: "823440-ML-297E-20",
    auditType: "ISM",
    auditLocation: "Melbourne, Australia",
    vessel: "AEOLIAN BREEZE",
  },
  {
    auditorName: "Peter",
    auditorReportNo: "823440-ML-297E-20",
    auditType: "ISPS",
    auditLocation: "Melbourne, Australia",
    vessel: "FEDERAL ASAHI",
  },
  {
    auditorName: "Robert",
    auditorReportNo: "823440-ML-297E-20",
    auditType: "MLC",
    auditLocation: "Melbourne, Australia",
    vessel: "AGIA EIRINI FORCE",
  },
  {
    auditorName: "Michael",
    auditorReportNo: "823440-ML-297E-20",
    auditType: "SSP",
    auditLocation: "Melbourne, Australia",
    vessel: "SINGAPORE SPIRIT",
  },
  {
    auditorName: "William",
    auditorReportNo: "823440-ML-297E-20",
    auditType: "DMLC",
    auditLocation: "Melbourne, Australia",
    vessel: "BLUE EVERTON",
  },
  {
    auditorName: "Andrew",
    auditorReportNo: "823440-ML-297E-20",
    auditType: "ISM",
    auditLocation: "Melbourne, Australia",
    vessel: "INDUSTRIAL CRESCENT",
  },
  {
    auditorName: "Christopher",
    auditorReportNo: "823440-ML-297E-20",
    auditType: "ISM",
    auditLocation: "Melbourne, Australia",
    vessel: "ADVANTAGE SKY",
  },
  {
    auditorName: "Matthew",
    auditorReportNo: "823440-ML-297E-20",
    auditType: "ISPS",
    auditLocation: "Melbourne, Australia",
    vessel: "ADVANTAGE PRIDE",
  },
];

function AuditQuickInfo() {
  const [auditList, setAuditList] = useState(audits);
  return (
    <div className="content">
      <div className="card-list">
        {auditList.map((res) => (
          <Card>
            <CardBody>
              <div>
                <DirectionsBoatIcon
                  className="nc-icon nc-globe text-warning"
                  style={{
                    fontSize: "30px",
                    float: "left",
                  }}
                ></DirectionsBoatIcon>

                <h6 style={{ color: "gray", float: "left", marginLeft: "5px" }}>
                  {res.vessel}
                </h6>
                {/* <h6 style={{ color: "gray" }}>
                  {res.auditType} /
                  <span>
                    <RoomIcon
                      className="nc-icon nc-globe text-danger"
                      style={{
                        fontSize: "15px",
                        marginTop: "-3px",
                      }}
                    ></RoomIcon>{" "}
                    {res.auditLocation}
                  </span>{" "}
                </h6> */}
              </div>
              <div className="horizontalBreak">
                <hr></hr>
              </div>
              <div>
                <AssignmentIcon
                  className="nc-icon nc-globe text-warning"
                  style={{
                    fontSize: "40px",
                    float: "right",
                  }}
                ></AssignmentIcon>

                <h6>{res.auditorReportNo}</h6>
                <h6 style={{ color: "gray" }}>
                  {res.auditType} /
                  <span>
                    <RoomIcon
                      className="nc-icon nc-globe text-danger"
                      style={{
                        fontSize: "15px",
                        marginTop: "-3px",
                      }}
                    ></RoomIcon>{" "}
                    {res.auditLocation}
                  </span>{" "}
                </h6>
              </div>
              <div className="horizontalBreak">
                <hr></hr>
              </div>
              <div
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: 500,
                }}
              >
                <div>
                  <span>
                    {" "}
                    <InfoIcon
                      className="nc-icon nc-globe text-info"
                      style={{
                        fontSize: "20px",
                        marginTop: "-3px",
                      }}
                    ></InfoIcon>{" "}
                    More Info{" "}
                    <DoubleArrowIcon
                      className="nc-icon nc-globe text-info"
                      style={{
                        fontSize: "20px",
                        marginTop: "-3px",
                      }}
                    ></DoubleArrowIcon>
                  </span>

                  {/* <Popover
                  content={
                    <VesselOverviewPopover
                      vesselName={res.vesselName}
                      vesselType={res.vesselType}
                      imoNo={res.imoNo}
                    />
                  }
                  title={res.vesselName}
                >
                  <DirectionsBoatIcon style={{ color: "grey" }} />{" "} */}
                  {/* <span> VESSEL INFO</span> */}
                  {/* </Popover> */}
                </div>

                {/* <div className="vl"></div> */}

                {/* <div className="cardBottomContent"> */}
                {/* <Popover
                  content={
                    <AuditOverviewPopover
                      surveyOverDue={res.surveyOverDue}
                      surveyDue={res.surveyDue}
                      findingsDue={res.findingsDue}
                      findingsOverDue={res.findingsOverDue}
                      expiringCertificates={res.expiringCertificates}
                    />
                  }
                  title={res.vesselName}
                >
                  <AssignmentIcon style={{ color: "grey" }} />{" "} */}
                {/* <span> AUDIT INFO</span> */}
                {/* </Popover> */}
                {/* </div> */}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AuditQuickInfo;
