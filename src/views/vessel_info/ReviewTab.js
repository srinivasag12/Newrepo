import React, { useState } from "react";
import { Tabs } from "antd";
import { Tag } from "antd";
import { Table } from "antd";
import { Modal, Button } from "antd";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const { TabPane } = Tabs;

const columnsSSP = [
  {
    title: "SSP Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "SSP Recepit Date	",
    dataIndex: "recepit_date",
  },
  {
    title: "Letter Number",
    dataIndex: "letter_no",
  },
  {
    title: "Review Place",
    dataIndex: "review_place",
  },
  {
    title: "Approval Date",
    dataIndex: "approval_date",
  },
  {
    title: "Review Type",
    dataIndex: "review_type",
  },

  {
    title: "DOWNLOAD",
    dataIndex: "download",
  },
  {
    title: "PREVIEW",
    dataIndex: "preview",
  },
];

const columnsHistorySSP = [
  {
    title: "Record No	",
    dataIndex: "record_no",
  },
  {
    title: "Review Type",
    dataIndex: "insp_type",
  },
  {
    title: "Last Visit Date",
    dataIndex: "visit_date",
  },
  {
    title: "Location",
    dataIndex: "loc",
  },
  {
    title: "MNC",
    dataIndex: "mnc",
  },
  {
    title: "NC",
    dataIndex: "nc",
  },
  {
    title: "Inspector",
    dataIndex: "insp",
  },
  {
    title: "DOWNLOAD",
    dataIndex: "download",
  },
  {
    title: "PREVIEW",
    dataIndex: "preview",
  },
];

/* DMLC */

const columnsDMLC = [
  /*  {
    title: "DMLC Inspection Date",
    dataIndex: "insp",
  },
  {
    title: "DMLC NO.	",
    dataIndex: "mlc_no",
  },
  {
    title: "DMLC Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "DMLC Expiry Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Next Periodical Inspection	",
    dataIndex: "npa",
  }, */

  {
    title: "DMLC Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "DMLC Recepit Date	",
    dataIndex: "recepit_date",
  },
  {
    title: "Letter Number",
    dataIndex: "letter_no",
  },
  {
    title: "Review Place",
    dataIndex: "review_place",
  },
  {
    title: "Approval Date",
    dataIndex: "approval_date",
  },
  {
    title: "Review Type",
    dataIndex: "review_type",
  },

  {
    title: "DOWNLOAD",
    dataIndex: "download",
  },
  {
    title: "PREVIEW",
    dataIndex: "preview",
  },
];

const columnsHistoryDMLC = [
  {
    title: "Record No	",
    dataIndex: "record_no",
  },
  {
    title: "Review Type",
    dataIndex: "insp_type",
  },
  {
    title: "Last Visit Date",
    dataIndex: "visit_date",
  },
  {
    title: "Location",
    dataIndex: "loc",
  },
  {
    title: "MNC",
    dataIndex: "mnc",
  },
  {
    title: "NC",
    dataIndex: "nc",
  },
  {
    title: "Inspector",
    dataIndex: "insp",
  },
  {
    title: "DOWNLOAD",
    dataIndex: "download",
  },
  {
    title: "PREVIEW",
    dataIndex: "preview",
  },
];

/* IHM */

const columnsIHM = [
  /* {
    title: "IHM Inspection Date",
    dataIndex: "insp",
  },
  {
    title: "IHM NO.	",
    dataIndex: "mlc_no",
  },
  {
    title: "IHM Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "IHM Expiry Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Next Periodical Inspection	",
    dataIndex: "npa",
  }, */

  {
    title: "IHM Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "IHM Recepit Date	",
    dataIndex: "recepit_date",
  },
  {
    title: "Letter Number",
    dataIndex: "letter_no",
  },
  {
    title: "Review Place",
    dataIndex: "review_place",
  },
  {
    title: "Approval Date",
    dataIndex: "approval_date",
  },
  {
    title: "Review Type",
    dataIndex: "review_type",
  },

  {
    title: "DOWNLOAD",
    dataIndex: "download",
  },
  {
    title: "PREVIEW",
    dataIndex: "preview",
  },
];

const columnsHistoryIHM = [
  {
    title: "Record No	",
    dataIndex: "record_no",
  },
  {
    title: "Review Type",
    dataIndex: "insp_type",
  },
  {
    title: "Last Visit Date",
    dataIndex: "visit_date",
  },
  {
    title: "Location",
    dataIndex: "loc",
  },
  {
    title: "MNC",
    dataIndex: "mnc",
  },
  {
    title: "NC",
    dataIndex: "nc",
  },
  {
    title: "Inspector",
    dataIndex: "insp",
  },
  {
    title: "DOWNLOAD",
    dataIndex: "download",
  },
  {
    title: "PREVIEW",
    dataIndex: "preview",
  },
];

function ReviewTab() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const dataSSP = [
    {
      key: "1",

      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      recepit_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      letter_no: <p style={{ fontSize: "Medium" }}>11215903-416194-001</p>,
      review_place: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      review_type: <Tag color="purple">INITIAL</Tag>,

      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

  const dataHistorySSP = [
    {
      key: "1",

      record_no: <p style={{ fontSize: "Medium" }}>1</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>1</p>,
      nc: <p style={{ fontSize: "Medium" }}>0</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      insp_type: <Tag color="blue">INTERIM</Tag>,
      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

      record_no: <p style={{ fontSize: "Medium" }}>2</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>0</p>,
      nc: <p style={{ fontSize: "Medium" }}>1</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      insp_type: <Tag color="purple">INITIAL</Tag>,
      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

      record_no: <p style={{ fontSize: "Medium" }}>3</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>1</p>,
      nc: <p style={{ fontSize: "Medium" }}>0</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      insp_type: <Tag color="blue">INTERIM</Tag>,
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

  const dataDMLC = [
    {
      key: "1",

      // insp: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      // mlc_no: <p style={{ fontSize: "Medium" }}>823440-ML-297E-20</p>,
      // issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      // expiry_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      // npa: <Tag color="purple">INITIAL</Tag>,

      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      recepit_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      letter_no: <p style={{ fontSize: "Medium" }}>11215903-416194-001</p>,
      review_place: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      review_type: <Tag color="purple">INITIAL</Tag>,

      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

  const dataHistoryDMLC = [
    {
      key: "1",

      record_no: <p style={{ fontSize: "Medium" }}>1</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>1</p>,
      nc: <p style={{ fontSize: "Medium" }}>0</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      insp_type: <Tag color="blue">INTERIM</Tag>,
      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

      record_no: <p style={{ fontSize: "Medium" }}>2</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>0</p>,
      nc: <p style={{ fontSize: "Medium" }}>1</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      insp_type: <Tag color="purple">INITIAL</Tag>,
      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

      record_no: <p style={{ fontSize: "Medium" }}>3</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>1</p>,
      nc: <p style={{ fontSize: "Medium" }}>0</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      insp_type: <Tag color="blue">INTERIM</Tag>,
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

  const dataIHM = [
    {
      key: "1",
      /*  insp: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mlc_no: <p style={{ fontSize: "Medium" }}>823440-ML-297E-20</p>,
      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      npa: <Tag color="purple">INITIAL</Tag>, */

      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      recepit_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      letter_no: <p style={{ fontSize: "Medium" }}>11215903-416194-001</p>,
      review_place: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      approval_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      review_type: <Tag color="purple">INITIAL</Tag>,

      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

  const dataHistoryIHM = [
    {
      key: "1",

      record_no: <p style={{ fontSize: "Medium" }}>1</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>1</p>,
      nc: <p style={{ fontSize: "Medium" }}>0</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      insp_type: <Tag color="blue">INITIAL</Tag>,
      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

      record_no: <p style={{ fontSize: "Medium" }}>2</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>0</p>,
      nc: <p style={{ fontSize: "Medium" }}>1</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      insp_type: <Tag color="purple">INTERIM</Tag>,
      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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

      record_no: <p style={{ fontSize: "Medium" }}>3</p>,
      visit_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mnc: <p style={{ fontSize: "Medium" }}>1</p>,
      nc: <p style={{ fontSize: "Medium" }}>0</p>,
      insp: <p style={{ fontSize: "Medium" }}>John Oliver</p>,

      loc: (
        <p>
          <span style={{ fontSize: "Medium" }}>
            {" "}
            <i class="fa fa-map-marker" style={{ color: "red" }}>
              <span class="fix-editor">&nbsp;</span>
            </i>{" "}
            Melbourne, Australia
          </span>
        </p>
      ),
      insp_type: <Tag color="blue">INITIAL</Tag>,
      download: (
        <div style={{ marginLeft: "25px" }}>
          <i
            class="fa fa-download custom-icon-dowload"
            style={{ background: "#40a9ff" }}
          >
            <span class="fix-editor">&nbsp;</span>
          </i>
        </div>
      ),
      preview: (
        <div style={{ marginLeft: "15px" }}>
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
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>SSP Details</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsSSP}
                    dataSource={dataSSP}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
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
              <h6>10 Years of Review History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <CardBody>
                <Table
                  columns={columnsHistorySSP}
                  dataSource={dataHistorySSP}
                  size="small"
                  pagination={false}
                />
              </CardBody>
            </AccordionDetails>
          </Accordion>
        </TabPane>
        <TabPane tab="DMLC" key="2" style={{ backgroundColor: "#eee " }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>DMLC Details</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsDMLC}
                    dataSource={dataDMLC}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
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
              <h6>10 Years of Review History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <CardBody>
                <Table
                  columns={columnsHistoryDMLC}
                  dataSource={dataHistoryDMLC}
                  size="small"
                  pagination={false}
                />
              </CardBody>
            </AccordionDetails>
          </Accordion>
        </TabPane>
        <TabPane tab="IHM" key="3" style={{ backgroundColor: "#eee " }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>IHM Details</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsIHM}
                    dataSource={dataIHM}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
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
              <h6>10 Years of Review History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <CardBody>
                <Table
                  columns={columnsHistoryIHM}
                  dataSource={dataHistoryIHM}
                  size="small"
                  pagination={false}
                />
              </CardBody>
            </AccordionDetails>
          </Accordion>
        </TabPane>
      </Tabs>

      <Modal
        style={{ marginTop: "-20px" }}
        title="REPORT"
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

export default ReviewTab;
