import React, { useState, useEffect } from "react";

import { forwardRef } from "react";

import "../vessel_info/Vessel.css";

import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StopIcon from "@material-ui/icons/Stop";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import { Badge } from "antd";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import EventBusy from "@material-ui/icons/EventBusy";
import AssignmentIcon from "@material-ui/icons/Assignment";
import List from "@material-ui/icons/List";

import { Tooltip } from "antd";
import VesselOverviewPopover from "./VesselOverviewPopover";
import AuditOverviewPopover from "./AuditOverviewPopover";
import { Popover } from "antd";
import VesselSearchFilter from "./VesselSearchFilter";
import VesselSearch from "./VesselSearch";
import Pagination from "@material-ui/lab/Pagination";

import useInfiniteScroll from "./useInfiniteScroll";
import InfiniteScroll from "react-infinite-scroll-component";

import { useHistory } from "react-router-dom";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const vessel = [
  {
    vesselName: "4 YOU",
    vesselType: "Yacth",
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
    vesselName: "AAMIRA",
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
    vesselName: "SCOUT II",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "WINTERSET",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "ICE RUNNER",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "ANTIGONI",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "SCORPIO CONFIDENCE",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
  {
    vesselName: "LEONARDO",
    vesselType: "Yacth",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
  },
];

const content = (
  <div>
    <VesselOverviewPopover />
  </div>
);

function Vessel(props) {
  const [vesselList, setVesselList] = useState(vessel);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 7;
  const [page, setPage] = useState(1);
  const noOfPages = useState(Math.ceil(vessel.length / itemsPerPage))[0];
  const history = useHistory();

  useEffect(() => {
    console.log(noOfPages);
    console.log(Array.from({ length: 5 }));
    console.log("noOfPages >>", Math.ceil(vessel.length / itemsPerPage));
    setVesselList(vessel.slice(0, 10));
  }, []);

  const handleChange = (event, value) => {
    console.log("HandleChange >>>", value);
    setPage(value);
  };

  const filteredVesselList = vesselList.filter((item) => {
    console.log("Item", item);
    console.log(
      Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const searchDataHandler = (data) => {
    console.log("SEARCH DATA ::", data);
    setSearchTerm(data);
    console.log("VESSEL.JS PROPS", props);
  };

  const fetchMoreData = () => {
    console.log("fetchMoreData ....");
    // console.log(vesselList.concat(vesselList.splice(0, vesselList.length + 6)));

    setVesselList(vessel.slice(0, 13));
    //setTimeout(() => {}, 1500);
  };
  return (
    <div className="content">
      {/* <div style={{ margin: "10px" }}>
        <div style={{ display: "flex" }}>
          <span style={{ display: "flex" }}>
            <h6 style={{ color: "gray" }}>Total Vessels : </h6>
            <Badge count={vesselList.length} style={{ marginLeft: "10px" }} />
          </span>
          <span style={{ marginLeft: "15px" }}></span>
          <span style={{ display: "flex" }}>
            <h6 style={{ color: "gray" }}>Available Vessels : </h6>
            <Badge
              count={filteredVesselList.length}
              style={{ marginLeft: "10px" }}
            />
          </span>
          <span style={{ marginLeft: "15px" }}></span>
          <span style={{ marginTop: "-7px" }}>
            <Badge
              count={"PETROLEO BRASILEIRO S.A. - UO ES"}
              style={{ backgroundColor: "#52c41a", fontWeight: "bold" }}
            />
          </span>
        </div>
        <VesselSearch onSearchData={searchDataHandler} />
      </div> */}

      <InfiniteScroll
        dataLength={vesselList.length}
        next={fetchMoreData}
        hasMore={true}
      >
        <div className="head">
          <div style={{ margin: "10px" }}>
            <div style={{ display: "flex" }}>
              <span style={{ display: "flex" }}>
                <h6 style={{ color: "gray" }}>Total Vessels : </h6>
                <Badge
                  count={vesselList.length}
                  style={{ marginLeft: "10px" }}
                />
              </span>
              <span style={{ marginLeft: "15px" }}></span>
              <span style={{ display: "flex" }}>
                <h6 style={{ color: "gray" }}>Available Vessels : </h6>
                <Badge
                  count={filteredVesselList.length}
                  style={{ marginLeft: "10px" }}
                />
              </span>
              <span style={{ marginLeft: "15px" }}></span>
              <span style={{ marginTop: "-4px" }}>
                <Badge
                  count={"ANGLO - EASTERN"}
                  style={{
                    backgroundColor: "#52c41a",
                    fontWeight: "bold",
                    fontSize: "medium",
                  }}
                />
              </span>
            </div>
            <VesselSearch onSearchData={searchDataHandler} />
          </div>
        </div>

        <div className="card-list">
          {/* {filteredVesselList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((res) => (
            <Card>
              <CardBody>
                <div className="cardTopSection">
                  <DirectionsBoatIcon
                    className="nc-icon nc-globe text-warning"
                    style={{
                      fontSize: "40px",
                      float: "right",
                    }}
                  ></DirectionsBoatIcon>

                  <h5>{res.vesselName}</h5>
                  <h6 style={{ color: "gray" }}>
                    {res.vesselType} / IMO #{res.imoNo}
                  </h6>
                </div>
                <div className="horizontalBreak">
                  <hr></hr>
                </div>

                <div className="cardBottomSection1">
                  <div className="cardBottomContent">
                    <Popover
                      content={
                        <VesselOverviewPopover
                          vesselName={res.vesselName}
                          vesselType={res.vesselType}
                          imoNo={res.imoNo}
                        />
                      }
                      title={res.vesselName}
                    >
                      <DirectionsBoatIcon style={{ color: "grey" }} />{" "}
                      <span> VESSEL INFO</span>
                    </Popover>
                  </div>

                  <div className="vl"></div>

                  <div className="cardBottomContent">
                    <Popover
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
                      <AssignmentIcon style={{ color: "grey" }} />{" "}
                      <span> AUDIT INFO</span>
                    </Popover>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))} */}

          {filteredVesselList.map((res) => (
            <Card>
              <CardBody>
                <div className="cardTopSection">
                  <DirectionsBoatIcon
                    className="nc-icon nc-globe text-warning"
                    style={{
                      fontSize: "40px",
                      float: "right",
                    }}
                  ></DirectionsBoatIcon>

                  <h5>{res.vesselName}</h5>
                  <h6 style={{ color: "gray" }}>
                    {res.vesselType} / IMO #{res.imoNo}
                  </h6>
                </div>
                <div className="horizontalBreak">
                  <hr></hr>
                </div>

                <div className="cardBottomSection1">
                  <div className="cardBottomContent">
                    <Popover
                      content={
                        <VesselOverviewPopover
                          vesselName={res.vesselName}
                          vesselType={res.vesselType}
                          imoNo={res.imoNo}
                        />
                      }
                      title={res.vesselName}
                    >
                      <DirectionsBoatIcon
                        style={{ color: "grey", cursor: "pointer" }}
                      />{" "}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/admin/details")}
                      >
                        {" "}
                        VESSEL INFO
                      </span>
                    </Popover>
                  </div>

                  <div className="vl"></div>

                  <div className="cardBottomContent">
                    <Popover
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
                      <AssignmentIcon
                        style={{ color: "grey", cursor: "pointer" }}
                      />{" "}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/admin/audit")}
                      >
                        {" "}
                        AUDIT INFO
                      </span>
                    </Popover>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}

          {/*  */}
        </div>
      </InfiniteScroll>
      {/* <div style={{ float: "right" }}>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          shape="rounded"
          color="primary"
        />
      </div> */}
    </div>
  );
}

export default Vessel;

/* 
<MaterialTable
        icons={tableIcons}
        title="PETROLEO BRASILEIRO S.A. - UO ES"
        columns={[
          {
            title: "Class Status",
            field: "companyName",
          },
          { title: "Imo number", field: "imoNumber" },
          { title: "DNV id", field: "dnvId" },
          {
            title: "Vessel Name",
            field: "vesselName",
          },
          {
            title: "Days to overdue class/others",
            field: "overdue",
          },
          {
            title: "Class certificte expiry date",
            field: "expiry",
          },
        ]}
        data={[
          {
            companyName: <ErrorOutlineOutlinedIcon style={{ color: "red" }} />,
            imoNumber: "9446702",
            dnvId: 42229,
            vesselName: "TOMINI MAJESTY",
            overdue: "Overdue/103",
            expiry: "2024-12-24",
          },
          {
            companyName: <FiberManualRecordIcon style={{ color: "gold" }} />,
            imoNumber: "9452854",
            dnvId: "G107565",
            vesselName: "SUPER TRADER",
            overdue: "53/142",
            expiry: "2026-01-28",
          },
          {
            companyName: <StopIcon style={{ color: "green" }} />,
            imoNumber: "9670418",
            dnvId: 343715,
            vesselName: "CS CELESTE",
            overdue: "304/295",
            expiry: "2024-12-28",
          },
        ]}
        options={{
          search: true,
        }}
      />

*/
