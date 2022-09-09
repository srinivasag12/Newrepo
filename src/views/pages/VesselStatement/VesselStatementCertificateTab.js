import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Tabs } from "antd";
import "./VesselStatement.css";
import { Tag, Divider, Modal } from "antd";
import { Table,Button,notification} from "antd";
import { useHistory } from "react-router-dom";
import Cerificate_Copy from "assets/img/Certificatepdf.pdf";
import Letter_Copy from "assets/img/Letter.pdf";

const { TabPane } = Tabs;

const columnsISPS = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Number",
    dataIndex: "certificate_no",
  },
  {
    title: "Date",
    dataIndex: "issue_date",
  },
  {
    title: "Approval Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Term",
    dataIndex: "term",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "State Date ",
    dataIndex: "state_date",
  },
  {
    title: "Preview ",
    dataIndex: "preview",
  },
  {
    title: "Request",
    dataIndex: "approval",
  }
];

const columnsISPS1 = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Number",
    dataIndex: "certificate_no",
  },
  {
    title: "Date",
    dataIndex: "issue_date",
  },
  {
    title: "Approval Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Term",
    dataIndex: "term",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "State Date ",
    dataIndex: "state_date",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Approval",
    dataIndex: "request",
  },
];

const columnsISM = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Number",
    dataIndex: "certificate_no",
  },
  {
    title: "Date	",
    dataIndex: "issue_date",
  },
  {
    title: "Expiration/Extended Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Term",
    dataIndex: "term",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "Preview ",
    dataIndex: "preview",
  },
  {
    title: "Request ",
    dataIndex: "approval",
  }
];
const columnsMSC = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Number",
    dataIndex: "certificate_no",
  },
  {
    title: "Date	",
    dataIndex: "issue_date",
  },
  {
    title: "Expiration/Extended Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Term",
    dataIndex: "term",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Approval",
    dataIndex: "request",
  },
];

const columnsMLC = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Certificate No.	",
    dataIndex: "certificate_no",
  },
  {
    title: "Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "Expiration/Extended Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Term",
    dataIndex: "term",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "State Date ",
    dataIndex: "state_date",
  },
  {
    title: "Preview ",
    dataIndex: "preview",
  }
];


function VesselStatementCertificateTab() {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLetterPDFModalVisible, setIsLetterPDFModalVisible] = useState(false);
  const [isCertificateModalVisible, certificateModalVisible] = useState(false);
  const [isLetterModalVisible,letterModalVisible] = useState(false);
  const [isCertpermissionModalVisible,certpermissionModalVisible] = useState(false);
  const [isLetrPermissionModalVisible,letrPermissionModalVisible] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showLetterPDFModal = () => {
    setIsLetterPDFModalVisible(true);
  };
  const certificateRequestModal = () => {
    certificateModalVisible(true);
  };
  const letterRequestModal = () => {
   letterModalVisible(true);
  };
  const certpermissinModal = () => {
    certpermissionModalVisible(true);
   };
   const letrpermissionModal = () => {
    letrPermissionModalVisible(true);
   };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsLetterPDFModalVisible(false);
  };
  const certificatehandleCancel = () => {
    certificateModalVisible(false);
  };
  const letterhandleCancel = () => {
   letterModalVisible(false);
  };
  const certpermissionCancel = () => {
    certpermissionModalVisible(false);
  };
  const letrpermissionCancel = () => {
    letrPermissionModalVisible(false);
  };

  const openCertificateNotification = () => {
    certpermissionModalVisible(false);
    notification.open({
      description:
        'Certificate Has Been Send To The Company',
        style:{backgroundColor:"rgb(107, 208, 152)",color:"white"},
      onClose: close,
    });
  };
  const openLetterNotification = () => {
    letrPermissionModalVisible(false);
    // const key = `open${Date.now()}`;
    // const btn = (
    //   <Button type="primary" size="small" onClick={() => notification.close(key)}>
    //     Confirm
    //   </Button>
    // );
    notification.open({
      // message: 'REQUEST APPROVED',
      description:
        'Letter Has Been Send To The Company',
        style:{backgroundColor:"rgb(107, 208, 152)",color:"white"},
      // btn,
      // key,
      onClose: close,
    });
  };
 

  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  
  const openNotification = () => {
  certificateModalVisible(false);
   letterModalVisible(false);
    // const key = `open${Date.now()}`;
    // const btn = (
    //   <Button type="primary" size="small" onClick={() => notification.close(key)}>
    //     Confirm
    //   </Button>
    // );
    notification.open({
      // message: 'REQUEST ',
      description:
        'Request Sent Successfully',
        style:{backgroundColor:"rgb(107, 208, 152)",color:"white"},
      // btn,
      // key,
      onClose: close,
    });
  };


  const approvalRequest = () => {
      notification.open({
        description:
          'Request Already Sent',
          style:{backgroundColor:"rgb(251, 198, 88)",color:"white"},
        onClose: close,
      });
    };
    const certificatedApproved = () => {
      notification.open({
        description:
          'Certificate Already Approved',
          style:{backgroundColor:"rgb(251, 198, 88)",color:"white"},
        onClose: close,
      });
    };
    const letterApproved = () => {
      notification.open({
        description:
          'Certificate Already Approved',
          style:{backgroundColor:"rgb(251, 198, 88)",color:"white"},
        onClose: close,
      });
    };
const { TabPane } = Tabs;

  const dataISPS = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px", }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>International Ship Security Certificates (ISSC)</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8009773-SM-297F-21</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
      Preview: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
  ];

  const dataISM = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>Safety Management Certificate (SMC) </p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8009777-SS-296H-21</p>,
      issue_date: <p style={{ fontSize: "14px" }}>15-Jun-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>20-Jun-2026</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={approvalRequest}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-success">
      APPROVED
    </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={certificatedApproved}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>International Ship Security Certificates (ISSC)</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8009773-SM-297F-21</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-May-2026</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={certificateRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">
      NOT APPROVED
    </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={certpermissinModal}></i></p>,
    },
    {
      key: "3",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>MLC Certificate</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8009776-ML-400J-21</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-Aug-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-Aug-2026</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={certificateRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill" style={{background: "rgb(0 0 0 / 25%)"}}>
      NO REQUEST
    </span></p>,
      request: <p style={{fontSize: "14px"}}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none" }}
      aria-hidden="true" onClick={certpermissinModal}></i></p>,
    },
    {
      key: "4",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>International Ship Security Certificates (ISSC)</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8009776-SM-296F-21</p>,
      issue_date: <p style={{ fontSize: "14px" }}>06-jan-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>24-may-2026</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={certificateRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-danger">
     REJECTED
    </span></p>,
      request: <p style={{fontSize: "14px"}}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none" }}
      aria-hidden="true" onClick={certpermissinModal}></i></p>,
    },
  ];

  const dataMLC = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>MLC Certificate</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8009776-ML-400J-21</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-Aug-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-Aug-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
    },
  ];

  const dataASI = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>Annual Safety Inspection(ASI)</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>800440-ML-297E-20</p>,
      issue_date: <p style={{ fontSize: "14px" }}>10-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>16-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];

  const dataDMLCII = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>DMLC II Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8004840</p>,
      issue_date: <p style={{ fontSize: "14px" }}>10-Apr-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>16-Apr-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={approvalRequest}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>DMLC II Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8004540</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill" style={{background: "rgb(0 0 0 / 25%)"}}>NO REQUEST </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none"}}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];

  const dataSSP = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px", marginRight: "30px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>SSP Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8001230</p>,
      issue_date: <p style={{ fontSize: "14px" }}>01-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>05-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-success">Approved </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{background: "#1890ff",cursor: "pointer"}}
      aria-hidden="true" onClick={letterApproved}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>SSP Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8002345</p>,
      issue_date: <p style={{ fontSize: "14px" }}>01-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>05-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={approvalRequest}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px"}}> <span className="badge rounded-pill" style={{background: "rgb(0 0 0 / 25%)"}}>NO REQUEST </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];

  const dataIHM = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px", marginRight: "18px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>IHM Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8005678</p>,
      issue_date: <p style={{ fontSize: "14px" }}>08-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>13-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-success"> APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letterApproved}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>IHM Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8004534</p>,
      issue_date: <p style={{ fontSize: "14px" }}>08-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>13-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={approvalRequest}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];

  const dataSOPEP = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>SOPEP Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8003234</p>,
      issue_date: <p style={{ fontSize: "14px" }}>28-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>02-Jun-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill" style={{background: "rgb(0 0 0 / 25%)"}}>NO REQUEST </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none"}}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>SOPEP Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8004140</p>,
      issue_date: <p style={{ fontSize: "14px" }}>28-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>02-Jun-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={approvalRequest}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];

  const dataSTS = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px", marginRight: "18px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>STS Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8007415</p>,
      issue_date: <p style={{ fontSize: "14px" }}>15-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>20-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill" style={{background: "rgb(0 0 0 / 25%)"}}>NO REQUEST  </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>STS Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8005465</p>,
      issue_date: <p style={{ fontSize: "14px" }}>15-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>20-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={approvalRequest}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-success" >Approved</span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{background: "#1890ff",cursor: "pointer"}}
      aria-hidden="true" onClick={letterApproved}></i></p>,
    },
  ];

  const dataSMPEP = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px"}}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>SMPEP Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8004125</p>,
      issue_date: <p style={{ fontSize: "14px" }}>14-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>19-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>SMPEP Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8007896</p>,
      issue_date: <p style={{ fontSize: "14px" }}>14-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>19-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill" style={{background: "rgb(0 0 0 / 25%)"}}>NO REQUEST </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];

  const dataBWS = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px", marginRight: "18px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>BWS Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8008547</p>,
      issue_date: <p style={{ fontSize: "14px" }}>13-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>BWS Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8005213</p>,
      issue_date: <p style={{ fontSize: "14px" }}>13-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];

  const dataVOC = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px", marginRight: "18px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>VOC Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8005544</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill" style={{background: "rgb(0 0 0 / 25%)"}}>NO REQUEST </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>VOC Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8001597</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];

  const dataSWR = [
    {
      key: "1",
      name: <p style={{ fontSize: "14px", marginRight: "18px" }}
      onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>SDR Approval Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8004455</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Extended</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill" style={{background: "rgb(0 0 0 / 25%)"}}>NO REQUEST </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "rgb(0 0 0 / 25%)",cursor: "pointer",pointerEvents: "none"}}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
    {
      key: "2",
      name: <p style={{ fontSize: "14px"}}
         onClick={() =>
        history.push("/admin/certificates", "dtls")
      }>SDR Review Letter</p>,
      certificate_no: <p style={{ fontSize: "14px" }}>8006666</p>,
      issue_date: <p style={{ fontSize: "14px" }}>18-May-2021</p>,
      expiry_date: <p style={{ fontSize: "14px" }}>23-May-2021</p>,
      term: <p style={{ fontSize: "14px" }}>Full</p>,
      state: <Tag color="purple">Issued</Tag>,
      state_date: <p style={{ fontSize: "14px" }}>01-Jan-2024</p>,
     preview:  (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
            onClick={showLetterPDFModal}
            className="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      approval: (
        <div style={{ marginLeft: "15px", cursor: "pointer" }}>
          <i
           onClick={letterRequestModal}
            className="fa fa-certificate custom-icon-dowload"
            style={{ background: "#1890ff" }}
          >
            <span className="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      status: <p style={{fontSize: "14px" }}> <span className="badge rounded-pill bg-warning">NOT APPROVED </span></p>,
      request: <p style={{fontSize: "14px" }}><i className="fa fa-certificate custom-icon-dowload"
      style={{ background: "#1890ff",cursor: "pointer" }}
      aria-hidden="true" onClick={letrpermissionModal}></i></p>,
    },
  ];
  const cardcss = {
    // width: "200px",
    borderRadius: "0px",
    marginBottom: "9px",
    height: "45px",
    background: "#eeeeee",
  },
    subtypetextcss = {
      marginTop: "12px",
      fontWeight: "700",
      textAlign: "start",
      marginLeft: "10px",
    };


  return (
    <div>

      <div style={{ padding: "10px" }}>
        <Tabs type="card">
          <TabPane tab="MSC" key="1" style={{ backgroundColor: "#ffff " }}>
            <Card style={cardcss}>
              <div style={subtypetextcss}>MSC</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsMSC}
              dataSource={dataISM}
              size="small"
              pagination={false}
            />
            : <Table
            columns={columnsISM}
            dataSource={dataISM}
            size="small"
            pagination={false}
          />}

            <div style={{ backgroundColor: "white", color: "white" }}>.</div>
            <Card style={cardcss}>
              <div style={subtypetextcss}>SSP</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataSSP}
              size="small"
              pagination={false}
            />
            :
            <Table
              columns={columnsISPS}
              dataSource={dataSSP}
              size="small"
              pagination={false}
            />}

            <div style={{ backgroundColor: "white", color: "white" }}>.</div>
            <Card style={cardcss}>
              <div style={subtypetextcss}>DMLC II</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataDMLCII}
              size="small"
              pagination={false}
            /> :
            <Table
              columns={columnsISPS}
              dataSource={dataDMLCII}
              size="small"
              pagination={false}
            />}
            {/* <br />      
                   <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "-10px" }}align="left">ISPS</p>  
                   <Table
                    columns={columnsISPS}
                    dataSource={dataISPS}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "-10px" }}align="left">MLC</p>  
                   <Table
                    columns={columnsMLC}
                    dataSource={dataMLC}
                    size="small"
                    pagination={false}
                   /> */}
          </TabPane>

          <TabPane tab="INSPECTIONS" key="2" style={{ backgroundColor: "#ffff " }}>
            <Card style={cardcss}>
              <div style={subtypetextcss}>ASI</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataASI}
              size="small"
              pagination={false}
            />
            :
            <Table
            columns={columnsISPS}
            dataSource={dataASI}
            size="small"
            pagination={false}
          />  }
          </TabPane>

          <TabPane tab="STATUTORY" key="3" style={{ backgroundColor: "#ffff " }}>
            <Card style={cardcss}>
              <div style={subtypetextcss}>IHM</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataIHM}
              size="small"
              pagination={false}
            />  :
            <Table
            columns={columnsISPS}
            dataSource={dataIHM}
            size="small"
            pagination={false}
          />}

            <div style={{ backgroundColor: "white", color: "white" }}>.</div>
            <Card style={cardcss}>
              <div style={subtypetextcss}>SOPEP</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataSOPEP}
              size="small"
              pagination={false}
            /> :
            <Table
            columns={columnsISPS}
            dataSource={dataSOPEP}
            size="small"
            pagination={false}
          />}

            <div style={{ backgroundColor: "white", color: "white" }}>.</div>
            <Card style={cardcss}>
              <div style={subtypetextcss}>STS</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataSTS}
              size="small"
              pagination={false}
            />:
            <Table
            columns={columnsISPS}
            dataSource={dataSTS}
            size="small"
            pagination={false}
          />}

            <div style={{ backgroundColor: "white", color: "white" }}>.</div>
            <Card style={cardcss}>
              <div style={subtypetextcss}>SMPEP</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataSMPEP}
              size="small"
              pagination={false}
            />:
            <Table
            columns={columnsISPS}
            dataSource={dataSMPEP}
            size="small"
            pagination={false}
          />}

            <div style={{ backgroundColor: "white", color: "white" }}>.</div>
            <Card style={cardcss}>
              <div style={subtypetextcss}>BWS</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataBWS}
              size="small"
              pagination={false}
            />:
            <Table
            columns={columnsISPS}
            dataSource={dataBWS}
            size="small"
            pagination={false}
          />   }

            <div style={{ backgroundColor: "white", color: "white" }}>.</div>
            <Card style={cardcss}>
              <div style={subtypetextcss}>VOC</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataVOC}
              size="small"
              pagination={false}
            />:
            <Table
            columns={columnsISPS}
            dataSource={dataVOC}
            size="small"
            pagination={false}
          />  }

            <div style={{ backgroundColor: "white", color: "white" }}>.</div>
            <Card style={cardcss}>
              <div style={subtypetextcss}>SDR</div></Card>
              {localStorage.getItem("role") == "admin" ?
            <Table
              columns={columnsISPS1}
              dataSource={dataSWR}
              size="small"
              pagination={false}
            /> :
            <Table
            columns={columnsISPS}
            dataSource={dataSWR}
            size="small"
            pagination={false}
          />}
          </TabPane>
        </Tabs>
      </div>

      <Modal
        style={{ marginTop: "-20px" }}
        title="CERTIFICATE"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{ borderRadius: "12px" }}
            key="back"
            type="danger"
            onClick={handleCancel}
          >
            Close
          </Button>,
        ]}
      >
        <Card
          style={{ height: "400px", marginBottom: "-20px", marginTop: "-20px" }}
        >
          <iframe
            style={{ height: "400px" }}
            src={Cerificate_Copy}
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </Card>
      </Modal>


      <Modal
        style={{ marginTop: "-20px" }}
        title="LETTER"
        visible={isLetterPDFModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{ borderRadius: "12px" }}
            key="back"
            type="danger"
            onClick={handleCancel}
          >
            Close
          </Button>,
        ]}
      >
        <Card
          style={{ height: "400px", marginBottom: "-20px", marginTop: "-20px" }}
        >
          <iframe
            style={{ height: "400px" }}
            src={Letter_Copy}
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </Card>
      </Modal>


      <Modal style={{ marginTop: "100px", width: "700px" }}
      onCancel={certificatehandleCancel}
           visible={isCertificateModalVisible}
           footer={[
            <div style={{ textAlign: "center" }}>
            <div className="footer_btn_section">
              <div></div>
              <Button style={{backgroundColor:"#1890ff"}}
              type="primary" size="default"
                onClick={openNotification}>
                Yes
              </Button>
              <Button type="primary" size="default" danger
               onClick={certificatehandleCancel}>
                No
              </Button>
              <div></div>
            </div>
          </div>
          ]}
           
           >
          <div className="modal-header justify-content-center">
            {/* <button
              className="close"
              type="button"
              onClick={handleCancel}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button> */}
            <h6 className="title title-up">CERTFICATE APPROVAL REQUEST</h6>
          </div>

          <h6 style={{
            marginTop: "10%",
            color: "rgb(0 0 0 / 54%)",
          }} align="center"> ARE YOU SURE YOU WANT TO SEND REQUEST FOR CERTIFICATE</h6>
          </Modal>

          <Modal style={{ marginTop: "100px", width: "700px" }}
      onCancel={letterhandleCancel}
           visible={isLetterModalVisible}
           footer={[
            <div style={{ textAlign: "center" }}>
            <div className="footer_btn_section">
              <div></div>
              <Button style={{backgroundColor:"#1890ff"}}
              type="primary" size="default"
                onClick={openNotification}>
                Yes
              </Button>
              <Button type="primary" size="default" danger
               onClick={letterhandleCancel}>
                No
              </Button>
              <div></div>
            </div>
          </div>
          ]}
           
           >
          <div className="modal-header justify-content-center">
            {/* <button
              className="close"
              type="button"
              onClick={handleCancel}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button> */}
            <h6 className="title title-up">LETTER APPROVAL REQUEST</h6>
          </div>

          <h6 style={{
            marginTop: "10%",
            color: "rgb(0 0 0 / 54%)",
          }} align="center"> ARE YOU SURE YOU WANT TO SEND REQUEST FOR LETTER</h6>
          </Modal>


          



          <Modal style={{ marginTop: "100px", width: "700px" }}
        onCancel={certpermissionCancel}
        visible={isCertpermissionModalVisible}
        footer={[
          <div style={{ textAlign: "center" }}>
            <div className="footer_btn_section">
              <div></div>
              <Button style={{backgroundColor:"#1890ff"}}
              type="primary" size="default"
               onClick={openCertificateNotification}>
                APROVE
              </Button>
              <Button type="primary" size="default" danger
                onClick={certpermissionCancel}>
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
        onCancel={letrpermissionCancel}
        visible={isLetrPermissionModalVisible}
        footer={[
          <div style={{ textAlign: "center" }}>
            <div className="footer_btn_section">
              <div></div>
              <Button style={{backgroundColor:"#1890ff"}}
              type="primary" size="default"
               onClick={openLetterNotification} >
                APROVE
              </Button>
              <Button type="primary" size="default" danger
                onClick={letrpermissionCancel}>
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

export default VesselStatementCertificateTab
