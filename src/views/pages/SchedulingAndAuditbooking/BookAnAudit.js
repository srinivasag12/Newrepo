import React, { useState, useEffect } from "react";
import "./BookAnAudit.css";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Notify from "react-notification-alert";
import { useRef } from "react";
import "react-notification-alert/dist/animate.css";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { Input, Radio, Select } from "antd";

import {
  auditTypes,
  auditSubTypes,
  inspectionList,
  userList,
} from "constants/AppConstants";
import { ownerVesselList, vesselList } from "constants/AppConstants";

const getVesselFieldOptions = (vesselFieldName) => {
  const vesselInfo = (vessel) => `${vessel[`${vesselFieldName}`]}`;
  const vessels =
    localStorage.getItem("role") == "owner1" ? ownerVesselList : vesselList;

  return vessels.map((vessel) => ({
    label: `${vesselInfo(vessel)}`.trim(),
    value: vessel.vesselImoNo,
  }));
};

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

const saveAuditInspectionRequest = (newRequest) => {
  const requests = JSON.parse(localStorage.getItem("requests") || "[]");
  console.log("Existing requests: ", requests);
  localStorage.setItem(
    "requests",
    JSON.stringify([...requests, { id: requests.length, ...newRequest }])
  );
};

const filterVesselOptions = (input, { label }) =>
  `${label || ""}`.toUpperCase().includes(`${input}`.toUpperCase());

const BookAnAudit = (props) => {
  const dateObject = useLocation().state;
  const vessels =
    localStorage.getItem("role") == "owner1"
      ? ownerVesselList.slice()
      : vesselList.slice();

  const [vessel, setVessel] = useState({ id: "", detail: "" });
  const [enteredETA, setEnteredETA] = useState(
    `${dateObject}` === `{}` || !dateObject || !dateObject?.dateInfo
      ? ""
      : dayjs(new Date(dateObject?.dateInfo)).format("YYYY-MM-DD")
  );
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredETD, setEnteredETD] = useState("");
  const [enteredPortAgentName, setEnteredPortAgentName] = useState("");
  const [enteredPortAgentEmail, setEnteredPortAgentEmail] = useState("");
  const [enteredPortAgentPhone, setEnteredPortAgentPhone] = useState("");
  const [auditType, setAuditType] = useState([]);
  const [enteredAuditSubType, setEnteredAuditSubType] = useState("");
  const [enteredCertificateExpiryDate, setEnteredPortCertificateExpiryDate] =
    useState("");
  const [enteredPICName, setEnteredPICName] = useState("");
  const [enteredPICEmail, setEnteredPICEmail] = useState("");
  const [enteredPICPhone, setEnteredPICPhone] = useState("");

  const [audInspType, setAudInspType] = useState("");
  const [inspectionType, setInspectionType] = useState([]);
  const [audOrInsp, setAudOrInsp] = useState("");

  const notifyRef = useRef();
  const userType =
    audInspType === ""
      ? "User"
      : audInspType === "MSC"
      ? "Auditor"
      : "Inspector";

  const handleVesselChange = (vesselImoNumber) => {
    const [vesselDetail] = vessels.filter(
      ({ vesselImoNo }) => vesselImoNo === vesselImoNumber
    );
    setVessel({
      id: vesselImoNumber,
      detail: vesselDetail,
    });
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const etaChangeHandler = (event) => {
    setEnteredETA(event.target.value);
  };

  const etdChangeHandler = (event) => {
    setEnteredETD(event.target.value);
  };

  const portAgentNameChangeHandler = (event) => {
    setEnteredPortAgentName(event.target.value);
  };

  const portAgentEmailChangeHandler = (event) => {
    setEnteredPortAgentEmail(event.target.value);
  };

  const portAgentPhoneChangeHandler = (event) => {
    setEnteredPortAgentPhone(event.target.value.replace(/\+|-/gi, ""));
  };

  const certificateExpiryDateChangeHandler = (event) => {
    setEnteredPortCertificateExpiryDate(event.target.value);
  };
  const pICNameChangeHandler = (event) => {
    setEnteredPICName(event.target.value);
  };
  const pICEmailChangeHandler = (event) => {
    setEnteredPICEmail(event.target.value);
  };
  const pICPhoneChangeHandler = (event) => {
    setEnteredPICPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (vessel.id === "") {
      return notifyError(notifyRef, "Please select a vessel");
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
    if (audInspType === "MSC" && auditType === "") {
      return notifyError(notifyRef, "Please select Audit Sub-Type");
    }

    const auditTypeList = [...auditTypes];
    const auditSubTypeList = [...auditSubTypes];
    const inspectionTypeList = [...inspectionList];

    const audOrInspDetails =
      audInspType === "MSC"
        ? {
            auditType: auditTypeList.filter((type) =>
              auditType.some((typeVal) => typeVal === `${type.id}`)
            ),
            auditSubType: auditSubTypeList.filter(
              (type) => `${type.id}` === `${enteredAuditSubType}`
            )[0],
          }
        : {
            inspectionType: inspectionTypeList.filter((type) =>
              inspectionType.some((inspType) => `${inspType}` === `${type.id}`)
            ),
          };
    const expenseData = {
      vesselName: vessel.detail?.vesselName,
      vesselImo: vessel.detail?.vesselImoNo,
      officeNo: vessel.detail?.officialNo,
      vesselType: vessel.detail?.vesselType,
      location: enteredLocation,
      eta: new Date(enteredETA),
      etd: new Date(enteredETD),
      portAgentName: enteredPortAgentName,
      portAgentEmail: enteredPortAgentEmail,
      portAgentPhone: enteredPortAgentPhone,
      certificateExpiryDate: new Date(enteredCertificateExpiryDate),
      pICName: enteredPICName,
      pICEmail: enteredPICEmail,
      pICPhone: enteredPICPhone,
      ...audOrInspDetails,
    };

    console.log("Submitted Data ", expenseData);

    saveAuditInspectionRequest(expenseData);

    setVessel({ id: "", detail: "" });
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
    setAuditType([]);
    setAudInspType("");
    setAudOrInsp("");
    setInspectionType([]);

    notifySuccess(
      notifyRef,
      `${audInspType === "MSC" ? "AUDIT" : "INSPECTION"} created successfully!`
    );
  };

  React.useEffect(
    () => () => {
      console.log("Cleaning up..");
      const { dateInfo, ...others } = window.history.state?.state || {};
      if (`${enteredETA}`.length > 0 && !!dateInfo) {
        console.log("Resetting date..");
        window.history.state.state = { ...others };
      }
    },
    []
  );

  return (
    <div className="content">
      {/* {this.state.alert} */}

      {/* {props.location.state === "dtls" ? "true" : "false"} */}
      <Radio.Group>
        <Radio value={"MSC"}>MSC</Radio>
        <Radio value={"INSPECTION"}>INSPECTION</Radio>
      </Radio.Group>
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
                      <div className="col-sm-4"></div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Vessel Name</label>
                        <Select
                          className="form-control"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder={"Type Vessel name"}
                          onChange={handleVesselChange}
                          value={vessel.id}
                          optionFilterProp="children"
                          showSearch
                          filterOption={filterVesselOptions}
                          options={getVesselFieldOptions("vesselName")}
                          notFoundContent={"No vessels found"}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Vessel Imo</label>
                        <Select
                          className="form-control"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder={"Type Vessel IMO No."}
                          onChange={handleVesselChange}
                          value={vessel.id}
                          optionFilterProp="children"
                          showSearch
                          filterOption={filterVesselOptions}
                          options={getVesselFieldOptions("vesselImoNo")}
                          notFoundContent={"No vessels found"}
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Official No.</label>
                        <Select
                          className="form-control"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder={"Type Vessel Official No."}
                          onChange={handleVesselChange}
                          value={vessel.id}
                          optionFilterProp="children"
                          showSearch
                          filterOption={filterVesselOptions}
                          options={getVesselFieldOptions("officialNo")}
                          notFoundContent={"No vessels found"}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>Vessel Type</label>
                        <Input
                          className="form-control"
                          value={vessel.detail?.vesselType || ""}
                          readOnly
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
                            setEnteredPICName("");
                            setEnteredPICEmail("");
                            setEnteredPICPhone("");
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
                          onChange={({ target: { value } }) => {
                            const [user] = userList.filter(
                              ({ userId }) => `${userId}` === `${value}`
                            );
                            setAudOrInsp(value);
                            setEnteredPICName(
                              `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`
                            );
                            setEnteredPICEmail(`${user.email}`);
                            setEnteredPICPhone(`${user.phone}`);
                          }}
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
                              .filter(
                                (user) =>
                                  user.roles.includes(userType) &&
                                  user.status === 1
                              )
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
                              .filter(
                                (user) =>
                                  user.roles.includes(userType) &&
                                  user.status === 2
                              )
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
                            <Select
                              mode="multiple"
                              className="form-control"
                              allowClear
                              style={{ width: "100%" }}
                              placeholder="Select Audit Type"
                              onChange={(option) => {
                                setAuditType(option);
                                setEnteredAuditSubType("");
                              }}
                              value={auditType}
                              options={auditTypes.map((type) => ({
                                label: type.desc,
                                value: type.id,
                              }))}
                            />
                          </div>
                          <div className="col-sm-4">
                            <label style={{ color: "black" }}>
                              Audit Sub Type
                            </label>
                            <Select
                              className="form-control"
                              value={enteredAuditSubType}
                              onChange={setEnteredAuditSubType}
                              options={auditSubTypes.map((type) => ({
                                label: type.desc,
                                value: type.id,
                                key: `audSubType-${type.id}`,
                              }))}
                            />
                          </div>
                        </React.Fragment>
                      )}
                      {audInspType === "INSPECTION" && (
                        <div className="col-sm-4">
                          <label style={{ color: "black" }}>
                            Inspection Type
                          </label>
                          <Select
                            className="form-control"
                            mode="multiple"
                            value={inspectionType}
                            onChange={setInspectionType}
                            options={inspectionList.map((type) => ({
                              label: type.desc,
                              value: type.id,
                              key: `inspType-${type.id}`,
                            }))}
                          />
                        </div>
                      )}
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>
                          Certificate Expiry Date
                        </label>
                        <input
                          className="form-control"
                          type="date"
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
                          readOnly
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>PIC Email</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={pICEmailChangeHandler}
                          value={enteredPICEmail}
                          readOnly
                        />
                      </div>
                      <div className="col-sm-4">
                        <label style={{ color: "black" }}>PIC Phone</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={pICPhoneChangeHandler}
                          value={enteredPICPhone}
                          readOnly
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
