import React, { useEffect, useState } from "react";
import { forwardRef } from "react";

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
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";

import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import EventBusy from "@material-ui/icons/EventBusy";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";

import List from "@material-ui/icons/List";

import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";

import "../company/Company.css";

import {
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import { useHistory } from "react-router-dom";
import { Input } from "antd";
import { Badge } from "antd";

//const { Search } = Input;

const companyData = [
  {
    companyName: "PETROLEO BRASILEIRO S.A. - UO ES",
    imoNumber: "0161412",
    dnvId: 10309047,
    country: "Brazil",
    vessels: 3,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  },
  {
    companyName: "3116 Ltd.",
    imoNumber: "0161412",
    dnvId: 10687307,
    country: "Cayman Island",
    vessels: 2,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  },
  {
    companyName: "A&L CF June(3) Limited",
    imoNumber: "0161412",
    dnvId: 10309047,
    country: "United Kingdom",
    vessels: 1,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  },
  {
    companyName: "ABC Maritime AG",
    imoNumber: "1191412",
    dnvId: 10309047,
    country: "Greece",
    vessels: 5,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  },
  {
    companyName: "ABC-JIN CORP",
    imoNumber: "4223337",
    dnvId: 10309047,
    country: "Switzerland",
    vessels: 4,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  },
  {
    companyName: "PETROLEO BRASILEIRO S.A. - UO ES",
    imoNumber: "0161412",
    dnvId: 10309047,
    country: "Brazil",
    vessels: 3,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  },
  {
    companyName: "PETROLEO BRASILEIRO S.A. - UO ES",
    imoNumber: "0161412",
    dnvId: 10309047,
    country: "Brazil",
    vessels: 2,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  },
];

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

/* B  N  n  b */

function Company() {
  const [selectedRow, setSelectedRow] = useState(null);
  const history = useHistory();
  const navigateTo = () => history.push("/admin/vessel");

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    localStorage.getItem("role");
  }, []);

  return (
    <div className="content">
      {localStorage.getItem("role") == "admin" ? (
        <div>
          <Row>
            <Col lg="3" sm="6">
              <div class="tile company">
                <div class="header">
                  <div class="count">04</div>
                  <div class="title">Companies</div>
                </div>
                <div class="body">
                  <div class="title">TOTAL</div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div class="tile wide audit">
                <div class="header">
                  <div class="left">
                    <div class="count">02</div>
                    <div class="title">Over Due</div>
                  </div>
                  <div class="right">
                    <div class="count">34</div>
                    <div class="title">Due</div>
                  </div>
                </div>
                <div class="body">
                  <div class="title">SURVEY / AUDITS</div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div class="tile  attendence">
                <div class="header">
                  <div class="count">04</div>
                  <div class="title">Expiry within 180 days</div>
                </div>
                <div class="body">
                  <div class="title">CERTIFICATES</div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div class="tile wide finding">
                <div class="header">
                  <div class="left">
                    <div class="count">02</div>
                    <div class="title">Over Due</div>
                  </div>
                  <div class="right">
                    <div class="count">05</div>
                    <div class="title">Due</div>
                  </div>
                </div>
                <div class="body">
                  <div class="title">FINDINGS</div>
                </div>
              </div>
            </Col>
          </Row>

          <MaterialTable
            style={{
              marginTop: "10px",
            }}
            icons={tableIcons}
            title=""
            columns={[
              { title: "COMPANY NAME", field: "companyName" },
              { title: "IMO NUMBER", field: "imoNumber" },
              { title: "DNV ID", field: "dnvId" },
              {
                title: "COUNTRY",
                field: "country",
              },
            ]}
            data={[
              {
                companyName: "PETROLEO BRASILEIRO S.A. - UO ES",
                imoNumber: "0161412",
                dnvId: 10309047,
                country: "Brazil",
                vessels: 3,
                auditsOverDue: 0,
                auditsDue: 0,
                findingsOverDue: 5,
                findingsDue: 0,
                expiringCertificates: 10,
              },
              {
                companyName: "3116 Ltd.",
                imoNumber: "0161412",
                dnvId: 10687307,
                country: "Cayman Island",
                vessels: 2,
                auditsOverDue: 0,
                auditsDue: 0,
                findingsOverDue: 5,
                findingsDue: 0,
                expiringCertificates: 10,
              },
              {
                companyName: "A&L CF June(3) Limited",
                imoNumber: "0161412",
                dnvId: 10309047,
                country: "United Kingdom",
                vessels: 1,
                auditsOverDue: 0,
                auditsDue: 0,
                findingsOverDue: 5,
                findingsDue: 0,
                expiringCertificates: 10,
              },
              {
                companyName: "ABC Maritime AG",
                imoNumber: "1191412",
                dnvId: 10309047,
                country: "Greece",
                vessels: 5,
                auditsOverDue: 0,
                auditsDue: 0,
                findingsOverDue: 5,
                findingsDue: 0,
                expiringCertificates: 10,
              },
              // {
              //   companyName: "ABC-JIN CORP",
              //   imoNumber: "4223337",
              //   dnvId: 10309047,
              //   country: "Switzerland",
              //   vessels: 4,
              //   auditsOverDue: 0,
              //   auditsDue: 0,
              //   findingsOverDue: 5,
              //   findingsDue: 0,
              //   expiringCertificates: 10,
              // },
            ]}
            detailPanel={(rowData) => {
              return (
                <div
                  style={{
                    backgroundColor: "#eee",
                    padding: "5px",
                  }}
                >
                  <Card
                    style={{
                      width: "100%",
                      height: "100px",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <CardBody>
                      <Row style={{ textAlign: "center" }}>
                        <Col onClick={() => history.push("/admin/vessel")}>
                          <Badge count={14}>
                            <DirectionsBoatIcon
                              className="nc-icon nc-globe text-warning"
                              style={{
                                fontSize: "40px",
                              }}
                            ></DirectionsBoatIcon>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={3}>
                            <AssignmentIcon
                              className="nc-icon nc-globe text-success"
                              style={{
                                fontSize: "40px",
                              }}
                            ></AssignmentIcon>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={1}>
                            <AssignmentIcon
                              className="nc-icon nc-globe text-info"
                              style={{
                                fontSize: "40px",
                              }}
                            ></AssignmentIcon>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={5}>
                            <EventBusy
                              className="nc-icon nc-globe text-danger"
                              style={{
                                fontSize: "40px",
                              }}
                            ></EventBusy>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={5}>
                            <List
                              className="nc-icon nc-globe text-success"
                              style={{
                                fontSize: "40px",
                              }}
                            ></List>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={5}>
                            <List
                              className="nc-icon nc-globe text-info"
                              style={{
                                fontSize: "40px",
                              }}
                            ></List>
                          </Badge>
                        </Col>
                      </Row>
                      <Row style={{ textAlign: "center" }}>
                        <Col>Vessels</Col>
                        <Col>Audits Overdue</Col>
                        <Col>Audits Due</Col>
                        <Col>Expiring Certificates</Col>
                        <Col>Findings Overdue</Col>
                        <Col>Findings Due</Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              );
            }}
            onRowClick={(event, rowData, togglePanel) => {
              console.log(rowData);
              setSelectedRow(rowData.tableData.id);
              togglePanel();
            }}
            options={{
              search: true,
              paging: false,
              rowStyle: (rowData) => ({
                // backgroundColor:
                //   selectedRow === rowData.tableData.id ? "#59736c" : "",
                // color: selectedRow === rowData.tableData.id ? "white" : "",
                fontWeight: "bold",
                borderBottom: "10px solid #f0f0f0",
                borderTop: "10px solid #f0f0f0",
                borderCollapse: "separate",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",

                // margin: "10px",
                // padding: "10px",
                // borderCollapse: "separate",
                // borderSpacing: "0px 4px",
              }),
              headerStyle: {
                //backgroundColor: "#9fa0ff",
                //fontWeight: "bold",
                color: "cornflowerblue",
              },
            }}
          />
        </div>
      ) : (
        <div>
          <Row>
            <Col lg="3" sm="6">
              <div class="tile company">
                <div class="header">
                  <div class="count">04</div>
                  <div class="title">Companies</div>
                </div>
                <div class="body">
                  <div class="title">TOTAL</div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div class="tile wide audit">
                <div class="header">
                  <div class="left">
                    <div class="count">02</div>
                    <div class="title">Over Due</div>
                  </div>
                  <div class="right">
                    <div class="count">34</div>
                    <div class="title">Due</div>
                  </div>
                </div>
                <div class="body">
                  <div class="title">SURVEY / AUDITS</div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div class="tile  attendence">
                <div class="header">
                  <div class="count">04</div>
                  <div class="title">Expiry within 180 days</div>
                </div>
                <div class="body">
                  <div class="title">CERTIFICATES</div>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div class="tile wide finding">
                <div class="header">
                  <div class="left">
                    <div class="count">02</div>
                    <div class="title">Over Due</div>
                  </div>
                  <div class="right">
                    <div class="count">05</div>
                    <div class="title">Due</div>
                  </div>
                </div>
                <div class="body">
                  <div class="title">FINDINGS</div>
                </div>
              </div>
            </Col>
          </Row>

          <MaterialTable
            style={{
              marginTop: "10px",
            }}
            icons={tableIcons}
            title=""
            columns={[
              { title: "COMPANY NAME", field: "companyName" },
              { title: "IMO NUMBER", field: "imoNumber" },
              { title: "DNV ID", field: "dnvId" },
              {
                title: "COUNTRY",
                field: "country",
              },
            ]}
            data={[
              {
                companyName: "ANGLO - EASTERN",
                imoNumber: "0161412",
                dnvId: 10309047,
                country: "Brazil",
                vessels: 3,
                auditsOverDue: 0,
                auditsDue: 0,
                findingsOverDue: 5,
                findingsDue: 0,
                expiringCertificates: 10,
              },
            ]}
            detailPanel={(rowData) => {
              return (
                <div
                  style={{
                    backgroundColor: "#eee",
                    padding: "5px",
                  }}
                >
                  <Card
                    style={{
                      width: "100%",
                      height: "100px",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <CardBody>
                      <Row style={{ textAlign: "center" }}>
                        <Col onClick={() => history.push("/admin/vessel")}>
                          <Badge count={14}>
                            <DirectionsBoatIcon
                              className="nc-icon nc-globe text-warning"
                              style={{
                                fontSize: "40px",
                              }}
                            ></DirectionsBoatIcon>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={3}>
                            <AssignmentIcon
                              className="nc-icon nc-globe text-success"
                              style={{
                                fontSize: "40px",
                              }}
                            ></AssignmentIcon>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={1}>
                            <AssignmentIcon
                              className="nc-icon nc-globe text-info"
                              style={{
                                fontSize: "40px",
                              }}
                            ></AssignmentIcon>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={5}>
                            <EventBusy
                              className="nc-icon nc-globe text-danger"
                              style={{
                                fontSize: "40px",
                              }}
                            ></EventBusy>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={5}>
                            <List
                              className="nc-icon nc-globe text-success"
                              style={{
                                fontSize: "40px",
                              }}
                            ></List>
                          </Badge>
                        </Col>
                        <Col>
                          <Badge count={5}>
                            <List
                              className="nc-icon nc-globe text-info"
                              style={{
                                fontSize: "40px",
                              }}
                            ></List>
                          </Badge>
                        </Col>
                      </Row>
                      <Row style={{ textAlign: "center" }}>
                        <Col>Vessels</Col>
                        <Col>Audits Overdue</Col>
                        <Col>Audits Due</Col>
                        <Col>Expiring Certificates</Col>
                        <Col>Findings Overdue</Col>
                        <Col>Findings Due</Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              );
            }}
            onRowClick={(event, rowData, togglePanel) => {
              console.log(rowData);
              setSelectedRow(rowData.tableData.id);
              togglePanel();
            }}
            options={{
              search: true,
              paging: false,
              rowStyle: (rowData) => ({
                // backgroundColor:
                //   selectedRow === rowData.tableData.id ? "#59736c" : "",
                // color: selectedRow === rowData.tableData.id ? "white" : "",
                fontWeight: "bold",
                borderBottom: "10px solid #f0f0f0",
                borderTop: "10px solid #f0f0f0",
                borderCollapse: "separate",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",

                // margin: "10px",
                // padding: "10px",
                // borderCollapse: "separate",
                // borderSpacing: "0px 4px",
              }),
              headerStyle: {
                //backgroundColor: "#9fa0ff",
                fontWeight: "bold",
                color: "cornflowerblue",
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Company;
