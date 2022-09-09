import React, { useState, useEffect } from "react";
import "./BookAnAudit.css";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

const BookAnAudit = (props) => {
  const [eneteredVesselName, setEneteredVesselName] = useState("");
  const [eneteredVesselImo, setEneteredVesselImo] = useState("");
  const [eneteredOfficeNo, setEneteredOfficeNo] = useState("");
  const [eneteredVesselType, setEneteredVesselType] = useState("");
  const [eneteredLocation, setEneteredLocation] = useState("");
  const [eneteredETA, setEneteredETA] = useState("");
  const [eneteredEID, setEneteredEID] = useState("");
  const [eneteredPortAgentName, setEneteredPortAgentName] = useState("");
  const [eneteredPortAgentEmail, setEneteredPortAgentEmail] = useState("");
  const [enteredPortAgentPhone, setEneteredPortAgentPhone] = useState("");
  const [eneteredAuditType, setEneteredAuditType] = useState("");
  const [eneteredAuditSubType, setEneteredAuditSubType] = useState("");
  const [eneteredCertificateExpiryDate, setEneteredPortCertificateExpiryDate] =
    useState("");
  const [eneteredPICName, setEneteredPICName] = useState("");
  const [eneteredPICEmail, setEneteredPICEmail] = useState("");
  const [eneteredPICPhone, setEneteredPICPhone] = useState("");

  useEffect(() => {
    console.log("useEffect", props);
  }, []);

  const vesselNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredVesselName(event.target.value);
  };

  const vesselImoChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredVesselImo(event.target.value);
  };

  const officeNoChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredOfficeNo(event.target.value);
  };

  const vesselTypeChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredVesselType(event.target.value);
  };

  const locationChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredLocation(event.target.value);
  };

  const etaChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredETA(event.target.value);
  };

  const eidChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredEID(event.target.value);
  };

  const portAgentNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredPortAgentName(event.target.value);
  };

  const portAgentEmailChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredPortAgentEmail(event.target.value);
  };

  const portAgentPhoneChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredPortAgentPhone(event.target.value.replace(/\+|-/gi, ""));
  };
  const auditTypeChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredAuditType(event.target.value);
  };
  const auditSubTypeChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredAuditSubType(event.target.value);
  };
  const certificateExpiryDateChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredPortCertificateExpiryDate(event.target.value);
  };
  const pICNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredPICName(event.target.value);
  };
  const pICEmailChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredPICEmail(event.target.value);
  };
  const pICPhoneChangeHandler = (event) => {
    console.log(event.target.value);
    setEneteredPICPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      vesselName: eneteredVesselName,
      vesselImo: eneteredVesselImo,
      officeNo: eneteredOfficeNo,
      vesselType: eneteredVesselType,
      location: eneteredLocation,
      eta: new Date(eneteredETA),
      eid: new Date(eneteredEID),
      portAgentName: eneteredPortAgentName,
      portAgentEmail: eneteredPortAgentEmail,
      portAgentPhone: enteredPortAgentPhone,
      auditType: eneteredAuditType,
      auditSubType: eneteredAuditSubType,
      certificateExpiryDate: new Date(eneteredCertificateExpiryDate),
      pICName: eneteredPICName,
      pICEmail: eneteredPICEmail,
      pICPhone: eneteredPICPhone,
    };

    console.log("Submitted Data ", expenseData);
    setEneteredVesselName("");
    setEneteredVesselImo("");
    setEneteredOfficeNo("");
    setEneteredVesselType("");
    setEneteredLocation("");
    setEneteredETA("");
    setEneteredEID("");
    setEneteredPortAgentName("");
    setEneteredPortAgentEmail("");
    setEneteredPortAgentPhone("");
    setEneteredPICPhone("");
    setEneteredPICEmail("");
    setEneteredPICName("");
    setEneteredPortCertificateExpiryDate("");
    setEneteredAuditSubType("");
    setEneteredAuditType("");
  };
  return (
    <div className="content">
      {/* {this.state.alert} */}

      {/* {props.location.state === "dtls" ? "true" : "false"} */}
      <Row>
        <Col className="ml-auto mr-auto" md="12">
          <div className="bookauditcard">
            <Card className="card-calendar">
              <div className="bookauditheader">
                <CardHeader className="bookauditheader">
                  <h4 className="cardTitleWhite">BOOK AN AUDIT</h4>
                  {/* <p class ="cardCategoryWhite">Complete your profile</p> */}
                </CardHeader>
              </div>
              <CardBody>
                <form className="bookaudittable" onSubmit={submitHandler}>
                  <div className="new-expense__controls">
                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Vessel Name</label>
                        {localStorage.getItem("role") == "owner1" ?
                        <select
                          className="form-control"
                          onChange={vesselNameChangeHandler}
                          value={
                            props.location.state === "dtls"
                              ? "DEEPWATER PROTEUS"
                              : eneteredVesselName
                          }
                        >
                          <option value="" disabled selected hidden>
                            Select Your Vessel
                          </option>
                          <option value="adventurer">DEEPWATER PROTEUS</option>
                          <option value="DEEPWATER PROTEUS">DEEPWATER POSEIDON</option>
                          <option value="advantagesummer">
                          DHIRUBHAI DEEPWATER KG2
                          </option>
                          <option value="advantage">DEEPWATER PONTUS</option>
                        </select>
                        :
                        <select
                          className="form-control"
                          onChange={vesselNameChangeHandler}
                          value={
                            props.location.state === "dtls"
                              ? "GH CITATION"
                              : eneteredVesselName
                          }
                        >
                          <option value="" disabled selected hidden>
                            Select Your Vessel
                          </option>
                          <option value="adventurer">FEDERAL TAMBO</option>
                          <option value="GH CITATION">BALTIC LEOPARD</option>
                          <option value="advantagesummer">
                          NAVIGARE BACCA
                          </option>
                          <option value="advantage">SEAMAX FAIRFIELD</option>
                        </select>}
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Vessel Imo</label>
                        <input
                          className="form-control"
                          type="number"
                          min="0.01"
                          step="0.01"
                          onChange={vesselImoChangeHandler}
                          value={
                            props.location.state === "dtls"
                              ? "9722041"
                              : eneteredVesselImo
                          }
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Office No.</label>
                        <input
                          className="form-control"
                          type="number"
                          min="0.01"
                          step="0.01"
                          onChange={officeNoChangeHandler}
                          value={
                            props.location.state === "dtls"
                              ? "7195"
                              : eneteredOfficeNo
                          }
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Vessel Type</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={vesselTypeChangeHandler}
                          value={
                            props.location.state === "dtls"
                              ? "Bulk carrier"
                              : eneteredVesselType
                          }
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Location</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={locationChangeHandler}
                          value={eneteredLocation}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>ETA</label>
                        <input
                          className="form-control"
                          type="date"
                          min="2019-01-01"
                          max="2022-12-31"
                          onChange={etaChangeHandler}
                          value={eneteredETA}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>EID</label>
                        <input
                          className="form-control"
                          type="date"
                          min="2019-01-01"
                          max="2022-12-31"
                          onChange={eidChangeHandler}
                          value={eneteredEID}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>
                          Port Agent Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={portAgentNameChangeHandler}
                          value={eneteredPortAgentName}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>
                          Port Agent Email
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={portAgentEmailChangeHandler}
                          value={eneteredPortAgentEmail}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>
                          Port Agent Phone
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          maxlength="10"
                          onChange={portAgentPhoneChangeHandler}
                          value={enteredPortAgentPhone}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Audit Type</label>
                        <select
                          className="form-control"
                          onChange={auditTypeChangeHandler}
                          value={eneteredAuditType}
                        >
                          <option value="" disabled selected hidden>
                            Select Your Option
                          </option>
                          <option value="adventurer">ISM</option>
                          <option value="advantagesummer">ISPS</option>
                          <option value="advantage">MLC</option>
                        </select>
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Audit Sub Type</label>
                        <select
                          className="form-control"
                          onChange={auditSubTypeChangeHandler}
                          value={eneteredAuditSubType}
                        >
                          <option value="" disabled selected hidden>
                            Select Your Option
                          </option>
                          <option value="adventurer">INITIAL</option>
                          <option value="advantagesummer">INTERIM</option>
                          <option value="advantage">INTERMEDIATE</option>
                          <option value="advantagesummer">RENEWAL</option>
                          <option value="advantage">ADDITIONAL</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>
                          Certificate Expiry Date
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          min="2019-01-01"
                          max="2022-12-31"
                          onChange={certificateExpiryDateChangeHandler}
                          value={eneteredCertificateExpiryDate}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>PIC Name</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={pICNameChangeHandler}
                          value={eneteredPICName}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>PIC Email</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={pICEmailChangeHandler}
                          value={eneteredPICEmail}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>PIC Phone</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={pICPhoneChangeHandler}
                          value={eneteredPICPhone}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Book An Audit
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BookAnAudit;
