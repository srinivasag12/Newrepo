import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Row, Col, Modal, ModalBody, NavLink } from "reactstrap";
import { Button, Radio, notification } from "antd";
import "./UserMaintenance.css";
import { forwardRef } from "react";
import { Input, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import { GlobalOutlined } from "@ant-design/icons";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FieldBinaryOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
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
import { Tooltip } from "antd";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import company_logo1 from "assets/img/Anglo-Eastern.png";
import company_logo2 from "assets/img/Ptransocean.png";
import company_logo3 from "assets/img/abc.jpg";
import { useHistory } from "react-router-dom";
import { message, Upload } from 'antd';
// import UserComapanyDetails from "./UserComapanyDetails";

const { TabPane } = Tabs;


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


const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};



function UpdateUserMaintence() {


  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyImo, setCompanyImo] = useState("");


  const [horizontalTabs, setHorizontalTabs] = useState("home");

  const [selectedRow, setSelectedRow] = useState(null);
  const history = useHistory();
  const navigateTo = () => history.push("/admin/vessel");

  const onSearch = (value) => console.log(value);
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
  useEffect(() => {
    localStorage.getItem("role");
  }, []);
  const [modal1, setModal] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChanges = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  function retriveInfo() {
    console.log("retriveInfo");
    setCompanyName("PETROLEO BRASILEIRO S.A. - UO ES");
    setCompanyAddress(
      "27TH FLOOR, SOUTH ISLAND PLACE 8 WONG CHUK HANG ROAD HONG KONG"
    );
    setCompanyImo("0161412");
  }
  const uploadButton = (
    <div>
      {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <div
        style={{
          marginTop: 8,
          color: "#1890ff",
          fontWeight: "600"
        }}
      >
        <i className="fa fa-plus" aria-hidden="true"></i> Upload Company Logo
      </div>
    </div>
  );

  return (
    <div className="content">

      <Card>
        <div>
          <Tabs type="card">
            <TabPane tab="COMPANY LIST" key="1" style={{ backgroundColor: "#ffff " }}>
              <MaterialTable
                style={{
                  marginTop: "10px", padding: "0px",
                }}
                icons={tableIcons}
                title=""
                columns={[
                  {
                    title: "COMPANY LOGO",
                    field: "expiringCertificates",
                  },
                  { title: "COMPANY NAME", field: "companyName" },
                  { title: "IMO NUMBER", field: "imoNumber" },
                  { title: "OFFICIAL ID", field: "officialId" },
                  {
                    title: "COUNTRY",
                    field: "country",
                  },
                  {
                    title: "STATUS",
                    field: "status",
                  },
                  {
                    title: "EDIT",
                    field: "edit",
                  },
                ]}
                data={[
                  {
                    companyName: "ANGLO - EASTERN",
                    imoNumber: "0161412",
                    officialId: 9030,
                    country: "Brazil",
                    vessels: 3,
                    auditsOverDue: 0,
                    auditsDue: 0,
                    findingsOverDue: 5,
                    findingsDue: 0,
                    expiringCertificates: <img
                      src={company_logo1}
                      alt="react-logo"
                      style={{ background: "white" }}
                    />,
                    status: <span className="badge rounded-pill bg-primary">
                      ACTIVE
                    </span>,
                     edit: <i   className="fa fa-edit custom-icon-dowload"
                     style={{ background: "rgb(82, 183, 136)" }}
                     aria-hidden="true" onClick={() => setModal(true)}></i>
                 
                  },
                  {
                    companyName: "TRANSOCEAN OFFSHORE DEEPWATER DRILLING INC.",
                    imoNumber: "0216161",
                    officialId: 9047,
                    country: "Vernier, Switzerland",
                    vessels: 3,
                    auditsOverDue: 0,
                    auditsDue: 0,
                    findingsOverDue: 5,
                    findingsDue: 0,
                    expiringCertificates: <img
                      src={company_logo2}
                      alt="react-logo"
                      style={{ background: "white" }}
                    />,
                    status: <span className="badge rounded-pill bg-primary">
                      ACTIVE
                    </span>,
                      edit: <i   className="fa fa-edit custom-icon-dowload"
                      style={{ background: "rgb(82, 183, 136)" }}
                      aria-hidden="true" onClick={() => setModal(true)}></i>
                  
                  },
                  {
                    companyName: "ABC Maritime AG",
                    imoNumber: "1191412",
                    officialId: 9760,
                    country: "Greece",
                    vessels: 5,
                    auditsOverDue: 0,
                    auditsDue: 0,
                    findingsOverDue: 5,
                    findingsDue: 0,
                    expiringCertificates: <img
                      src={company_logo3}
                      alt="react-logo"
                      style={{ background: "white" }}
                    />,
                    status: <span className="badge rounded-pill bg-danger">
                      INACTIVE
                    </span>,
                     edit: <i   className="fa fa-edit custom-icon-dowload"
                     style={{ background: "rgb(82, 183, 136)" }}
                     aria-hidden="true" onClick={() => setModal(true)}></i>
                 
                  },
                  // {
                  //   companyName: "FEDERAL ASAHI.",
                  //   imoNumber: "9564413",
                  //   officialId: 7307,
                  //   country: "Canada",
                  //   vessels: 2,
                  //   auditsOverDue: 0,
                  //   auditsDue: 0,
                  //   findingsOverDue: 5,
                  //   findingsDue: 0,
                  //   expiringCertificates: 10,
                  //   address: "112 Robinson Road #04-04, 068925 SG",
                  // },
                  // {
                  //   companyName: "3116 Ltd.",
                  //   imoNumber: "1185412",
                  //   officialId: 8307,
                  //   country: "Cayman Island",
                  //   vessels: 2,
                  //   auditsOverDue: 0,
                  //   auditsDue: 0,
                  //   findingsOverDue: 5,
                  //   findingsDue: 0,
                  //   expiringCertificates: 10,
                  //   status: <button style={{marginLeft:"-10px",width: "85px"}}
                  //   className="bookbtn btn-outline-danger"
                  // >
                  //   INACTIVE
                  // </button>
                  // },
                  // {
                  //   companyName: "A&L CF June(3) Limited",
                  //   imoNumber: "1261412",
                  //   officialId: 9088,
                  //   country: "United Kingdom",
                  //   vessels: 1,
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
                      {/* <UserComapanyDetails /> */}

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
                    fontWeight: "600",
                    fontSize: "14px",
                    borderBottom: "5px solid #f0f0f0",
                    borderTop: "5px solid #f0f0f0",
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
                    fontSize: "14px",
                    color: "cornflowerblue",
                  },
                }}
              />
            </TabPane>

            <TabPane tab="CREATE COMPANY" key="2" style={{ backgroundColor: "#ffff " }}>
              <div className="right" align="right">
                <Button
                  type="primary"
                  icon={<DownloadOutlined size="large" />}
                  size="large"
                  style={{ float: "right" }}
                  onClick={retriveInfo}
                >
                  Retrieve Information
                </Button>
              </div>
              <div className="logo" style={{ gridTemplateColumns: "1fr" }}>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChanges}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: '100%',
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
              <div className="userMaintenanceCard">
                <div>
                  <Input
                    size="large"
                    placeholder="First Name"
                    prefix={<UserOutlined />}
                  />
                </div>

                <div>
                  <Input
                    size="large"
                    placeholder="Last Name"
                    prefix={<UserOutlined />}
                  />
                </div>

                <div>
                  <Input
                    size="large"
                    placeholder="Login ID/Email ID"
                    prefix={<MailOutlined />}
                  />
                </div>
              </div>

              <div className="userMaintenanceCard">
                <div>
                  <Input
                    value={companyName}
                    onChange={handleCompanyNameChange}
                    size="large"
                    placeholder="Company Name"
                    prefix={
                      <GlobalOutlined style={{ color: "cadetblue" }} />
                    }
                  />
                </div>

                <div>
                  <Tooltip title={companyAddress}>
                    <Input
                      value={companyAddress}
                      onChange={handleCompanyAddressChange}
                      size="large"
                      placeholder="Company Address"
                      prefix={
                        <EnvironmentOutlined
                          style={{ color: "palevioletred" }}
                        />
                      }
                    />
                  </Tooltip>
                </div>

                <div>
                  <Input
                    value={companyImo}
                    onChange={handleCompanyImoChange}
                    size="large"
                    placeholder="Company Imo No."
                    prefix={
                      <FieldBinaryOutlined style={{ color: "seagreen" }} />
                    }
                  />
                </div>
              </div>

              {/* <div style={{ textAlign: "center" }}>
<Checkbox onChange={onChange}>
<p style={{ fontWeight: "bold" }}>Access to all Company</p>
</Checkbox>
</div> */}

              <div style={{ textAlign: "center" }}>
                <div className="footer_btn_section">
                  <div></div>
                  <Button type="primary" size="default" danger>
                    Clear
                  </Button>

                  <Button type="primary" size="default" >
                    Save
                  </Button>
                  <div></div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Card>



      <Modal className="modal-dialog1"
          isOpen={modal1} toggle={() => setModal(false)}>
             <div className="modal-header justify-content-center">
                    <button
                        className="close"
                        type="button"
                        onClick={() => setModal(false)}
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <h4 className="title title-up">CREATE COMPANY</h4>
                </div>
         {/* <div className="right" align="right">
                <Button
                  type="primary"
                  icon={<DownloadOutlined size="large" />}
                  size="large"
                  style={{ float: "right" }}
                  onClick={retriveInfo}
                >
                  Retrieve Information
                </Button>
              </div> */}
              <div className="logo" style={{ gridTemplateColumns: "1fr" }}>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChanges}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: '100%',
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
              <div className="userMaintenanceCard">
                <div>
                  <Input
                    size="large"
                    placeholder="First Name"
                    prefix={<UserOutlined />}
                  />
                </div>

                <div>
                  <Input
                    size="large"
                    placeholder="Last Name"
                    prefix={<UserOutlined />}
                  />
                </div>

                <div>
                  <Input
                    size="large"
                    placeholder="Login ID/Email ID"
                    prefix={<MailOutlined />}
                  />
                </div>
              </div>

              <div className="userMaintenanceCard">
                <div>
                  <Input
                    value={companyName}
                    onChange={handleCompanyNameChange}
                    size="large"
                    placeholder="Company Name"
                    prefix={
                      <GlobalOutlined style={{ color: "cadetblue" }} />
                    }
                  />
                </div>

                <div>
                  <Tooltip title={companyAddress}>
                    <Input
                      value={companyAddress}
                      onChange={handleCompanyAddressChange}
                      size="large"
                      placeholder="Company Address"
                      prefix={
                        <EnvironmentOutlined
                          style={{ color: "palevioletred" }}
                        />
                      }
                    />
                  </Tooltip>
                </div>

                <div>
                  <Input
                    value={companyImo}
                    onChange={handleCompanyImoChange}
                    size="large"
                    placeholder="Company Imo No."
                    prefix={
                      <FieldBinaryOutlined style={{ color: "seagreen" }} />
                    }
                  />
                </div>
              </div>

              {/* <div style={{ textAlign: "center" }}>
<Checkbox onChange={onChange}>
<p style={{ fontWeight: "bold" }}>Access to all Company</p>
</Checkbox>
</div> */}

              <div style={{ textAlign: "center" }}>
                <div className="footer_btn_section">
                  <div></div>
                  <Button type="primary" size="default" danger
                   onClick={() => setModal(false)}>
                    Clear
                  </Button>

                  <Button type="primary" size="default" 
                   onClick={() => setModal(false)}>
                    Save
                  </Button>
                  <div></div>
                </div>
              </div>
        </Modal>

    </div>
  );
}

export default UpdateUserMaintence;
