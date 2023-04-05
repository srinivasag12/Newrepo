import React, { useState, useEffect } from "react";
import "./BookAnAudit.css";

import Notify from "react-notification-alert";
import { useRef } from "react";
import "react-notification-alert/dist/animate.css";
import { useHistory, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Radio,
  Autocomplete,
  Button,
  FormGroup,
  Checkbox,
  Chip,
} from "@mui/material";
import { Input } from "antd";

import {
  auditTypes,
  auditSubTypes,
  inspectionList,
  userList,
} from "constants/AppConstants";
import { ownerVesselList, vesselList } from "constants/AppConstants";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";
import { expiryDateList } from "constants/AppConstants";
import { styled } from "@mui/styles";

const statusColor = {
  0: { bgcolor: "orangered", hoverColor: "pink" },
  1: { bgcolor: "lightgreen", hoverColor: "green" },
  2: { bgcolor: "darkgray", hoverColor: "darkslategray" },
};

const StyledOption = styled("li", {
  shouldForwardProp: (propName) =>
    propName !== "status" && propName !== "others",
})(({ status, others }) => ({
  "&.MuiAutocomplete-option": {
    backgroundColor: statusColor[status].bgcolor,
    color: "white",
    borderBottom: "solid gray 1px",
    "&:hover": {
      backgroundColor: statusColor[status].hoverColor,
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
}));

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

const RequestAuditInspection = (props) => {
  const historyHelper = useHistory();
  const dateObject = useLocation().state;
  const vessels =
    localStorage.getItem("role") == "owner1"
      ? ownerVesselList.slice()
      : vesselList.slice();

  const [vessel, setVessel] = useState({ id: "", detail: "" });
  const [enteredETA, setEnteredETA] = useState(
    `${dateObject}` === `{}` || !dateObject || !dateObject?.dateInfo
      ? null
      : dayjs(dateObject?.dateInfo)
  );
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredETD, setEnteredETD] = useState(null);
  const [enteredPortAgentName, setEnteredPortAgentName] = useState("");
  const [enteredPortAgentEmail, setEnteredPortAgentEmail] = useState("");
  const [enteredPortAgentPhone, setEnteredPortAgentPhone] = useState("");
  const [auditType, setAuditType] = useState([]);
  const [enteredAuditSubType, setEnteredAuditSubType] = useState("");
  const [enteredCertificateExpiryDate, setEnteredPortCertificateExpiryDate] =
    useState("");

  const [audInspType, setAudInspType] = useState("");
  const [inspectionType, setInspectionType] = useState([]);
  const [audOrInsp, setAudOrInsp] = useState({ id: "", detail: {} });

  const expiryDates = [...expiryDateList].filter(({ typeId }) =>
    (auditType.length > 0 ? auditType : inspectionType).some(
      (id) => `${typeId}` === `${id}`
    )
  );

  console.log("Expiry Dates: ", expiryDates);

  const notifyRef = useRef();
  const userType =
    audInspType === ""
      ? "User"
      : audInspType === "MSC"
      ? "Auditor"
      : "Inspector";

  const handleVesselChange = ({ target: { value } }) => {
    const [vesselDetail] = vessels.filter(
      ({ vesselImoNo }) => `${vesselImoNo}` === `${value}`
    );
    setVessel({
      id: `${value}`,
      detail: vesselDetail,
    });
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const etaChangeHandler = (dateValue) => {
    // setEnteredETA(event.target.value);
    setEnteredETA(dateValue);
  };

  const etdChangeHandler = (dateValue) => {
    // setEnteredETD(event.target.value);
    setEnteredETD(dateValue);
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
    if (audOrInsp === "") {
      return notifyError(notifyRef, "Please select the " + userType);
    }
    if (audInspType === "") {
      return notifyError(notifyRef, "Please select Audit/ Inspection Type");
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
      eta: dayjs(new Date(enteredETA)).format("YYYY-MM-DD"),
      etd: dayjs(new Date(enteredETD)).format("YYYY-MM-DD"),
      portAgentName: enteredPortAgentName,
      portAgentEmail: enteredPortAgentEmail,
      portAgentPhone: enteredPortAgentPhone,
      certificateExpiryDate: expiryDates,
      pICName: `${audOrInsp.detail?.firstName?.toUpperCase()} ${audOrInsp.detail?.lastName?.toUpperCase()}`,
      pICEmail: `${audOrInsp.detail?.email}`,
      pICPhone: `${audOrInsp.detail?.phone}`,
      ...audOrInspDetails,
    };

    console.log("Submitted Data ", expenseData);

    saveAuditInspectionRequest(expenseData);

    // setVessel({ id: "", detail: "" });
    // setEnteredLocation("");
    // setEnteredETA("");
    // setEnteredETD("");
    // setEnteredPortAgentName("");
    // setEnteredPortAgentEmail("");
    // setEnteredPortAgentPhone("");
    // setEnteredPortCertificateExpiryDate("");
    // setEnteredAuditSubType("");
    // setAuditType([]);
    // setAudInspType("");
    // setAudOrInsp("");
    // setInspectionType([]);

    historyHelper.push("/admin/calendar");

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
      <Box
        sx={{
          width: "100%",
          position: "relative",
          borderRadius: "16px",
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            bgcolor: "#51cbce",
            borderRadius: "12px",
            position: "absolute",
            top: "-1.7em",
            left: "4%",
            right: "4%",
            zIndex: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase!important",
              fontSize: "1.2em",
              color: "white",
              padding: "0.5em",
            }}
          >
            Request Audit / Inspection
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            padding: "2.4em 1em 1em 1em",
            maxHeight: "100%",
            overflow: "auto",
            zIndex: 4,
          }}
        >
          <Grid
            item
            xs={4}
            md={4}
            sm={4}
            lg={4}
            sx={{ padding: 2, display: "flex", alignItems: "center" }}
          >
            <FormControl
              sx={{ alignItems: "center", display: "flex" }}
              fullWidth
            >
              <RadioGroup
                aria-labelledby="groupId"
                row
                value={audInspType}
                onChange={({ target: { value } }) => {
                  setAudInspType(value);
                  setAudOrInsp({ id: "", detail: {} });
                  setAuditType([]);
                  setInspectionType([]);
                }}
              >
                <FormControlLabel
                  value="MSC"
                  control={<Radio sx={{ py: "0" }} />}
                  label="MSC AUDITS"
                />
                <FormControlLabel
                  value="INSPECTION"
                  control={<Radio sx={{ py: "0" }} />}
                  label="INSPECTION"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4} md={4} sm={4} lg={4} sx={{ padding: 2 }}>
            <FormControl size="small" fullWidth>
              <InputLabel id="vesselName">VESSEL NAME</InputLabel>
              <Select
                labelId="vesselName"
                id="vesselNameSelect"
                label={"VESSEL NAME"}
                value={vessel.id}
                onChange={handleVesselChange}
              >
                {getVesselFieldOptions("vesselName").map((item) => (
                  <MenuItem key={`vn-${item.value}`} value={`${item.value}`}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <FormControl size="small" fullWidth>
              <InputLabel id="vesselImo">VESSEL IMO NO.</InputLabel>
              <Select
                labelId="vesselImo"
                id="vesselImoSelect"
                label={"VESSEL IMO NO."}
                value={vessel.id}
                onChange={handleVesselChange}
              >
                {getVesselFieldOptions("vesselImoNo").map((item) => (
                  <MenuItem key={`vimo-${item.value}`} value={`${item.value}`}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <FormControl size="small" fullWidth>
              <InputLabel id="officialNo">OFFICIAL NO.</InputLabel>
              <Select
                labelId="officialNo"
                id="officialNoSelect"
                label={"OFFICIAL NO."}
                value={vessel.id}
                onChange={handleVesselChange}
              >
                {getVesselFieldOptions("officialNo").map((item) => (
                  <MenuItem key={`vono-${item.value}`} value={`${item.value}`}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <TextField
              fullWidth
              label="VESSEL TYPE"
              size="small"
              value={vessel.detail?.vesselType || ""}
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <TextField
              fullWidth
              label="LOCATION"
              size="small"
              value={enteredLocation}
              onChange={locationChangeHandler}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="ETA"
                format="DD-MMM-YYYY HH:mm"
                value={enteredETA}
                onChange={etaChangeHandler}
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="ETD"
                format="DD-MMM-YYYY HH:mm"
                value={enteredETD}
                onChange={etdChangeHandler}
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <TextField
              fullWidth
              label="PORT AGENT NAME"
              size="small"
              value={enteredPortAgentName}
              onChange={portAgentNameChangeHandler}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <TextField
              fullWidth
              label="PORT AGENT EMAIL"
              size="small"
              value={enteredPortAgentEmail}
              onChange={portAgentEmailChangeHandler}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <TextField
              fullWidth
              label="PORT AGENT PHONE"
              size="small"
              value={enteredPortAgentPhone}
              onChange={portAgentPhoneChangeHandler}
            />
          </Grid>
          {expiryDates.length > 0 && (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ padding: "0 1em" }}
            >
              <Grid container alignItems={"center"}>
                {expiryDates.map((dateInfo) => (
                  <Grid item sx={{ padding: 0.5 }}>
                    <Chip
                      label={
                        <Box sx={{ padding: 0.5, whiteSpace: "break-spaces" }}>
                          <b>{`${dateInfo.desc}${
                            audInspType === "MSC" ? " AUDIT" : ""
                          }`}</b>
                          <span style={{ marginLeft: "1em" }}>
                            {audInspType === "MSC" && "Certificate "}Expiry
                            Date:&nbsp;<b>{dateInfo.expiryDate}</b>
                          </span>
                        </Box>
                      }
                      onDelete={null}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
          {audInspType === "MSC" && (
            <React.Fragment>
              <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
                <FormControl size={"small"} fullWidth>
                  <InputLabel id="audType">AUDIT TYPE</InputLabel>
                  <Select
                    labelId="audType"
                    multiple
                    label={"AUDIT TYPE"}
                    value={auditType}
                    onChange={({ target: { value } }) => {
                      setAuditType(value);
                      setEnteredAuditSubType("");
                    }}
                  >
                    {auditTypes.map((audit) => (
                      <MenuItem key={`at-${audit.id}`} value={`${audit.id}`}>
                        {audit.desc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
                <FormControl size={"small"} fullWidth>
                  <InputLabel id="audType">AUDIT SUB TYPE</InputLabel>
                  <Select
                    labelId="audSubType"
                    label={"AUDIT SUB TYPE"}
                    value={enteredAuditSubType}
                    onChange={({ target: { value } }) => {
                      setEnteredAuditSubType(value);
                    }}
                  >
                    {auditSubTypes.map((type) => (
                      <MenuItem key={`audSubt-${type.id}`} value={`${type.id}`}>
                        {type.desc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </React.Fragment>
          )}
          {audInspType === "INSPECTION" && (
            <React.Fragment>
              <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
                <FormControl size={"small"} fullWidth>
                  <InputLabel id="inspType">INSPECTION</InputLabel>
                  <Select
                    multiple
                    labelId="inspType"
                    label={"INSPECTION"}
                    value={inspectionType}
                    onChange={({ target: { value } }) => {
                      setInspectionType(value);
                    }}
                  >
                    {inspectionList.map((type) => (
                      <MenuItem key={`inspT-${type.id}`} value={`${type.id}`}>
                        {type.desc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </React.Fragment>
          )}
          {audInspType !== "" && (
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
              <Autocomplete
                disablePortal
                freeSolo
                options={[...userList]
                  .filter(({ roles }) =>
                    [...roles].includes(
                      audInspType === "MSC" ? "Auditor" : "Inspector"
                    )
                  )
                  .sort((a, b) =>
                    `${a.statusDesc}`.localeCompare(`${b.statusDesc}`)
                  )}
                groupBy={(option) => option.statusDesc}
                getOptionLabel={(option) => option.userName}
                getOptionDisabled={({ status }) => status !== 1}
                onChange={(e, val) => {
                  setAudOrInsp({ id: val.id, detail: { ...val } });
                }}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    variant="outlined"
                    size={"small"}
                    label={`SELECT ${
                      audInspType === "MSC" ? "AUDITOR" : "INSPECTOR"
                    }`}
                  />
                )}
                renderOption={(
                  { className, onMouseOver, ...otherProps },
                  { status, userName }
                ) => {
                  console.log(otherProps);
                  return (
                    <StyledOption
                      className={className}
                      {...otherProps}
                      status={status}
                    >
                      {userName}
                    </StyledOption>
                  );
                }}
              />
            </Grid>
          )}
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <TextField
              size={"small"}
              fullWidth
              label={"PIC NAME"}
              value={
                JSON.stringify(audOrInsp.detail) === "{}"
                  ? ""
                  : `${audOrInsp.detail?.firstName?.toUpperCase()} ${audOrInsp.detail?.lastName?.toUpperCase()}`
              }
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <TextField
              size={"small"}
              fullWidth
              label={"PIC EMAIL"}
              value={
                JSON.stringify(audOrInsp.detail) === "{}"
                  ? ""
                  : `${audOrInsp.detail?.email}`
              }
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ padding: 2 }}>
            <TextField
              size={"small"}
              fullWidth
              label={"PIC PHONE"}
              value={
                JSON.stringify(audOrInsp.detail) === "{}"
                  ? ""
                  : `${audOrInsp.detail?.phone}`
              }
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ display: "flex", justifyContent: "center", padding: 2 }}
          >
            <Button
              variant={"contained"}
              sx={{ bgcolor: "#51cbce!important", color: "white" }}
              onClick={submitHandler}
            >
              SCHEDULE{" "}
              {audInspType === ""
                ? ""
                : audInspType === "MSC"
                ? "AUDIT"
                : "INSPECTION"}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Notify ref={notifyRef} />
    </div>
  );
};

export default RequestAuditInspection;
