import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import BusinessIcon from "@material-ui/icons/Business";
import LanguageIcon from "@material-ui/icons/Language";
import RoomIcon from "@material-ui/icons/Room";
import InfoIcon from "@material-ui/icons/Info";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const company = [
  {
    vesselName: "PETROLEO BRASILEIRO S.A. - UO ES",
    vesselType: "Yacth",
    imoNo: "0161412",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "Brazil",
  },
  {
    vesselName: "3116 Ltd.",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "United Kingdom",
  },
  {
    vesselName: "A&L CF June(3) Limited ",
    vesselType: "Gas Carrier",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "Cayman Island",
  },
  {
    vesselName: "ABC Maritime AG",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "Greece",
  },
  {
    vesselName: "ABC-JIN CORP",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "Cayman Island",
  },
  {
    vesselName: "PETROLEO BRASILEIRO S.A. - UO ES",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "Greece",
  },
  {
    vesselName: "ABC-JIN CORP",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "United Kingdom",
  },
  {
    vesselName: "ABC Maritime AG",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "Cayman Island",
  },
  {
    vesselName: "A&L CF June(3) Limited",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    country: "Brazil",
  },
];

function CompanyQuickInfo() {
  const [companyList, setCompanyList] = useState(company);
  return (
    <div className="content">
      <div className="card-list">
        {companyList.map((res) => (
          <Card>
            <CardBody>
              <div>
                <LanguageIcon
                  className="nc-icon nc-globe text-warning"
                  style={{
                    fontSize: "40px",
                    float: "right",
                  }}
                ></LanguageIcon>

                <h6>{res.vesselName}</h6>
                <h6 style={{ color: "gray" }}>
                  IMO #{res.imoNo} /
                  <span>
                    <RoomIcon
                      className="nc-icon nc-globe text-danger"
                      style={{
                        fontSize: "15px",
                        marginTop: "-3px",
                      }}
                    ></RoomIcon>{" "}
                    {res.country}
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

export default CompanyQuickInfo;
