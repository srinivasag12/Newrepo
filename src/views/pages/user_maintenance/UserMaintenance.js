import React, { useState, useEffect } from "react";
import "./UserMaintenance.css";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Modal, TabContent, } from "reactstrap";
import { Input, Tabs } from "antd";
import { Button, Radio, notification } from "antd";
import { forwardRef } from "react";
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
import ViewColumn from "@mui/icons-material/ViewColumn";
import Search from "@mui/icons-material/Search";
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
