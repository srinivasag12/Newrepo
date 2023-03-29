import React, { useState, useEffect } from "react";
import "./BookAnAudit.css";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Notify from "react-notification-alert";
import { useRef } from "react";
import "react-notification-alert/dist/animate.css";

const userList = [
  {
    userName: "SANDEEP K",
    userId: 1,
    status: 1,
    statusDesc: "Available",
    roles: ["Auditor", "Inspector"],
  },
  {
    userName: "RUPESH K",
    userId: 2,
    status: 1,
    statusDesc: "Available",
    roles: ["Auditor", "Inspector"],
  },
  {
    userName: "Deepak",
    userId: 3,
    status: 0,
    statusDesc: "Not Available",
    roles: ["Auditor"],
  },
  {
    userName: "DWAYNE",
    userId: 125,
    status: 2,
    statusDesc: "On Leave",
    roles: ["Auditor", "Inspector"],
  },
  {
    userName: "MICHAEL",
    userId: 120,
    status: 2,
    statusDesc: "On Leave",
    roles: ["Auditor", "Inspector"],
  },
  {
    userName: "KIRAN",
    userId: 17,
    status: 1,
    statusDesc: "Available",
    roles: ["Inspector"],
  },
  {
    userName: "JOHN",
    userId: 12,
    status: 2,
    statusDesc: "On Leave",
    roles: ["Inspector"],
  },
  {
    userName: "TRAVIS",
    userId: 12,
    status: 0,
    statusDesc: "Not Available",
    roles: ["Inspector"],
  },
];

const notifySuccess = (notifyRef, message, duration = 2) => {
  notifyRef.current?.notificationAlert({
    place: "tr",
    message: message,
    type: "success",
    autoDismiss: duration,
  });
};

const notifyError = (notifyRef, error, duration = 2) => {
  notifyRef.current?.notificationAlert({
    place: "tr",
    message: error,
    type: "danger",
    autoDismiss: duration,
    icon: "now-ui-icons ui-1_simple-remove",
  });
};

const BookAnAudit = (props) => {
  const [enteredVesselName, setEnteredVesselName] = useState("");
  const [enteredVesselImo, setEnteredVesselImo] = useState("");
  const [enteredOfficeNo, setEnteredOfficeNo] = useState("");
  const [enteredVesselType, setEnteredVesselType] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredETA, setEnteredETA] = useState("");
  const [enteredETD, setEnteredETD] = useState("");
  const [enteredPortAgentName, setEnteredPortAgentName] = useState("");
  const [enteredPortAgentEmail, setEnteredPortAgentEmail] = useState("");
  const [enteredPortAgentPhone, setEnteredPortAgentPhone] = useState("");
  const [enteredAuditType, setEnteredAuditType] = useState("");
  const [enteredAuditSubType, setEnteredAuditSubType] = useState("");
  const [enteredCertificateExpiryDate, setEnteredPortCertificateExpiryDate] =
    useState("");
  const [enteredPICName, setEnteredPICName] = useState("");
  const [enteredPICEmail, setEnteredPICEmail] = useState("");
  const [enteredPICPhone, setEnteredPICPhone] = useState("");

  const [audInspType, setAudInspType] = useState("");
  const [inspectionType, setInspectionType] = useState("");
  const [audOrInsp, setAudOrInsp] = useState("");

  const notifyRef = useRef();
  const userType =
    audInspType === ""
      ? "User"
      : audInspType === "MSC"
      ? "Auditor"
      : "Inspector";

  useEffect(() => {
    console.log("useEffect", props);
  }, []);

  const vesselNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredVesselName(event.target.value);
  };

  const vesselImoChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredVesselImo(event.target.value);
  };

  const officeNoChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredOfficeNo(event.target.value);
  };

  const vesselTypeChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredVesselType(event.target.value);
  };

  const locationChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredLocation(event.target.value);
  };

  const etaChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredETA(event.target.value);
  };

  const etdChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredETD(event.target.value);
  };

  const portAgentNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPortAgentName(event.target.value);
  };

  const portAgentEmailChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPortAgentEmail(event.target.value);
  };

  const portAgentPhoneChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPortAgentPhone(event.target.value.replace(/\+|-/gi, ""));
  };
  const auditTypeChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAuditType(event.target.value);
  };
  const auditSubTypeChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAuditSubType(event.target.value);
  };
  const certificateExpiryDateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPortCertificateExpiryDate(event.target.value);
  };
  const pICNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPICName(event.target.value);
  };
  const pICEmailChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPICEmail(event.target.value);
  };
  const pICPhoneChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPICPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let error = false;
    const expenseData = {
      vesselName: enteredVesselName,
      vesselImo: enteredVesselImo,
      officeNo: enteredOfficeNo,
      vesselType: enteredVesselType,
      location: enteredLocation,
      eta: new Date(enteredETA),
      eid: new Date(enteredETD),
      portAgentName: enteredPortAgentName,
      portAgentEmail: enteredPortAgentEmail,
      portAgentPhone: enteredPortAgentPhone,
      auditType: enteredAuditType,
      auditSubType: enteredAuditSubType,
      certificateExpiryDate: new Date(enteredCertificateExpiryDate),
      pICName: enteredPICName,
      pICEmail: enteredPICEmail,
      pICPhone: enteredPICPhone,
    };

    console.log("Submitted Data ", expenseData);

    if (enteredVesselName === "") {
      return notifyError(notifyRef, "Please select a Vessel");
    }
    if (enteredVesselImo === "") {
      return notifyError(notifyRef, "Please enter the Vessel Imo number");
    }
    if (enteredOfficeNo === "") {
      return notifyError(notifyRef, "Please enter the Office number");
    }
    if (enteredVesselType === "") {
      return notifyError(notifyRef, "Please enter the Vessel type");
    }
    if (enteredLocation === "") {
      return notifyError(notifyRef, "Please enter the Location");
    }
    if (enteredETA === "") {
      return notifyError(notifyRef, "Please set the ETA");
    }
    if (enteredETD === "") {
      return notifyError(notifyRef, "Please set the EID");
    }
    if (enteredPortAgentName === "") {
      return notifyError(notifyRef, "Please enter the Port Agent Name!");
    }
    if (enteredPortAgentEmail === "") {
      return notifyError(notifyRef, "Please enter the Port Agent Email!");
    }
    if (enteredPortAgentPhone === "") {
      return notifyError(notifyRef, "Please enter the Port Agent Phone!");
    }
    if (enteredPICPhone === "") {
      return notifyError(notifyRef, "Please enter the PIC Phone!");
    }
    if (enteredPICEmail === "") {
      return notifyError(notifyRef, "Please enter the PIC Email!");
    }
    if (enteredPICName === "") {
      return notifyError(notifyRef, "Please enter the PIC Name!");
    }
    if (enteredCertificateExpiryDate === "") {
      return notifyError(notifyRef, "Please set the Certificate Expiry Date!");
    }
    if (audInspType === "") {
      return notifyError(notifyRef, "Please select Audit/ Inspection Type");
    }
    if (audOrInsp === "") {
      return notifyError(notifyRef, "Please select the " + userType);
    }
    if (audInspType === "MSC" && enteredAuditSubType === "") {
      return notifyError(notifyRef, "Please select Audit Type");
    }
    if (audInspType === "MSC" && enteredAuditType === "") {
      return notifyError(notifyRef, "Please select Audit Sub-Type");
    }

    setEnteredVesselName("");
    setEnteredVesselImo("");
    setEnteredOfficeNo("");
    setEnteredVesselType("");
    setEnteredLocation("");
    setEnteredETA("");
    setEnteredETD("");
    setEnteredPortAgentName("");
    setEnteredPortAgentEmail("");
    setEnteredPortAgentPhone("");
    setEnteredPICPhone("");
    setEnteredPICEmail("");
    setEnteredPICName("");
    setEnteredPortCertificateExpiryDate("");
    setEnteredAuditSubType("");
    setEnteredAuditType("");

    notifySuccess(
      notifyRef,
      `${audInspType === "MSC" ? "AUDIT" : "INSPECTION"} created successfully!`
    );
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
                  <h4 className="cardTitleWhite">REQUEST AUDIT/ INSPECTION</h4>
                  {/* <p class ="cardCategoryWhite">Complete your profile</p> */}
                </CardHeader>
              </div>
              <CardBody>
                <form className="bookaudittable" onSubmit={submitHandler}>
                  <div className="new-expense__controls">
                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Vessel Name</label>
                        {localStorage.getItem("role") == "owner1" ? (
                          <select
                            className="form-control"
                            onChange={vesselNameChangeHandler}
                            value={
                              props.location.state === "dtls"
                                ? "DEEPWATER PROTEUS"
                                : enteredVesselName
                            }
                          >
                            <option value="" disabled selected hidden>
                              Select Your Vessel
                            </option>
                            <option value="adventurer">
                              DEEPWATER PROTEUS
                            </option>
                            <option value="DEEPWATER PROTEUS">
                              DEEPWATER POSEIDON
                            </option>
                            <option value="advantagesummer">
                              DHIRUBHAI DEEPWATER KG2
                            </option>
                            <option value="advantage">DEEPWATER PONTUS</option>
                          </select>
                        ) : (
                          <select
                            className="form-control"
                            onChange={vesselNameChangeHandler}
                            value={
                              props.location.state === "dtls"
                                ? "GH CITATION"
                                : enteredVesselName
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
                          </select>
                        )}
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
                              : enteredVesselImo
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
                              : enteredOfficeNo
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
                              : enteredVesselType
                          }
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Location</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={locationChangeHandler}
                          value={enteredLocation}
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
                          value={enteredETA}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>ETD</label>
                        <input
                          className="form-control"
                          type="date"
                          min="2019-01-01"
                          max="2022-12-31"
                          onChange={etdChangeHandler}
                          value={enteredETD}
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
                          value={enteredPortAgentName}
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
                          value={enteredPortAgentEmail}
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
                        <label style={{ color: "black" }}>
                          Audit/ Inspection Type
                        </label>
                        <select
                          className="form-control"
                          value={audInspType}
                          onChange={({ target: { value } }) => {
                            setAudInspType(value);
                            setAudOrInsp("");
                          }}
                        >
                          <option value="" disabled>
                            Select a type
                          </option>
                          <option value="MSC">MSC</option>
                          <option value="INSPECTION">Inspection</option>
                        </select>
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>
                          {`Select ${userType.toUpperCase()}`}
                        </label>
                        <select
                          className="form-control"
                          value={audOrInsp}
                          onChange={({ target: { value } }) =>
                            setAudOrInsp(value)
                          }
                          disabled={audInspType === ""}
                        >
                          <option
                            value=""
                            disabled
                          >{`Select ${userType.toUpperCase()}`}</option>
                          <optgroup
                            label={`Available ${userType.toUpperCase()}S`}
                            style={{
                              backgroundColor: "#9af5a6",
                              textTransform: "uppercase",
                              color: "green",
                            }}
                          >
                            {userList
                              .filter((user) => {
                                console.log("User roles: ", user.roles);
                                return (
                                  user.roles.includes(userType) &&
                                  user.status === 1
                                );
                              })
                              .map((user) => (
                                <option
                                  style={{ backgroundColor: "#befac6" }}
                                  value={user.userId}
                                >
                                  {user.userName}
                                </option>
                              ))}
                          </optgroup>
                          <optgroup
                            label={`${userType.toUpperCase()}S ON-LEAVE`}
                            style={{
                              backgroundColor: "#e0e0e0",
                              textTransform: "uppercase",
                              color: "gray",
                            }}
                          >
                            {userList
                              .filter((user) => {
                                console.log("User roles: ", user.roles);
                                return (
                                  user.roles.includes(userType) &&
                                  user.status === 2
                                );
                              })
                              .map((user) => (
                                <option
                                  style={{ backgroundColor: "#f0f0f0" }}
                                  value={user.userId}
                                  disabled
                                >
                                  {user.userName}
                                </option>
                              ))}
                          </optgroup>
                          <optgroup
                            label={`UN-AVAILABLE ${userType.toUpperCase()}S`}
                            style={{
                              backgroundColor: "#fabebe",
                              textTransform: "uppercase",
                              color: "#9c0202",
                            }}
                          >
                            {userList
                              .filter((user) => {
                                console.log("User roles: ", user.roles);
                                return (
                                  user.roles.includes(userType) &&
                                  user.status === 0
                                );
                              })
                              .map((user) => (
                                <option
                                  style={{ backgroundColor: "#f0f0f0" }}
                                  value={user.userId}
                                  disabled
                                >
                                  {user.userName}
                                </option>
                              ))}
                          </optgroup>
                        </select>
                      </div>
                      {audInspType === "MSC" && (
                        <React.Fragment>
                          <div className="col-sm-4">
                            <label style={{ color: "black" }}>Audit Type</label>
                            <select
                              className="form-control"
                              value={enteredAuditType}
                              onChange={auditTypeChangeHandler}
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
                            <label style={{ color: "black" }}>
                              Audit Sub Type
                            </label>
                            <select
                              className="form-control"
                              value={enteredAuditSubType}
                              onChange={auditSubTypeChangeHandler}
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
                        </React.Fragment>
                      )}
                      {audInspType === "INSPECTION" && (
                        <div className="col-sm-4">
                          <label style={{ color: "black" }}>
                            Inspection Type
                          </label>
                          <select
                            className="form-control"
                            onChange={({ target: { value } }) =>
                              setInspectionType(value)
                            }
                            value={inspectionType}
                          >
                            <option value="" disabled>
                              Select Inspection Type
                            </option>
                            <option value="AIS">AIS Inspection</option>
                            <option value="VM">VM Inspection</option>
                            <option value="VETTING">Vetting Inspection</option>
                          </select>
                        </div>
                      )}
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
                          value={enteredCertificateExpiryDate}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>PIC Name</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={pICNameChangeHandler}
                          value={enteredPICName}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>PIC Email</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={pICEmailChangeHandler}
                          value={enteredPICEmail}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>PIC Phone</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={pICPhoneChangeHandler}
                          value={enteredPICPhone}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Request Audit/Inspection
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <Notify ref={notifyRef} />
    </div>
  );
};

export default BookAnAudit;
