import React, { useState } from "react";
import "./QuickInfo.css";
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
import AuditQuickInfo from "./audit_quick_info/AuditQuickInfo";
import VesselsQuickInfo from "./vessels_quick_info/VesselsQuickInfo";
import CompanyQuickInfo from "./company_quick_info/CompanyQuickInfo";
import FindingsQuickInfo from "./finding_quick_info/FindingsQuickInfo";

function QuickInfo() {
  const [horizontalTabs, setHorizontalTabs] = useState("company");
  return (
    <div className="content">
      <div className="nav-tabs-navigation">
        <div className="nav-tabs-wrapper">
          <Nav id="tabs" role="tablist" tabs>
            <NavItem>
              <NavLink
                aria-expanded={horizontalTabs === "company"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={
                  horizontalTabs === "company" ? "verticalTabActive" : ""
                }
                onClick={() => setHorizontalTabs("company")}
              >
                <div>
                  <span>
                    <Row>
                      {/* <Col>
                        <i className="nc-icon nc-globe"></i>
                      </Col> */}
                    </Row>
                    <Row>
                      <Col>Company</Col>
                    </Row>
                  </span>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-expanded={horizontalTabs === "vessels"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={
                  horizontalTabs === "vessels" ? "verticalTabActive" : ""
                }
                onClick={() => setHorizontalTabs("vessels")}
              >
                <span>
                  <Row>
                    {/* <Col>
                      <i className="fa fa-ship"></i>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col>Vessels</Col>
                  </Row>
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-expanded={horizontalTabs === "audit"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={
                  horizontalTabs === "audit" ? "verticalTabActive" : ""
                }
                onClick={() => setHorizontalTabs("audit")}
              >
                <span>
                  <Row>
                    {/* <Col>
                      <i className="nc-icon nc-globe"></i>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col>Audit</Col>
                  </Row>
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-expanded={horizontalTabs === "certificate"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={
                  horizontalTabs === "certificate" ? "verticalTabActive" : ""
                }
                onClick={() => setHorizontalTabs("certificate")}
              >
                <span>
                  <Row>
                    {/* <Col>
                      <i className="nc-icon nc-globe"></i>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col>Findings</Col>
                  </Row>
                </span>
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
        <TabPane tabId="company" role="tabpanel">
          <CompanyQuickInfo />
        </TabPane>
        <TabPane tabId="vessels" role="tabpanel">
          <VesselsQuickInfo />
        </TabPane>
        <TabPane tabId="audit" role="tabpanel">
          <AuditQuickInfo />
        </TabPane>
        <TabPane tabId="certificate" role="tabpanel">
          <FindingsQuickInfo />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default QuickInfo;
