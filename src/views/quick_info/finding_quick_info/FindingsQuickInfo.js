import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import RoomIcon from "@material-ui/icons/Room";
import InfoIcon from "@material-ui/icons/Info";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssessmentIcon from "@material-ui/icons/Assessment";

const findings = [
  {
    type: "ISM",
    subType: "INITIAL",
    findingCategory: "MNC",
    findingStatus: "PLAN ACCEPTED",
    findingsDate: "19-MAY-2020",
    nextAction: "",
    dueDate: "",
    code: "10.2",
    element: "Finding Code Description ",
    status: "OPEN",
  },
  {
    type: "ISM",
    subType: "INTERIM",
    findingCategory: "NC",
    findingStatus: "VERIFIED / CLOSED",
    findingsDate: "20-JULY-2019",
    nextAction: "",
    dueDate: "",
    code: "12.5",
    element: "Finding Code Description ",
    status: "CLOSE",
  },
  {
    type: "ISPS",
    subType: "INITIAL",
    findingCategory: "MNC",
    findingStatus: "OPEN",
    findingsDate: "21-AUGUST-2020",
    nextAction: "",
    dueDate: "",
    code: "11.8",
    element: "Finding Code Description",
    status: "OPEN",
  },
  {
    type: "ISPS",
    subType: "INITIAL",
    findingCategory: "OBS",
    findingStatus: "VERIFY / CLOSE",
    findingsDate: "15-MARCH-2020",
    nextAction: "",
    dueDate: "",
    code: "13.5",
    element: "Finding Code Description",
    status: "CLOSE",
  },
];

function FindingsQuickInfo() {
  const [findingsList, setFindingsList] = useState(findings);
  return (
    <div className="content">
      <div className="card-list">
        {findingsList.map((res) => (
          <Card>
            <CardBody>
              <div>
                <AssessmentIcon
                  className="nc-icon nc-globe text-warning"
                  style={{
                    fontSize: "40px",
                    float: "right",
                  }}
                ></AssessmentIcon>

                <h6>
                  {res.code} - {res.element}{" "}
                </h6>
                <h6 style={{ color: "gray" }}>
                  {res.type} / <span> {res.subType}</span> /{" "}
                  <span> {res.findingCategory}</span>
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

export default FindingsQuickInfo;
