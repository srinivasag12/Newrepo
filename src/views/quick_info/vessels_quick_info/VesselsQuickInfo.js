import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import "./VesselsQuickInfo.css";
import LanguageIcon from "@material-ui/icons/Language";
import RoomIcon from "@material-ui/icons/Room";
import InfoIcon from "@material-ui/icons/Info";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import StorageIcon from "@material-ui/icons/Storage";

const vessel = [
  {
    vesselName: "AEOLIAN BREEZE",
    vesselType: "BULK CARRIER",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "FEDERAL ASAHI",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "AGIA EIRINI FORCE",
    vesselType: "Gas Carrier",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "SINGAPORE SPIRIT",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "BLUE EVERTON",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "INDUSTRIAL CRESCENT	",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "ADVANTAGE SKY",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "ADVANTAGE PRIDE",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "BALTIMORE STAR",
    vesselType: "CONTAINER",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
];

function VesselsQuickInfo() {
  const [vesselList, setVesselList] = useState(vessel);
  return (
    <div className="content">
      <div className="card-list">
        {vesselList.map((res) => (
          <Card>
            <CardBody>
              <div>
                <DirectionsBoatIcon
                  className="nc-icon nc-globe text-warning"
                  style={{
                    fontSize: "40px",
                    float: "right",
                  }}
                ></DirectionsBoatIcon>

                <h6>{res.vesselName}</h6>
                <h6 style={{ color: "gray" }}>
                  IMO #{res.imoNo} /
                  <span>
                    <StorageIcon
                      className="nc-icon nc-globe text-danger"
                      style={{
                        fontSize: "15px",
                        marginTop: "-3px",
                      }}
                    ></StorageIcon>

                    <span> {res.vesselType}</span>
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

export default VesselsQuickInfo;
