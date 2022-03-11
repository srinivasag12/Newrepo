import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import "../vessel_info/Audit.css";
import AuditCertificate from "./AuditCertificate";
import InspectionCertificate from "./InspectionCertificate";
import ReviewCertificate from "./ReviewCertificate";

function Certificates() {
  const [horizontalTabs, setHorizontalTabs] = useState("home");

  return (
    <div className="content">
      <Card style={{ width: "70 vw", borderRadius: "0", padding: "20px" }}>
        <div className="vesselInfoCard">
          <div>
            <Row>
              <Col xs="auto">
                <div class="icon-wrapper">
                  <i
                    class="fa fa-ship custom-icon"
                    style={{ background: "#23BAA6" }}
                  >
                    <span class="fix-editor">&nbsp;</span>
                  </i>
                </div>
              </Col>
              <Col xs="auto">
                <Row>
                  <p className="labelTitle">VESSEL NAME</p>
                </Row>
                <Row>
                  <p className="labelValue">INDUSTRIAL CRESCENT</p>
                </Row>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <Col xs="auto">
                <div class="icon-wrapper">
                  <i
                    class="fa fa-tasks custom-icon"
                    style={{ background: "#4fa8e9" }}
                  >
                    <span class="fix-editor">&nbsp;</span>
                  </i>
                </div>
              </Col>
              <Col xs="auto">
                <Row>
                  <p className="labelTitle">VESSEL IMO NO.</p>
                </Row>
                <Row>
                  <p className="labelValue">9564413</p>
                </Row>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <Col xs="auto">
                <div class="icon-wrapper">
                  <i
                    class="fa fa-tasks custom-icon"
                    style={{ background: "#FFC144" }}
                  >
                    <span class="fix-editor">&nbsp;</span>
                  </i>
                </div>
              </Col>
              <Col xs="auto">
                <Row>
                  <p className="labelTitle">VESSEL OFFICIAL NO.</p>
                </Row>
                <Row>
                  <p className="labelValue">65432</p>
                </Row>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <Col xs="auto">
                <div class="icon-wrapper">
                  <i
                    class="fa fa-anchor custom-icon"
                    style={{ background: "#52b788" }}
                  >
                    <span class="fix-editor">&nbsp;</span>
                  </i>
                </div>
              </Col>
              <Col xs="auto">
                <Row>
                  <p className="labelTitle">VESSEL TYPE</p>
                </Row>
                <Row>
                  <p className="labelValue">GAS-CARRIER</p>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Card>

      <div className="nav-tabs-navigation">
        <div className="nav-tabs-wrapper">
          <Nav id="tabs" role="tablist" tabs>
            <NavItem>
              <NavLink
                aria-expanded={horizontalTabs === "home"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={horizontalTabs === "home" ? "verticalTabActive" : ""}
                onClick={() => setHorizontalTabs("home")}
              >
                AUDIT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-expanded={horizontalTabs === "profile"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={
                  horizontalTabs === "profile" ? "verticalTabActive" : ""
                }
                onClick={() => setHorizontalTabs("profile")}
              >
                INSPECTION
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-expanded={horizontalTabs === "messages"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={
                  horizontalTabs === "messages" ? "verticalTabActive" : ""
                }
                onClick={() => setHorizontalTabs("messages")}
              >
                REVIEW
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <TabContent
        className="text-center"
        id="my-tab-content"
        activeTab={horizontalTabs}
      >
        <TabPane tabId="home" role="tabpanel">
          <Card>
            <CardBody>
              <AuditCertificate />
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="profile" role="tabpanel">
          <Card>
            <CardBody>
              <InspectionCertificate />
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="messages" role="tabpanel">
          <Card>
            <CardBody>
              <ReviewCertificate />
            </CardBody>
          </Card>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Certificates;
