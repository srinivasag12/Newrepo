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
import { Tabs } from "antd";
import AuditTab from "./AuditTab";
import InspectionTab from "./InspectionTab";
import ReviewTab from "./ReviewTab";

function Audit() {
  //
  const [pageTabs, setPageTabs] = useState("homePages");
  const [verticalTabs, setVerticalTabs] = useState("info");
  const [horizontalTabs, setHorizontalTabs] = useState("home");
  const numberstyle = {
      color: "rgb(208 15 15)",
      fontWeight: "700",
      fontSize: "40px",
      textAlign: "center",
      marginTop: "-20px",
    },
    numberstyle2 = {
      color: "rgb(247 206 4)",
      fontWeight: "700",
      fontSize: "40px",
      textAlign: "center",
      marginTop: "-20px",
    },
    textstyle = {
      textAlign: "center",
      color: "#66615b",
    },
    titalstyle = {
      color: "black",
      fontWeight: "600",
      marginTop: "-5px",
      marginBottom: "-5px",
    },
    icontyle = {
      color: "white",
      textAlign: "center",
      marginTop: "30px",
      marginLeft: "3px",
    };
  // = n b

  return (
    <div className="content">
      <Card>
        <div class="bookpage">
          <Row>
            <Col md="3">
              <p className="labelTitle" style={{ marginBottom: "0px" }}>
                VESSEL NAME
              </p>
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "lightblue", height: "90px" }}
                    >
                      <i
                        class="fa fa-ship fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle">GH CITATION</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <div className="labelTitle">VESSEL IMO NO</div>
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "#6bd098", height: "90px" }}
                    >
                      <i
                        class="fa fa-tasks fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle">9722041</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <div className="labelTitle">VESSEL OFFICIAL NO</div>
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "#d43e3e", height: "90px" }}
                    >
                      <i class="fa fa-tasks fa-2x" style={icontyle}></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle">65432</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <div className="labelTitle">VESSEL TYPE</div>
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{
                        backgroundColor: "rgb(251 198 88)",
                        height: "90px",
                      }}
                    >
                      <i
                        class="fa fa-anchor fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle">GAS-CARRIER</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
      {/* <Card style={{ width: "70 vw", borderRadius: "0", padding: "20px" }}>
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
      </Card> */}

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
            {/* <CardBody> */}
            <AuditTab />
            {/* </CardBody> */}
          </Card>
        </TabPane>
        <TabPane tabId="profile" role="tabpanel">
          <Card>
            {/* <CardBody> */}
            <InspectionTab />
            {/* </CardBody> */}
          </Card>
        </TabPane>
        <TabPane tabId="messages" role="tabpanel">
          <Card>
            {/* <CardBody> */}
            <ReviewTab />
            {/* </CardBody> */}
          </Card>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Audit;
