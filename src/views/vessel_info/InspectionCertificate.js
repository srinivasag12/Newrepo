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

const columns = [
  {
    title: "AUDIT TYPE",
    dataIndex: "audit_type",
  },
  {
    title: "ISSUE DATE ",
    dataIndex: "issue_date",
  },
  {
    title: "EXPIRY DATE",
    dataIndex: "expiry_date",
  },
  {
    title: "ISSUED PLACE",
    dataIndex: "issued_place",
  },
  {
    title: "AUDITOR NAME",
    dataIndex: "auditor_name",
  },
  {
    title: "CERTIFICATE NUMBER",
    dataIndex: "cert_no",
  },
  {
    title: "UTN NUMBER",
    dataIndex: "utn_no",
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

/* fa fa-user-circle */

function InspectionCertificate() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataActive = [
    {
      key: "1",
      audit_type: <Tag color="purple">MLC</Tag>,
      issued_place: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Melbourne, Australia
        </p>
      ),
      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      auditor_name: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          John Doe
        </p>
      ),
      cert_no: <p style={{ fontSize: "Medium" }}>11215903-416194-001</p>,
      utn_no: <p style={{ fontSize: "Medium" }}>112-53-633</p>,
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

  const dataInActive = [
    {
      key: "1",
      audit_type: <Tag color="purple">MLC</Tag>,
      issued_place: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Melbourne, Australia
        </p>
      ),
      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      auditor_name: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          John Doe
        </p>
      ),
      cert_no: <p style={{ fontSize: "Medium" }}>11215903-416194-001</p>,
      utn_no: <p style={{ fontSize: "Medium" }}>112-53-633</p>,
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
      audit_type: <Tag color="purple">MLC</Tag>,
      issued_place: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-map-marker" style={{ color: "red" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          Melbourne, Australia
        </p>
      ),
      issue_date: <p style={{ fontSize: "Medium" }}>18-May-2020</p>,
      expiry_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
      auditor_name: (
        <p style={{ fontSize: "Medium" }}>
          <i class="fa fa-user-circle" style={{ color: "gray" }}>
            <span class="fix-editor">&nbsp;</span>
          </i>{" "}
          John Doe
        </p>
      ),
      cert_no: <p style={{ fontSize: "Medium" }}>11215903-416194-001</p>,
      utn_no: <p style={{ fontSize: "Medium" }}>112-53-633</p>,
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
        <TabPane tab="MLC" key="1" style={{ backgroundColor: "#eee " }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <h6>MLC Certificate</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Table
                columns={columns}
                dataSource={dataActive}
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
                    columns={columns}
                    dataSource={dataInActive}
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

export default InspectionCertificate;
