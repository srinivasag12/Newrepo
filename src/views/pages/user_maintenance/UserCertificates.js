import React, { useState } from 'react';
import { Tabs,Modal,Button,notification,Collapse,Table} from "antd";
// import "../vessel_info/Audit.css";
import { useHistory } from "react-router-dom";
 
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";



const columns = [
  {
    title: "Vessel Name",
    dataIndex: "name",
    render(text, record) {
      return {
        props: {
          style: { color: record.color },
        },
        children: <div>{text}</div>,
      };
    }
  },
  {
    title: "IMO Number",
    dataIndex: "due_date",
  },
  {
    title: "Term",
    dataIndex: "window_range",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Request",
    dataIndex: "request",
  },
];


const { Panel } = Collapse;

function UserCertificates() {
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



  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  
  const openNotification = () => {
    setIsModalVisible1(false);
    setIsModalVisible(false);
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'REQUEST APPROVED',
      description:
        'CERTIFICATE HAS BEEN SEND TO THE COMPANY.',
      btn,
      key,
      onClose: close,
    });
  };
  const openNotification1 = () => {
    setIsModalVisible1(false);
    setIsModalVisible(false);
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'REQUEST APPROVED',
      description:
        'LETTER HAS BEEN SEND TO THE COMPANY.',
      btn,
      key,
      onClose: close,
    });
  };
const { TabPane } = Tabs;



  const dataISM = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}> Safety Management Certificate (SMC)</p>,
      due_date: <p style={{fontSize: "14px" }}>8009777</p>,
      window_range: <p style={{fontSize: "14px" }}>INITIAL</p>,
      status: <p style={{fontSize: "14px" }}> <span class="badge rounded-pill bg-primary">
      APPROVED
    </span></p>,
      request: <p style={{fontSize: "14px" }}><i class="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={showModal}></i></p>,
    },
    {
      key: "2",
      name: <p style={{fontSize: "14px" }}>MLC Certificate</p>,
      due_date: <p style={{fontSize: "14px" }}>8009776</p>,
      window_range: <p style={{fontSize: "14px" }}>INTERMEDIATE</p>,
      status: <p style={{fontSize: "14px" }}> <span class="badge rounded-pill bg-danger">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i class="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={showModal}></i></p>,
    },
    {
      key: "3",
      name: <p style={{fontSize: "14px" }}>SSP Approval Letter</p>,
      due_date: <p style={{fontSize: "14px" }}>8001230</p>,
      window_range: <p style={{fontSize: "14px" }}>INITIAL</p>,
      status: <p style={{fontSize: "14px" }}><span class="badge rounded-pill bg-danger">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i class="fa fa-file custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={showModal1}></i></p>,     
    },
    {
      key: "4",
      name: <p style={{fontSize: "14px" }}>SOPEP Approval Letter</p>,
      due_date: <p style={{fontSize: "14px" }}>9302633</p>,
      window_range: <p style={{fontSize: "14px" }}>AMENDMENT</p>,
      status: <p style={{fontSize: "14px" }}><span class="badge rounded-pill bg-danger">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i class="fa fa-file custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={showModal1}></i></p>,
    },
  ];


  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    console.log("panel", panel);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>

      <div style={{padding:"10px"}}>

{/*        
          <Card style={cardcss}>
            <div style={subtypetextcss}>MSC</div></Card> */}
            {/* <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "10px" }} align="left">MSC</p> */}
            <Table 
              columns={columns}
              dataSource={dataISM}
              size="small"
              pagination={false}
            />
          
        
      </div>
      <Modal style={{ marginTop: "100px", width: "700px" }}
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={[
          <div style={{ textAlign: "center" }}>
            <div className="footer_btn_section">
              <div></div>
              <Button type="primary" size="default"
              onClick={openNotification}>
                APPROVE
              </Button>
              <Button type="primary" size="default" danger
                onClick={handleCancel}>
               REJECT
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
        }} align="center">ARE YOU SURE,</h6>
        <h6 style={{
          color: "rgb(0 0 0 / 54%)",
        }} align="center"> DO YOU WANT TO APPROVE THIS CERTIFICATE ?</h6>
      </Modal>

      <Modal style={{ marginTop: "100px", width: "700px" }}
        onCancel={handleCancel1}
        visible={isModalVisible1}
        footer={[
          <div style={{ textAlign: "center" }}>
            <div className="footer_btn_section">
              <div></div>
              <Button type="primary" size="default"
                onClick={openNotification1}>
                APPROVE
              </Button>
              <Button type="primary" size="default" danger
                onClick={handleCancel1}>
                REJECT
              </Button>
              <div></div>
            </div>
          </div>
        ]}

      >
        <div className="modal-header justify-content-center">
          <h6 className="title title-up">LETTER APPROVAL</h6>
        </div>
        <h6 style={{
          marginTop: "10%",
          color: "rgb(0 0 0 / 54%)",
        }} align="center">ARE YOU SURE,</h6>
        <h6 style={{
          color: "rgb(0 0 0 / 54%)",
        }} align="center"> DO YOU WANT TO APPROVE THIS LETTER ?</h6>
      </Modal>



    </div>
  )
}

export default UserCertificates
