import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Row, Col, ModalBody, NavLink } from "reactstrap";
import { Button, Radio, notification, Modal,Table } from "antd";
import "./UserMaintenance.css";
import { forwardRef } from "react";
import { Input, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import MaterialTable from "material-table";
import AddBox from "@mui/icons-material/AddBox";
import { GlobalOutlined } from "@ant-design/icons";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FieldBinaryOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
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
import { Tooltip } from "antd";
import SaveAlt from "@mui/icons-material/SaveAlt";
import ViewColumn from "@mui/icons-material/ViewColumn";
import Search from "@mui/icons-material/Search";
import company_logo1 from "assets/img/Anglo-Eastern.png";
import company_logo2 from "assets/img/Ptransocean.png";
import company_logo3 from "assets/img/abc.jpg";
import { useHistory } from "react-router-dom";
import { message, Upload } from 'antd';
import UserCertificates from "./UserCertificates";
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



function UserCertificateConfirmation() {


  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyImo, setCompanyImo] = useState("");
  const [horizontalTabs, setHorizontalTabs] = useState("home");
  const [selectedRow, setSelectedRow] = useState(null);
  const history = useHistory();


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

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


  return (
    <div className="content">

      <Card >
        <CardHeader class="bookauditheader"
          style={{
            backgroundColor: "rgb(0, 198, 253)",
            padding: "20px",
            /* width: 30%; */
            /* padding-left: 38px; */
            marginLeft: "5%",
            marginRight: "5%",
            borderRadius: "15px",
            marginTop: "-10px"
          }}>
          <h4 class="cardTitleWhite"><i class="fa fa-certificate"></i> CERTIFICATE/APPROVAL LETTER DETAILS</h4>
          {/* <p class ="cardCategoryWhite">Complete your profile</p> */}
        </CardHeader>
        <div style={{ marginTop: "20px" }}>
        
          <Table
            style={{
              marginTop: "10px", padding: "0px",
            }}
            icons={tableIcons}
            title=""
            columns={[
              { title: "COMPANY NAME", field: "companyName" },
              { title: "COMPANY IMO NUMBER", field: "imoNumber" },
              { title: "OFFICIAL ID", field: "officialId" },
            
            ]}
            data={[
              {
                companyName: "ANGLO - EASTERN",
                imoNumber: "0161412",
                officialId: "9030",
                country: "FULL",
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
                status: <span class="badge rounded-pill bg-primary">
                  ACTIVE
                </span>,
                edit: <i class="fa fa-certificate custom-icon-dowload"
                  style={{ background: "#1890ff" }}
                  aria-hidden="true" onClick={showModal}></i>

              },
              {
                companyName: "TRANSOCEAN OFFSHORE DEEPWATER DRILLING INC.",
                imoNumber: "0216161",
                officialId: "9047",
                country: "FULL",
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
                status: <span class="badge rounded-pill bg-primary">
                  ACTIVE
                </span>,
                edit: <i class="fa fa-certificate custom-icon-dowload"
                  style={{ background: "#1890ff" }}
                  aria-hidden="true" onClick={showModal}></i>

              },
              {
                companyName: "ABC Maritime AG",
                imoNumber: "1191412",
                officialId: "9760",
                country: "FULL",
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
                status: <span class="badge rounded-pill bg-info">
                 ACTIVE
                </span>,
                edit: <i class="fa fa-certificate custom-icon-dowload"
                  style={{ background: "#1890ff" }}
                  aria-hidden="true" onClick={showModal}></i>

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
                  <UserCertificates />

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
                
                fontWeight: "600",
                fontSize: "14px",
                borderBottom: "5px solid #f0f0f0",
                borderTop: "5px solid #f0f0f0",
                borderCollapse: "separate",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",

              
              }),
              headerStyle: {
             
                fontSize: "14px",
                color: "cornflowerblue",
              },
            }}
          />
        </div>
      </Card>


      <Modal style={{ marginTop: "100px", width: "700px" }}
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={[
          <div style={{ textAlign: "center" }}>
            <div className="footer_btn_section">
              <div></div>
              <Button type="primary" size="default"
                onClick={handleCancel}>
                APPROVE
              </Button>
              <Button type="primary" size="default" danger
                onClick={handleCancel}>
                NOT APPROVE
              </Button>
              <div></div>
            </div>
          </div>
        ]}

      >
        <div className="modal-header justify-content-center">
          <h6 className="title title-up">CERTFICATE APPROVAL</h6>
        </div>

        <h6 style={{
          marginTop: "10%",
          color: "rgb(0 0 0 / 54%)",
        }} align="center"> ARE YOU SURE YOU WANT TO APPROVE THIS CERTIFICATE</h6>
      </Modal>

      <Modal style={{ marginTop: "100px", width: "700px" }}
        onCancel={handleCancel1}
        visible={isModalVisible1}
        footer={[
          <div style={{ textAlign: "center" }}>
            <div className="footer_btn_section">
              <div></div>
              <Button type="primary" size="default"
                onClick={handleCancel1}>
                APPROVE
              </Button>
              <Button type="primary" size="default" danger
                onClick={handleCancel1}>
                NOT APPROVE
              </Button>
              <div></div>
            </div>
          </div>
        ]}

      >
        <div className="modal-header justify-content-center">
          <h6 className="title title-up">CERTFICATE APPROVAL</h6>
        </div>

        <h6 style={{
          marginTop: "10%",
          color: "rgb(0 0 0 / 54%)",
        }} align="center"> ARE YOU SURE YOU WANT TO APPROVE THIS LETTER</h6>
      </Modal>

    </div>
  );
}

export default UserCertificateConfirmation;
