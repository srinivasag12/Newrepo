import React, { useState } from "react";
import { Tabs } from "antd";
import "./Audit.css";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Badge } from "antd";
import { Tag, Divider } from "antd";
import { Table } from "antd";
import { Modal, Button } from "antd";

import { Collapse } from "antd";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const { Panel } = Collapse;

const { TabPane } = Tabs;

const columns = [
  {
    title: "Audit Date",
    dataIndex: "insp",
  },
  {
    title: "ISSC NO.	",
    dataIndex: "mlc_no",
  },
  {
    title: "ISSC Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "ISSC Expiry Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Next Periodical Audit	",
    dataIndex: "npa",
  },
  {
    title: "Due date ",
    dataIndex: "due_date",
  },
  {
    title: "Due Range ",
    dataIndex: "range",
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

const columnsHistory = [
  {
    title: "Record No	",
    dataIndex: "record_no",
  },
  {
    title: "Inspection Type",
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

const columnsISM = [
  {
    title: "Audit Date",
    dataIndex: "insp",
  },
  {
    title: "SMC NO.	",
    dataIndex: "mlc_no",
  },
  {
    title: "SMC Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "SMC Expiry Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Next Periodical Audit	",
    dataIndex: "npa",
  },
  {
    title: "Due date ",
    dataIndex: "due_date",
  },
  {
    title: "Due Range ",
    dataIndex: "range",
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

const columnsHistoryISM = [
  {
    title: "Record No	",
    dataIndex: "record_no",
  },
  {
    title: "Inspection Type",
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

function AuditTab() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const data = [
    {
      key: "1",
      insp: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mlc_no: <p style={{ fontSize: "Medium" }}>823440-ML-297E-20</p>,
      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      npa: <Tag color="purple">INITIAL</Tag>,
      due_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,
      range: <p style={{ fontSize: "Medium" }}>01-Jul-2023 - 01-Jul-2024</p>,
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

  const dataHistory = [
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

  /* ISM */

  const dataISM = [
    {
      key: "1",
      insp: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      mlc_no: <p style={{ fontSize: "Medium" }}>823440-ML-297E-20</p>,
      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      npa: <Tag color="purple">INITIAL</Tag>,
      due_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,
      range: <p style={{ fontSize: "Medium" }}>01-Jul-2023 - 01-Jul-2024</p>,
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

  const dataHistoryISM = [
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

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    console.log("panel", panel);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Tabs type="card">
        <TabPane tab="ISM" key="1" style={{ backgroundColor: "#eee " }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>SMC Details</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsISM}
                    dataSource={dataISM}
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
              <h6>10 Years of Audit History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columnsHistoryISM}
                    dataSource={dataHistoryISM}
                    size="small"
                    pagination={false}
                  />
                </CardBody>
              </Card>
            </AccordionDetails>
          </Accordion>
        </TabPane>

        <TabPane tab="ISPS" key="2" style={{ backgroundColor: "#eee " }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>ISSC Details</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Card style={{ width: "100%" }}>
                <CardBody>
                  <Table
                    columns={columns}
                    dataSource={data}
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
              <h6>10 Years of Audit History</h6>
            </AccordionSummary>
            <AccordionDetails>
              <CardBody>
                <Table
                  columns={columnsHistory}
                  dataSource={dataHistory}
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

export default AuditTab;
