import React, { useState } from "react";
import { Tabs } from "antd";
import { Table } from "antd";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Tag, Divider } from "antd";
import User from "../../assets/img/user.png";
import Location from "../../assets/img/location.png";
import { Modal, Button } from "antd";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const { TabPane } = Tabs;

const columnsSSP = [
  {
    title: "REVIEW TYPE",
    dataIndex: "review_type",
  },
  {
    title: "APPROVAL DATE",
    dataIndex: "approval_date",
  },
  {
    title: "LOCATION",
    dataIndex: "loc",
  },
  {
    title: "APPROVAL LETTER NO",
    dataIndex: "approval_letter",
  },
  {
    title: "SSP ISSUE DATE ",
    dataIndex: "ssp_issue_date",
  },
  {
    title: "AUDITOR",
    dataIndex: "auditor",
  },
  {
    title: "RECEIPT LETTER",
    dataIndex: "download",
  },
  {
    title: "APPROVAL LETTER",
    dataIndex: "preview",
  },
];

const columnsDMLC = [
  {
    title: "REVIEW TYPE",
    dataIndex: "review_type",
  },
  {
    title: "REVIEW DATE",
    dataIndex: "approval_date",
  },
  {
    title: "LOCATION",
    dataIndex: "loc",
  },
  {
    title: "REVIEW LETTER NO",
    dataIndex: "approval_letter",
  },
  {
    title: "DMLC ISSUE DATE ",
    dataIndex: "ssp_issue_date",
  },
  {
    title: "INSPECTOR",
    dataIndex: "auditor",
  },
  {
    title: "RECEIPT LETTER",
    dataIndex: "download",
  },

  {
    title: "APPROVAL LETTER",
    dataIndex: "preview",
  },
];

const columnsIHM = [
  {
    title: "REVIEW TYPE",
    dataIndex: "review_type",
  },
  {
    title: "APPROVAL DATE",
    dataIndex: "approval_date",
  },
  {
    title: "LOCATION",
    dataIndex: "loc",
  },
  {
    title: "APPROVAL LETTER NO",
    dataIndex: "approval_letter",
  },
  {
    title: "IHM ISSUE DATE ",
    dataIndex: "ssp_issue_date",
  },
  {
    title: "REVIEWER",
    dataIndex: "auditor",
  },
  {
    title: "RECEIPT LETTER",
    dataIndex: "download",
  },
  {
    title: "APPROVAL LETTER",
    dataIndex: "preview",
  },
];

const columnsIHMCertificate = [
  {
    title: "CERTIFICATE NO",
    dataIndex: "cert_no",
  },
  {
    title: "TERM",
    dataIndex: "term",
  },
  {
    title: "ISSUE DATE",
    dataIndex: "issue_date",
  },
  {
    title: "EXPIRY DATE",
    dataIndex: "expiry_date",
  },
  {
    title: "SOC TYPE ",
    dataIndex: "soc_type",
  },
  {
    title: "UTN",
    dataIndex: "utn",
  },
  {
    title: "CERTIFICATE",
    dataIndex: "download",
  },
  {
    title: "APPROVAL LETTER",
    dataIndex: "preview",
  },
];

/* fa fa-user-circle */

function ReviewCertificate() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  /* Active , InActive */

  const dataActiveSSP = [
    {
      key: "1",

      review_type: (
        <p>
          <Tag color="purple">INITIAL</Tag>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>16-Jul-2021</p>,
      loc: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Busan , South Korea
        </p>
      ),
      approval_letter: <p style={{ fontSize: "Medium" }}>8009341</p>,
      ssp_issue_date: <p style={{ fontSize: "Medium" }}>23-Jul-2021</p>,
      auditor: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Hong Kyung Kim
        </p>
      ),

      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
  ];

  const dataInActiveSSP = [
    {
      key: "1",

      review_type: (
        <p>
          <Tag color="purple">INITIAL</Tag>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>16-Jul-2021</p>,
      loc: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Busan , South Korea
        </p>
      ),
      approval_letter: <p style={{ fontSize: "Medium" }}>8009341</p>,
      ssp_issue_date: <p style={{ fontSize: "Medium" }}>23-Jul-2021</p>,
      auditor: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Hong Kyung Kim
        </p>
      ),

      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
    {
      key: "2",

      review_type: (
        <p>
          <Tag color="green">AMENTENT</Tag>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>16-Jul-2021</p>,
      loc: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Busan , South Korea
        </p>
      ),
      approval_letter: <p style={{ fontSize: "Medium" }}>8009341</p>,
      ssp_issue_date: <p style={{ fontSize: "Medium" }}>23-Jul-2021</p>,
      auditor: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Hong Kyung Kim
        </p>
      ),

      download: (
        <div style={{ marginLeft: "0px", textAlign: "center" }}>
          <p style={{ marginLeft: "15px" }}>
            <i
              class="fa fa-download custom-icon-dowload"
              style={{ background: "#40a9ff", marginLeft: "15px" }}
            >
              <span class="fix-editor">&nbsp;</span>
            </i>

            <i
              onClick={showModal}
              class="fa fa-eye custom-icon-dowload"
              style={{ background: "rgb(82, 183, 136)", marginLeft: "15px" }}
            >
              <span class="fix-editor">&nbsp;</span>
            </i>
          </p>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
  ];

  /* DMLC */

  const dataActiveDMLC = [
    {
      key: "1",
      review_type: (
        <p>
          <Tag color="purple">INITIAL</Tag>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>16-Jul-2021</p>,
      loc: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Busan , South Korea
        </p>
      ),
      approval_letter: <p style={{ fontSize: "Medium" }}>8009341</p>,
      ssp_issue_date: <p style={{ fontSize: "Medium" }}>23-Jul-2021</p>,
      auditor: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Hong Kyung Kim
        </p>
      ),
      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
  ];

  const dataInActiveDMLC = [
    {
      key: "1",
      audit_type: <Tag color="purple">DMLC</Tag>,
      review_type: (
        <p>
          <Tag color="green">AMENDMENT</Tag>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>16-Jul-2021</p>,
      loc: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Busan , South Korea
        </p>
      ),
      approval_letter: <p style={{ fontSize: "Medium" }}>8009341</p>,
      ssp_issue_date: <p style={{ fontSize: "Medium" }}>23-Jul-2021</p>,
      auditor: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Hong Kyung Kim
        </p>
      ),
      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
    {
      key: "2",
      review_type: (
        <p>
          <Tag color="purple">INITIAL</Tag>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>16-Jul-2021</p>,
      loc: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Busan , South Korea
        </p>
      ),
      approval_letter: <p style={{ fontSize: "Medium" }}>8009341</p>,
      ssp_issue_date: <p style={{ fontSize: "Medium" }}>23-Jul-2021</p>,
      auditor: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Hong Kyung Kim
        </p>
      ),
      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
  ];

  /* IHM */

  const dataActiveIHM = [
    /* {
      key: "1",
      review_type: (
        <p>
          <Tag color="green">AMENDMENT</Tag>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>16-Jul-2021</p>,
      ssp_issue_date: <p style={{ fontSize: "Medium" }}>23-Jul-2021</p>,
      loc: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Busan , South Korea
        </p>
      ),
      approval_letter: <p style={{ fontSize: "Medium" }}>8009341</p>,
      auditor: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Hong Kyung Kim
        </p>
      ),
      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    }, */
    {
      key: "2",
      review_type: (
        <p>
          <Tag color="purple">INITIAL</Tag>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>16-Jul-2021</p>,
      ssp_issue_date: <p style={{ fontSize: "Medium" }}>23-Jul-2021</p>,
      loc: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Busan , South Korea
        </p>
      ),
      approval_letter: <p style={{ fontSize: "Medium" }}>8009341</p>,
      auditor: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Hong Kyung Kim
        </p>
      ),
      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
  ];

  const dataInActiveIHM = [
    {
      key: "1",
      cert_no: <p style={{ fontSize: "Medium" }}>8057337-IHM-298C-21</p>,
      term: <p style={{ fontSize: "Medium" }}>ADDITIONAL ENDORSED</p>,
      issue_date: <p style={{ fontSize: "Medium" }}>20-Jul-2021</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>19-Jul-2026</p>,
      soc_type: <p style={{ fontSize: "Medium" }}>HK</p>,
      utn: <p style={{ fontSize: "Medium" }}>K9A815PJTZ</p>,
      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
    {
      key: "2",
      cert_no: <p style={{ fontSize: "Medium" }}>8057337-IHM-298D-21</p>,
      term: <p style={{ fontSize: "Medium" }}>ADDITIONAL ENDORSED</p>,
      issue_date: <p style={{ fontSize: "Medium" }}>20-Jul-2021</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>19-Jul-2026</p>,
      soc_type: <p style={{ fontSize: "Medium" }}>EU</p>,
      utn: <p style={{ fontSize: "Medium" }}>2Q590CGQUV</p>,
      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
    {
      key: "3",
      cert_no: <p style={{ fontSize: "Medium" }}>8057337-IHM-298D-21</p>,
      term: <p style={{ fontSize: "Medium" }}>ADDITIONAL ENDORSED</p>,
      issue_date: <p style={{ fontSize: "Medium" }}>20-Jul-2021</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>19-Jul-2026</p>,
      soc_type: <p style={{ fontSize: "Medium" }}>EXEMPTION</p>,
      utn: <p style={{ fontSize: "Medium" }}>2Q590CGQUV</p>,
      download: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>

          <i
            onClick={showModal}
            class="fa fa-eye custom-icon-dowload"
            style={{ background: "rgb(82, 183, 136)" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
    },
  ];

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    console.log("panel", panel);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Tabs type="card">
        <TabPane tab="SSP" key="1" style={{ backgroundColor: "#eee " }}>
          {/* <Card>
            <CardHeader>
              <h6>SSP Letter</h6>
            </CardHeader>
            <CardBody>
              <Table
                columns={columnsSSP}
                dataSource={dataActiveSSP}
                size="small"
                pagination={false}
              />
            </CardBody>
          </Card>

          <br></br> */}

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <h6>SSP Letter</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Table
                columns={columnsSSP}
                dataSource={dataActiveSSP}
                size="small"
                pagination={false}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>10 Years of Certificate History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsSSP}
                    dataSource={dataInActiveSSP}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
            </AccordionDetails>
          </Accordion>
        </TabPane>
        <TabPane tab="DMLC" key="2" style={{ backgroundColor: "#eee " }}>
          {/* <Card>
            <CardHeader>
              <h6>DMLC Letter</h6>
            </CardHeader>
            <CardBody>
              <Table
                columns={columnsDMLC}
                dataSource={dataActiveDMLC}
                size="small"
                pagination={false}
              />
            </CardBody>
          </Card>

          <br></br> */}

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <h6>DMLC Letter</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Table
                columns={columnsDMLC}
                dataSource={dataActiveDMLC}
                size="small"
                pagination={false}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>10 Years of Certificate History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsDMLC}
                    dataSource={dataInActiveDMLC}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
            </AccordionDetails>
          </Accordion>

          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>10 Years of Certificate History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsDMLC}
                    dataSource={dataInActiveDMLC}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
            </AccordionDetails>
          </Accordion> */}
        </TabPane>
        <TabPane tab="IHM" key="3" style={{ backgroundColor: "#eee " }}>
          {/* <Card>
            <CardHeader>
              <h6>IHM Letter</h6>
            </CardHeader>
            <CardBody>
              <Table
                columns={columnsIHM}
                dataSource={dataActiveIHM}
                size="small"
                pagination={false}
              />
            </CardBody>
          </Card> */}

          {/* <br></br> */}

          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>Certificate History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsIHMCertificate}
                    dataSource={dataInActiveIHM}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
            </AccordionDetails>
          </Accordion> */}

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <h6>IHM Letter</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Table
                columns={columnsIHM}
                dataSource={dataActiveIHM}
                size="small"
                pagination={false}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>IHM SOC and Exemption Certification</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsIHMCertificate}
                    dataSource={dataInActiveIHM}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
            </AccordionDetails>
          </Accordion>
        </TabPane>
      </Tabs>

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
            src="http://www.africau.edu/images/default/sample.pdf"
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </Card>
      </Modal>
    </div>
  );
}

export default ReviewCertificate;
