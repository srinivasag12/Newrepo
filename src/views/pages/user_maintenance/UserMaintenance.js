import React, { useState, useEffect } from "react";
import "./UserMaintenance.css";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Modal, TabContent, } from "reactstrap";
import { Input, Tabs } from "antd";
import { Button, Radio, notification } from "antd";
import { forwardRef } from "react";
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
import { Select } from "antd";
import UpdateUserMaintence from "./UpdateUserMaintence"
import UserOwnerupdate from "./UserOwnerupdate"
import AuditCreateUpdate from "./AuditCreateUpdate"

const { TabPane } = Tabs;
const { Option } = Select;
// const [modal, setModal] = React.useState(false);
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Success",
    description: "Auditor created successfully.",
    placement: "topLeft",
  });
};
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




function UserMaintenance() {
  const [role, setRole] = useState("Company");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyImo, setCompanyImo] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [horizontalTabs, setHorizontalTabs] = useState("home");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

 
  useEffect(() => {
    console.log("Use Effect Role ::", role);
  }, [role]);

  const [modal1, setModal] = React.useState(false);

  function handleChange(value) {
    console.log(value.value);
    console.log(role);
    setRole(value.value);
    console.log(role);
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const handleCompanyNameChange = (event) => {
    console.log("handleCompanyNameChange", event.target.value);
    setCompanyName(event.target.value);
  };

  const handleCompanyAddressChange = (event) => {
    console.log("handleCompanyAddressChange", event.target.value);
    setCompanyAddress(event.target.value);
  };

  const handleCompanyImoChange = (event) => {
    console.log("handleCompanyImoChange", event.target.value);
    setCompanyImo(event.target.value);
  };

  function retriveInfo() {
    console.log("retriveInfo");
    setCompanyName("PETROLEO BRASILEIRO S.A. - UO ES");
    setCompanyAddress(
      "27TH FLOOR, SOUTH ISLAND PLACE 8 WONG CHUK HANG ROAD HONG KONG"
    );
    setCompanyImo("0161412");
  }

  const [expanded, setExpanded] = useState("panel1");

  const handleChangeforcompany = (panel) => (event, isExpanded) => {
    console.log("panel", panel);
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className="content">
      <div>
        <Card className="roleCard">
          <div>
            <p>
              {localStorage.getItem("role") == "admin" ? (
                <Select
                  size="large"
                  labelInValue="Role"
                  placeholder="Role"
                  defaultValue={{ value: "Company" }}
                  style={{ width: 300 }}
                  onChange={handleChange}
                >
                   <Option value="Company">Company</Option>
                  <Option value="Auditor">Auditor</Option>
                </Select>
              ) : (
                <Select
                  size="large"
                  labelInValue="Role"
                  placeholder="Role"
                  defaultValue={{ value: "User" }}
                  style={{ width: 300 }}
                  onChange={handleChange}
                >
                  <Option value="User">User</Option>
                </Select>
              )}
            </p>
          </div>
        </Card>
      </div>

      <div></div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {localStorage.getItem("role") == "admin" ? (
        <div>
          {(() => {
            if (role === "Auditor") {
              return (
                 <AuditCreateUpdate/>
               
              );
            } else if (role === "Company") {
              return (
               <UpdateUserMaintence />
              );
            }
          })()}
        </div>
      ) : (
       <UserOwnerupdate/>
      // <div>demo2</div>
      )}
    </div>
  );
}

export default UserMaintenance;