import React, { useState } from 'react';
import "./VesselStatement.css";
import {
    Card,
    TabContent,
    TabPane,
    CardBody,
    NavItem,
    NavLink,
    Nav,Row,Button,Col, CardHeader
  } from "reactstrap";
   //import "./Audit.css";

  import { CardActionArea } from '@mui/material';
import VesselStatementAuditTab from './VesselStatementAuditTab';
import VesselStatementCertificateTab from './VesselStatementCertificateTab';
import VesselStatementFindingTab from './VesselStatementFindingTab';
import VesselStatementHistoryTab from './VesselStatementHistoryTab';

const vesselStatementList = [
  {
    vesselName: "MARINE SERVICES",
    color: "info",
    ownervesselscout: "62",
    owener1vesselcount: "72",
  },
  {
    vesselName: "CERTIFICATE / LETTERS",
    color: "success",
    ownervesselscout: "6",
    owener1vesselcount: "42",
  },
  {
    vesselName: "FINDINGS",
    color: "danger",
    ownervesselscout: "16",
    owener1vesselcount: "19",
  },
  {
    vesselName: "HISTORY",
    color: "warning",
    ownervesselscout: "16",
    owener1vesselcount: "19",
  },

];




function VesselStatement() {
    const [horizontalTabs, setHorizontalTabs] = useState("home");
    const [selectedVesselStatementCard, setSelectedVesselStatementCard] = useState(0);

    const selectedVesselStatementHandler = index => {
      setSelectedVesselStatementCard(index);
      console.log("selected findings : ", index)
    }

    const icontyle = {
      color: "white",
      textAlign: "center",
      marginTop: "30px",
      marginLeft: "3px",
    },
    vesseldetails = {
      marginBottom: "0px", textAlign: "center", fontSize: "medium" ,color:"black"
    },
    vesseldetails2 = {
      marginBottom: "0px", textAlign: "center", fontSize: "medium", marginLeft: "5px",color:"rgb(0 0 0 / 38%)"
    };
    return (
        <div className="content"> 
        
  <Card>
        <div className="bookpage" style={{padding: "20px"}}>

            <Card style={{borderRadius: "11px",marginTop: "-38px"}}>
            <Row>
                <Col md="3"  style={{paddingTop:"15px",paddingBottom:"10px"}}>
                  <spam className="labelTitle" style={vesseldetails}>
                    VESSEL NAME :
                  </spam>
                  {localStorage.getItem("role") == "owner1" ?
                  <spam className="labelTitle"  style={vesseldetails2}>
                   DEEPWATER PROTEUS
                  </spam>
                  : <spam className="labelTitle"  style={vesseldetails2}>
                  FEDERAL TAMBO
                </spam>}
                </Col>
                <Col md="3"  style={{marginTop:"15px",paddingBottom:"10px"}}>
                  <spam className="labelTitle" style={vesseldetails}>
                    VESSEL IMO NO :
                  </spam>
                  {localStorage.getItem("role") == "owner1" ?
                  <spam className="labelTitle"  style={vesseldetails2}>
                    9675171
                  </spam>
                  :<spam className="labelTitle"  style={vesseldetails2}>
                  9722041
                </spam>}
                </Col>
                <Col md="3"  style={{marginTop:"15px",paddingBottom:"10px"}}>
                  <spam className="labelTitle" style={vesseldetails}>
                    VESSEL OFFICIAL NO :
                  </spam>
                  {localStorage.getItem("role") == "owner1" ?
                  <spam className="labelTitle"  style={vesseldetails2}>
                    51242
                  </spam>
                  :<spam className="labelTitle"  style={vesseldetails2}>
                  65432
                </spam>}
                </Col>
                <Col md="3"  style={{marginTop:"15px",paddingBottom:"10px"}}>
                  <spam className="labelTitle" style={vesseldetails}>
                    VESSEL TYPE :
                  </spam>
                  {localStorage.getItem("role") == "owner1" ?
                  <spam className="labelTitle"  style={vesseldetails2}>
                    DRILL SHIP
                  </spam>
                  : <spam className="labelTitle"  style={vesseldetails2}>
                   GAS-CARRIER
                 </spam>}
                </Col>
              </Row>
            </Card>


            <div style={{ backgroundColor: "rgb(255 255 255)",margin:"0 auto",display: "grid",gridTemplateColumns: "1fr 1fr 1fr 1fr",gridGap: "10px" }}>
          {vesselStatementList.map((res,index) => (
              <CardActionArea sx={{borderRadius: "10px",height:"81%"}}  onClick={() => { selectedVesselStatementHandler(index) }}>
          <Card style={{background: selectedVesselStatementCard === index ? "#a2e3f561" : "#ffffff",border:selectedVesselStatementCard===index?"2px solid #a2e3f5":"", borderRadius: "12px", height: "90px"}}
           onClick={res.color === "info" ? () => setHorizontalTabs("home") : res.color === "success" ? () => setHorizontalTabs("profile") : res.color === "danger" ? () => setHorizontalTabs("messages"): () => setHorizontalTabs("history")
          }>
                
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{backgroundColor:res.color === "danger" ? "rgb(229, 86, 86)" : res.color === "warning" ? "#fbc658" : res.color === "success" ? "rgb(107, 208, 152)" : "#51bcda",
                         height: "90px",marginTop:"-15px",marginLeft:"-4px",display:" flex",justifyContent:" center"}}
                    >
                      { res.color === "info" ? 
                        <i className= "fa fa-ship fa-2x" aria-hidden="true" style={icontyle} /> :
                        res.color === "success" ? 
                        <i className= "fa fa-certificate fa-2x" aria-hidden="true" style={icontyle} /> :
                        res.color === "danger" ? 
                        <i className= "fa fa-file fa-2x" aria-hidden="true" style={icontyle} /> :
                        <i className= "fa fa-history fa-2x" aria-hidden="true" style={icontyle}/> 
                      }
                      
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle" style={{cursor:"pointer",marginTop: "0px",fontSize:"4.4mm"}}
                        
                      >{res.vesselName}</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </CardActionArea>
               ))}
               </div>


          {/* <Row>
            <Col md="3">
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "lightblue", height: "90px" }}
                    >
                      <i
                        className="fa fa-ship fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle" style={{cursor:"pointer",marginTop: "0px",fontSize:"4.4mm"}}
                         onClick={() => setHorizontalTabs("home")}
                      >MARINE SERVICES</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "#6bd098", height: "90px" }}
                    >
                      <i
                        className="fa fa-certificate fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle" style={{cursor:"pointer",marginTop: "0px",fontSize:"4.4mm"}}
                        onClick={() => setHorizontalTabs("profile")}
                        >CERTIFICATE / LETTERS</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "#d43e3e", height: "90px" }}
                    >
                      <i className="fa fa-file fa-2x" style={icontyle}></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle" style={{cursor:"pointer",fontSize:"4.4mm"}}
                       onClick={() => setHorizontalTabs("messages")}
                      >FINDINGS</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
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
                        className="fa fa-history fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle" style={{cursor:"pointer",fontSize:"4.4mm"}}
                       onClick={() => setHorizontalTabs("history")}
                      >HISTORY</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
     






      {/* <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div style={{backgroundColor: "#51cbce",width: "70px",height: "70px"}}
              className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
              <i className="fa fa-ship fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="text-end pt-1" align = "right">
                <p className="text-sm mb-0 text-capitalize">MSC</p>
                <p className="text-sm mb-0 text-capitalize">INSPECTIONS</p>
                <p className="text-sm mb-0 text-capitalize">STATUTORY</p>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <NavLink
                aria-expanded={horizontalTabs === "home"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={horizontalTabs === "home" ? "verticalTabActive1" : ""}
                onClick={() => setHorizontalTabs("home")}
              >
               <h6 className="mb-0" align = "center" style={{marginTop:"10px",paddingBottom:"5px"}}
            > MARINE SERVICES </h6>
              </NavLink>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
            <div  style={{backgroundColor: "#ef8157",width: "70px",height: "70px"}}
            className="icon-lg icon-shapes bg-gradient-dark shadow-warning text-center mt-n4 position-absolute">
              <i className="fa fa-certificate fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="text-end pt-1"align = "right">
              <p className="text-sm mb-0 text-capitalize">MSC</p>
                <p className="text-sm mb-0 text-capitalize">INSPECTIONS</p>
                <p className="text-sm mb-0 text-capitalize">STATUTORY</p>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <NavLink
                aria-expanded={horizontalTabs === "home"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={horizontalTabs === "profile" ? "verticalTabActive2" : ""}
                onClick={() => setHorizontalTabs("profile")}
              >
               <h6 className="mb-0" align = "center" style={{marginTop:"10px",paddingBottom:"5px"}}
            > CERTIFICATES/LETTERS</h6>
              </NavLink>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
            <div  style={{backgroundColor: "#6bd098",width: "70px",height: "70px"}}
            className="icon-lg icon-shapes bg-gradient-dark shadow-success text-center mt-n4 position-absolute">
              <i className="fa fa-file fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="text-end pt-1"align = "right">
              <p className="text-sm mb-0 text-capitalize"style={{color:"white"}}>STATUTORY</p>
              <p className="text-sm mb-0 text-capitalize">MSC</p>
                <p className="text-sm mb-0 text-capitalize">INSPECTIONS</p>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <NavLink
                aria-expanded={horizontalTabs === "home"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={horizontalTabs === "messages" ? "verticalTabActive3" : ""}
                onClick={() => setHorizontalTabs("messages")}
              >
               <h6 className="mb-0" align = "center" style={{marginTop:"10px",paddingBottom:"5px"}}
            > FINDINGS</h6>
              </NavLink>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2"align = "right">
            <div  style={{backgroundColor: "#e3165bb8",width: "70px",height: "70px"}}
            className="icon-lg icon-shapes bg-gradient-dark shadow-primary text-center mt-n4 position-absolute">
                <i className="fa fa-history fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="text-end pt-1">
              <p className="text-sm mb-0 text-capitalize">MSC</p>
                <p className="text-sm mb-0 text-capitalize">INSPECTIONS</p>
                <p className="text-sm mb-0 text-capitalize">STATUTORY</p>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <NavLink
                aria-expanded={horizontalTabs === "home"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={horizontalTabs === "history" ? "verticalTabActive4" : ""}
                onClick={() => setHorizontalTabs("history")}
              >
               <h6 className="mb-0" align = "center" style={{marginTop:"10px",paddingBottom:"5px"}}
            > HISTORY</h6>
              </NavLink>
          </div>
        </div>
      </div>
       */}







            {/* <div className="nav-tabs-navigation">
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
                MARINE SERVICES
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
                CERTIFICATES AND LETTERS
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
            <NavItem>
              <NavLink
                aria-expanded={horizontalTabs === "history"}
                data-toggle="tab"
                href="#pablo"
                role="tab"
                className={
                  horizontalTabs === "history" ? "verticalTabActive" : ""
                }
                onClick={() => setHorizontalTabs("history")}
              >
                HISTORY    
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div> */}
      <TabContent
        // className="text-center"
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
        <TabPane tabId="history" role="tabpanel">
          <Card>           
            <VesselStatementHistoryTab />            
          </Card>
        </TabPane>
      </TabContent>
      </Card>
        </div>
    )
}

export default VesselStatement
