import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Row, Col, Modal, ModalBody, NavLink } from "reactstrap";
import { Button, Radio, notification,Table } from "antd";
import "./UserMaintenance.css";
import { forwardRef } from "react";
import { Input, Tabs, Checkbox } from "antd";
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
import UserComapanyDetails from "./UserComapanyDetails";
import { Avatar, Image } from "antd";
import { ContactsOutlined } from "@ant-design/icons";

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



function AuditCreateUpdate() {


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


    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
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
                <i class="fa fa-plus" aria-hidden="true"></i> Upload Company Logo
            </div>
        </div>
    );

    return (
        <div className="content">
            <Card>
                <div className="right">
                    <Tabs type="card">
                        <TabPane tab="AUDITOR LIST" key="1" style={{ backgroundColor: "#ffff " }}>
                            <MaterialTable
                                style={{
                                    marginTop: "10px", padding: "0px",
                                }}
                                icons={tableIcons}
                                title=""
                                columns={[
                                    // {
                                    //     title: "COMPANY LOGO",
                                    //     field: "expiringCertificates",
                                    // },
                                    { title: "FIRST NAME", field: "firstname" },
                                    { title: "LAST NAME", field: "lastname" },
                                    { title: "AUDITOR NAME", field: "auditorname" },
                                    {
                                        title: "AUDITOR DESIGNATION",
                                        field: "designation",
                                    },
                                    {
                                        title: "AUDITOR EMAIL ID",
                                        field: "email",
                                    },
                                    {
                                        title: "EDIT",
                                        field: "edit",
                                    },
                                ]}
                                data={[
                                    {
                                        firstname: "Hong ",
                                        lastname: "Kyung Kim",
                                        auditorname: "Hong Kyung",
                                        designation: "AUDITOR",
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
                                        email: "Hong@registercomanyname.com",
                                        edit: <i class="fa fa-edit custom-icon-dowload"
                                            style={{ background: "rgb(82, 183, 136)", cursor: "pointer" }}
                                            aria-hidden="true" onClick={() => setModal(true)}></i>

                                    },
                                    {
                                        firstname: "Vangelis Moutafis",
                                        lastname: "Moutafis",
                                        auditorname: "VangelisMouta12",
                                        designation: "AUDITOR",
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
                                        email: "VangelisMoutafis@registercomanyname.com",
                                        edit: <i class="fa fa-edit custom-icon-dowload"
                                            style={{ background: "rgb(82, 183, 136)", cursor: "pointer" }}
                                            aria-hidden="true" onClick={() => setModal(true)}></i>

                                    },
                                    {
                                        firstname: "John",
                                        lastname: "Triantafyllou",
                                        auditorname: "TriantafyllouJohn",
                                        designation: "AUDITOR",
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
                                        email: "johntriantafyllou@registercomanyname.com",
                                        edit: <i class="fa fa-edit custom-icon-dowload"
                                            style={{ background: "rgb(82, 183, 136)", cursor: "pointer" }}
                                            aria-hidden="true" onClick={() => setModal(true)}></i>

                                    },
                                    {
                                        firstname: "Anil ",
                                        lastname: "Jain",
                                        auditorname: "Jain02",
                                        designation: "AUDITOR",
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
                                        email: "Aniljain@registercomanyname.com",
                                        edit: <i class="fa fa-edit custom-icon-dowload"
                                            style={{ background: "rgb(82, 183, 136)", cursor: "pointer" }}
                                            aria-hidden="true" onClick={() => setModal(true)}></i>

                                    },

                                ]}

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

                        <TabPane tab="CREATE AUDITOR" key="2" style={{ backgroundColor: "#ffff " }}>
                            <Card>
                                <div className="right">
                                    <Button
                                        type="primary"
                                        icon={<DownloadOutlined size="large" />}
                                        size="large"
                                        style={{ float: "right" }}
                                    >
                                        Retrieve Information
                                    </Button>
                                </div>

                                <div style={{ textAlign: "center", padding: "20px" }}>
                                    <Avatar size={40} shape="square" icon={<UserOutlined />} />
                                </div>

                                <div className="userMaintenanceCard1">
                                    <div>
                                        <Input
                                            size="large"
                                            placeholder="First Name"
                                            prefix={<UserOutlined style={{ color: "cadetblue" }} />}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            size="large"
                                            placeholder="Last Name"
                                            prefix={
                                                <UserOutlined style={{ color: "darkolivegreen" }} />
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="userMaintenanceCard">
                                    <div>
                                        <Input
                                            size="large"
                                            placeholder="Auditor Name"
                                            prefix={<UserOutlined style={{ color: "cadetblue" }} />}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            size="large"
                                            placeholder="Auditor Designation"
                                            prefix={
                                                <ContactsOutlined
                                                    style={{ color: "darkolivegreen" }}
                                                />
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            size="large"
                                            placeholder="Auditor Email ID"
                                            prefix={<MailOutlined style={{ color: "skyblue" }} />}
                                        />
                                    </div>
                                </div>

                                <div style={{ textAlign: "center" }}>
                                    <Checkbox onChange={onChange}>
                                        <p style={{ fontWeight: "bold" }}>
                                            Access to all Company
                                        </p>
                                    </Checkbox>
                                </div>

                                <div style={{ textAlign: "center" }}>
                                    <div className="footer_btn_section">
                                        <div></div>
                                        <Button type="primary" size="default" danger>
                                            Clear
                                        </Button>

                                        <Button type="primary" size="default" style={{backgroundColor:"#1890ff"}}>
                                            Save
                                        </Button>
                                        <div></div>
                                    </div>
                                </div>
                            </Card>
                        </TabPane>
                    </Tabs>
                </div>
            </Card>


            <Modal style={{ width: "700px" }}
                isOpen={modal1} toggle={() => setModal(false)}>
                <div className="modal-header justify-content-center">
                    <button
                     style={{float:"right"}}
                        className="close"
                        type="button"
                        onClick={() => setModal(false)}
                    >
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <h4 className="title title-up">UPDATE AUDITOR</h4>
                </div>
                {/* <Card> */}
                    {/* <div className="right">
                        <Button
                            type="primary"
                            icon={<DownloadOutlined size="large" />}
                            size="large"
                            style={{ float: "right" }}
                        >
                            Retrieve Information
                        </Button>
                    </div> */}

                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <Avatar size={40} shape="square" icon={<UserOutlined />} />
                    </div>

                    <div className="userMaintenanceCard1">
                        <div>
                            <Input
                                size="large"
                                placeholder="First Name"
                                prefix={<UserOutlined style={{ color: "cadetblue" }} />}
                            />
                        </div>

                        <div>
                            <Input
                                size="large"
                                placeholder="Last Name"
                                prefix={
                                    <UserOutlined style={{ color: "darkolivegreen" }} />
                                }
                            />
                        </div>
                    </div>

                    <div className="userMaintenanceCard">
                        <div>
                            <Input
                                size="large"
                                placeholder="Auditor Name"
                                prefix={<UserOutlined style={{ color: "cadetblue" }} />}
                            />
                        </div>

                        <div>
                            <Input
                                size="large"
                                placeholder="Auditor Designation"
                                prefix={
                                    <ContactsOutlined
                                        style={{ color: "darkolivegreen" }}
                                    />
                                }
                            />
                        </div>

                        <div>
                            <Input
                                size="large"
                                placeholder="Auditor Email ID"
                                prefix={<MailOutlined style={{ color: "skyblue" }} />}
                            />
                        </div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <Checkbox onChange={onChange}>
                            <p style={{ fontWeight: "bold" }}>
                                Access to all Company
                            </p>
                        </Checkbox>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <div className="footer_btn_section">
                            <div></div>
                            <Button type="primary" size="default" danger
                             onClick={() => setModal(false)}>
                                Clear
                            </Button>

                            <Button type="primary" size="default" style={{backgroundColor:"#1890ff"}}
                             onClick={() => setModal(false)}>
                                Save
                            </Button>
                            <div></div>
                        </div>
                    </div>
                {/* </Card> */}

            </Modal>
        </div>
    );
}

export default AuditCreateUpdate;
