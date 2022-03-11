import React, { useState } from 'react';
import "../vessel_info/VesselStatement.css";
import {
    Card,
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
import VesselStatementAuditTab from './VesselStatementAuditTab';
import VesselStatementCertificateTab from './VesselStatementCertificateTab';
import VesselStatementFindingTab from './VesselStatementFindingTab';

function VesselStatement() {
    const [horizontalTabs, setHorizontalTabs] = useState("home");

    return (
        <div className="content">
         
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
                AUDITS
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
                CERTIFICATES
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
                FINDINGS    
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
            <VesselStatementAuditTab />            
          </Card>
        </TabPane>
        <TabPane tabId="profile" role="tabpanel">
          <Card>            
            <VesselStatementCertificateTab />            
          </Card>
        </TabPane>
        <TabPane tabId="messages" role="tabpanel">
          <Card>           
            <VesselStatementFindingTab />            
          </Card>
        </TabPane>
      </TabContent>
        </div>
    )
}

export default VesselStatement
