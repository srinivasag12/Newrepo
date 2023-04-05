import React, { useState, useEffect } from "react";

import { forwardRef } from "react";

// import "../vessel_info/Vessel.css";

import MaterialTable from "material-table";
import AddBox from "@mui/icons-material/AddBox";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Check from "@mui/icons-material/Check";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Clear from "@mui/icons-material/Clear";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Edit from "@mui/icons-material/Edit";
import FilterList from "@mui/icons-material/FilterList";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";
import Remove from "@mui/icons-material/Remove";
import SaveAlt from "@mui/icons-material/SaveAlt";
import Search from "@mui/icons-material/Search";
import ViewColumn from "@mui/icons-material/ViewColumn";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StopIcon from "@mui/icons-material/Stop";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, CardFooter, Button } from "reactstrap";
import { Badge } from "antd";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import EventBusy from "@mui/icons-material/EventBusy";
import AssignmentIcon from "@mui/icons-material/Assignment";
import List from "@mui/icons-material/List";
import { Tooltip } from "antd";
import VesselOverviewPopover from "./VesselOverviewPopover";
import AuditOverviewPopover from "./AuditOverviewPopover";
import { Popover } from "antd";
import VesselSearchFilter from "./VesselSearchFilter";
import VesselSearch from "./VesselSearch";
// import Pagination from "@material-ui/lab/Pagination";
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
    vesselName: "FEDERAL TAMBO",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9644495",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "BALTIC LEOPARD",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9387334",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "danger",
  },
  {
    vesselName: "NAVIGARE BACCA",
    companyName: "ANGLO - EASTERN",
    vesselType: "Gas Carrier",
    comany: "ALL",
    imoNo: "9758741",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "SEAMAX FAIRFIELD",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9302633",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "warning",
  },
  {
    vesselName: "SEAMAX WESTPORT",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9302645",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "PRASLIN",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9544750",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "SEAMAX GREENWICH",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9286267",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "warning",
  },
  {
    vesselName: "BALTIC COUGAR",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9387358",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "CORCOVADO",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9241463",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "warning",
  },
  {
    vesselName: "GENCO CLAUDIUS",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9444819",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "danger",
  },
  {
    vesselName: "GENCO HADRIAN",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9422067",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "GENCO COMMODUS",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9422079",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "GENCO MAXIMUS",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9422081",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "warning",
  },
  {
    vesselName: " BALTIC WOLF",
    companyName: "ANGLO - EASTERN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9492335",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },

  {
    vesselName: "DEEPWATER PROTEUS",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9675171",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "danger",
  },
  {
    vesselName: "DEEPWATER POSEIDON",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9675195",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "warning",
  },
  {
    vesselName: "DHIRUBHAI DEEPWATER KG2",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9675183",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: " DEEPWATER PONTUS",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9410088",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "DEEPWATER THALASSA",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9675169",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "DEEPWATER CONQUEROR",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9730804",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "warning",
  },
  {
    vesselName: "DEEPWATER PROTEUS",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9675171",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "DEEPWATER ASGARD",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9620580",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "danger",
  },
  {
    vesselName: "DISCOVERER INDIA",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9564413",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "success",
  },
  {
    vesselName: "DISCOVERER INSPIRATION",
    companyName: "TRANSOCEAN",
    vesselType: "Yacth",
    comany: "ALL",
    imoNo: "9409936",
    surveyOverDue: "5",
    surveyDue: "3",
    findingsOverDue: "4",
    findingsDue: "2",
    expiringCertificates: "3",
    color: "warning",
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
    if (localStorage.getItem("role") == "company") {
      setVesselList(vessel.slice(0, 14));
    } else if (localStorage.getItem("role") == "owner1") {
      setVesselList(vessel.slice(-10))
    }
    // setVesselList(vessel.slice(0,14));
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
    console.log(searchTerm);
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
      <InfiniteScroll
        dataLength={vesselList.length}
        next={fetchMoreData}
        hasMore={true}
      >
        <div className="head">
          <div style={{ margin: "10px" }}>
            <div style={{ display: "flex" }} >
              <VesselSearch onSearchData={searchDataHandler} />
              {(searchTerm == "") ?
                (<span style={{ display: "flex" }}>
                  <h6 style={{ color: "gray" }}>Total Vessels : </h6>
                  <Badge
                    count={vesselList.length}
                    style={{ marginLeft: "10px" }}
                  />
                </span>) : (searchTerm == "ALL") ?
                  (<span style={{ display: "flex" }}>
                    <h6 style={{ color: "gray" }}>Total Vessels : </h6>
                    <Badge
                      count={vesselList.length}
                      style={{ marginLeft: "10px" }}
                    />
                  </span>) :
                  (<span style={{ display: "flex" }}>
                    <h6 style={{ color: "gray" }}>Matching Vessels : </h6>
                    <Badge
                      count={filteredVesselList.length}
                      style={{ marginLeft: "10px" }}
                    />
                  </span>)}
              <span style={{ marginLeft: "15px" }}></span>
              <span style={{ marginTop: "-4px" }}>
                {localStorage.getItem("role") == "owner1" ?
                  <Badge
                    count={"TRANSOCEAN OFFSHORE DEEPWATER DRILLING INC."}
                    style={{
                      backgroundColor: "#52c41a",
                      fontWeight: "bold",
                      fontSize: "medium",
                    }}
                  />
                  : localStorage.getItem("role") == "company" ? <Badge
                    count={"ANGLO - EASTERN"}
                    style={{
                      backgroundColor: "#52c41a",
                      fontWeight: "bold",
                      fontSize: "medium",
                    }}
                  /> : ""}
              </span>
            </div>
          </div>
        </div>



{/* <div style={{height:"80px",backgroundColor:"#40a9ff8c"}}>
</div>
<div style={{width:"120px",height:"100px",backgroundColor:"#f5f5f5",marginLeft:"50px",borderRadius:"100px",marginTop:"-90px"}}>
<div  style={{width:"100px",height:"100px",backgroundColor:"white",borderRadius:"100px",marginLeft:"10px",border:"1px solid #96d0ff"}}>


<i class="fa fa-user fa-5x" aria-hidden="true" 
style={{width:"88px",height:"88px",borderRadius:"100px",marginLeft:"5px",marginTop:"5px",backgroundColor:"#40a9ff8c",color:"white",
paddingTop:"8px",paddingLeft:"20px"}}></i>
</div>
</div> */}





        <div style={{ backgroundColor: "#f5f5f5", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridGap: "10px" }}>
          {filteredVesselList.map((res) => (
            <Card style={{ borderRadius: "10px", paddingBottom: "0.5rem", marginBottom: "16px", padding: "15px", paddingRight: "0.5rem" }} >
              <div className="row">
                <div className="col">
                  {/* <CardHeader > */}
                  <div align="left">
                    <div className="textSizeResolution" style={{ fontWeight: "bold", color: "rgb(0 0 0 / 54%)", fontSize: "1.1rem" }}>{res.vesselName}
                      <div className="textmoreResolution" style={{ color: "rgb(0 0 0 / 35%)", fontSize: "11px" }}>{res.vesselType} / IMO #{res.imoNo}</div>
                    </div>
                  </div>
                  {/* <div>
                <Button>demo</Button>
                </div> */}

                  {/* <div className="vesselicon-box">
                  <i className="fa fa-ship fa-2x" ></i>
                </div> */}
                  {/* </CardHeader> */}
                </div>
                {/* <div style={{ borderLeft: "0.5px solid #d9d9d9",marginRight: "-4%"}}></div> */}
                <div className="col">
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
                    <div style={{ padding: "5px" }}>
                      <div className="vesseDetailslicon-shape text-white rounded-circle"
                        style={{ backgroundColor: "#fbc658" }}>
                        <i className="fa fa-file" ></i>
                      </div> <span className="textmoreResolution" style={{ textAlign: "center", paddingTop: "5px", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "rgb(0 0 0 / 85%)" }} onClick={() => history.push("/admin/details")} >VESSEL DETAILS</span>
                    </div>
                  </Popover>
                  {/* <div style={{borderBottom: "0.5px solid #d9d9d9",margin: "6px"}}></div> */}
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
                    <div style={{ padding: "5px" }}>
                      <div className="vesseDetailslicon-shape text-white rounded-circle"
                        style={{ backgroundColor: "#6bd098" }}>
                        <i className="fa fa-file-text" ></i>
                      </div> <span className="textmoreResolution" style={{ textAlign: "center", paddingTop: "5px", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "rgb(0 0 0 / 85%)" }} onClick={() => history.push("/admin/statement")} >IRI MARINE SERVICE</span>
                    </div>
                  </Popover>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Vessel;
