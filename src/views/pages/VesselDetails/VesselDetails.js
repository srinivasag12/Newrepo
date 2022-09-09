import React,{useState} from "react";
import { Card, CardHeader, CardBody, Row, Col,Button,ModalBody,NavLink } from "reactstrap";
import {
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Timeline,
  Popover,
  Radio,
  Modal
} from "antd";
import VesselDetailsPopover from "./VesselDetailsPopover";
import Paragraph from "antd/lib/typography/Paragraph";
import "./VesselDetails.css";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const titalstyle = {
    color: "rgb(154, 154, 154)",
    fontWeight: "600",
    fontSize: "12px",
    marginTop: "-16px",
    marginBottom: " 1px",
  },
  imagestyle = {
    width: "20px",
    marginLeft: "29px",
  },
  icontyle = {
    color: "white",
    textAlign: "center",
    marginTop: "30px",
    marginLeft: "-2px",
  };

function VesselDetails() {
  const [horizontalTabs, setHorizontalTabs] = useState("home");
  const { Title, Text } = Typography;
  const [reverse, setReverse] = useState(false);
  const timelineList = [
    {
      title: "VESSEL NAME",
      title: "grt NAME",
      time: "GH CITATION",
      color: "red",
    },
    {
      title: "VESSEL STATUS",
      time: "INACTIVE",
      color: "blue",
    },
    {
      title: "COMPANY STATUS",
      time: "INACTIVE",
      color: "blue",
    },
    {
      title: "DOC EXPIRY",
      time: "02 JUN 2021",
      color: "red",
    },
    {
      title: "DUE DATE",
      time: "18 MAY 2022",
      color: "red",
    },
    {
      title: "REGISTERED COMPANY NAME",
      time: "GH CITATION LLCC",
      color: "red",
    },
  ];
  const history = useHistory();
  const [modal1, setModal] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log("model")
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
  
    <div className="content">
      
      {/* <Modal style={{marginTop:"100px",width:"400px"}}
      isOpen={modal2} toggle={() => setModal2(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal2(false)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <h6 className="title title-up">VESSEL DATA MODIFIED ON  <span className="vesseldata2"> 20 JAN 2022</span></h6>
        </div>
        <Row style={{marginLeft:"0px",fontSize:"12px"}}>

          <Col md="6">
            <span className="circle text-danger"></span> DOC TYPE :{" "}
            <span className="overviewValues">Full Term </span>
            
          </Col>
          <Col md="6">
            <span className="circle text-danger"></span> VESSEL NAME :{" "}
            <span className="overviewValues">GAA CITATIONS</span>
            
          </Col>
          <Col md="6">
            <span className="circle text-danger"></span>REGISTERED COMPANY NAME :{" "}
            <span className="overviewValues">GAA CITATION LLC </span>
            
          </Col>
          <Col md="6">
            <span className="circle text-danger"></span> COMPANY STATUS :{" "}
            <span className="overviewValues">Active</span>
            
          </Col>
          <Col md="12">
            <span className="circle text-danger"></span> REGISTERED COMPANY ADDRESS :{" "}
            <span className="overviewValues">TRUST COMPANY COMPLEX, AJELTAKE ROAD, ARE ISLAND, MAJURO, REPUBLIC OF THE MARSHALL ISLANDS MH 96960</span>
            
          </Col>
        </Row>
        <div className="modal-footer">
          <Button
            color="danger"
            type="button"
            onClick={() => setModal2(false)}
          >
            Back
          </Button>
        </div>
      </Modal> */}

<Modal style={{ borderRadius:"10px" }}
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={null}
      >
       <div className="modal-header justify-content-center">
          <h4 className="title title-up">VESSEL HISTORY</h4>
        </div>
        {/* <ModalBody> */}
          <div style={{width:"95%"}}>


          <Timeline   mode="alternate">
    <Timeline.Item color="green" style={{fontSize:"12px"}}>
        <span className="circle text-info"></span> VESSEL NAME :{" "}
        <span className="overviewValues"> GH CITATIONS</span>
        <br />
        <span className="circle text-info"></span> OFFICIAL NUMBER :{" "}
        <span className="overviewValues"> 7195</span>
        <br />
        <div className="vesseldata">
         modified on 
        <spam className="text-info"> 25 MAR 2022</spam></div>
      </Timeline.Item>

      <Timeline.Item color="green" style={{fontSize:"12px"}}>
      <span className="circle text-info"></span>  CUSTOMER NAME :{" "}
        <span className="overviewValues"> FLEET MANAGEMENT LIMITED</span>
        <br />
        <span className="circle text-info"></span>  DOC EXPIRY :{" "}
        <span className="overviewValues"> 20-MAY-2025</span>
        <br />
        <div className="vesseldata">
         modified on 
        <spam className="text-info"> 15 FEB 2022</spam></div>
        <Popover  content={<VesselDetailsPopover/> }>
        <a style={{color:"blue"}} >more...</a>
        </Popover>
      </Timeline.Item>

      <Timeline.Item color="green"  style={{fontSize:"12px"}}>
      <span className="circle text-info"></span>  DOC TYPE :{" "}
        <span className="overviewValues"> Full Term</span>
        <br />
        <span className="circle text-info"></span>  VESSEL NAME :{" "}
        <span className="overviewValues"> GH CITATION</span>
        <br />
        <div className="vesseldata">
        modified on 
        <spam className="circle text-info"> 20 JAN 2022</spam></div>
      </Timeline.Item>

      <Timeline.Item color="green"  style={{fontSize:"12px"}}>
      <span className="circle text-info"></span> VESSEL STATUS :{" "}
        <span className="overviewValues"> ACTIVE</span>
        <br />
        <span className="circle text-info"></span> COMPANY ADDRESS :{" "}
        <span className="overviewValues"> 27TH FLOOR, SOUTH ISLAND PLACE 8 WONG CHUK HANG ROAD HONG KONG</span>
        <br />
        <div className="vesseldata">
        modified on  
        <spam className="circle text-info"> 01 JAN 2022</spam></div> 
      </Timeline.Item>

  </Timeline>
                  </div>
        {/* </ModalBody> */}
        <div className="modal-footer">
          <Button
          style={{backgroundColor:"#ef8157"}}
            color="danger"
            type="button"
            onClick={handleCancel}
          >
            Close
          </Button>
        </div>
      </Modal>


      

      <Modal isOpen={modal1} toggle={() => setModal(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal(false)}
          >
           <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <h4 className="title title-up">VESSEL HISTORY</h4>
        </div>
        <ModalBody>
          <div style={{width:"95%"}}>


          <Timeline   mode="alternate">
    <Timeline.Item color="green" style={{fontSize:"12px"}}>
        <span className="circle text-info"></span> VESSEL NAME :{" "}
        <span className="overviewValues"> GH CITATIONS</span>
        <br />
        <span className="circle text-info"></span> OFFICIAL NUMBER :{" "}
        <span className="overviewValues"> 7195</span>
        <br />
        <div className="vesseldata">
         modified on 
        <spam className="text-info"> 25 MAR 2022</spam></div>
      </Timeline.Item>

      <Timeline.Item color="green" style={{fontSize:"12px"}}>
      <span className="circle text-info"></span>  CUSTOMER NAME :{" "}
        <span className="overviewValues"> FLEET MANAGEMENT LIMITED</span>
        <br />
        <span className="circle text-info"></span>  DOC EXPIRY :{" "}
        <span className="overviewValues"> 20-MAY-2025</span>
        <br />
        <div className="vesseldata">
         modified on 
        <spam className="text-info"> 15 FEB 2022</spam></div>
        <Popover  content={<VesselDetailsPopover/> }>
        <a style={{color:"blue"}} >more...</a>
        </Popover>
      </Timeline.Item>

      <Timeline.Item color="green"  style={{fontSize:"12px"}}>
      <span className="circle text-info"></span>  DOC TYPE :{" "}
        <span className="overviewValues"> Full Term</span>
        <br />
        <span className="circle text-info"></span>  VESSEL NAME :{" "}
        <span className="overviewValues"> GH CITATION</span>
        <br />
        <div className="vesseldata">
        modified on 
        <spam className="circle text-info"> 20 JAN 2022</spam></div>
      </Timeline.Item>

      <Timeline.Item color="green"  style={{fontSize:"12px"}}>
      <span className="circle text-info"></span> VESSEL STATUS :{" "}
        <span className="overviewValues"> ACTIVE</span>
        <br />
        <span className="circle text-info"></span> COMPANY ADDRESS :{" "}
        <span className="overviewValues"> 27TH FLOOR, SOUTH ISLAND PLACE 8 WONG CHUK HANG ROAD HONG KONG</span>
        <br />
        <div className="vesseldata">
        modified on  
        <spam className="circle text-info"> 01 JAN 2022</spam></div> 
      </Timeline.Item>

  </Timeline>
                  </div>
        </ModalBody>
        <div className="modal-footer">
          <Button
            color="danger"
            type="button"
            onClick={() => setModal(false)}
          >
            Close
          </Button>
        </div>
      </Modal>


      <Card>
       

        {/* <div className="row">
        <div className="col-xl-2 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div style={{backgroundColor: "#51cbce",width: "70px",height: "70px"}}
              className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
              <i className="fa fa-ship fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="booknamestyle">GH CITATION</div>
            </div>
            <hr className="dark horizontal my-0"/>
          </div>
        </div>
        <div className="col-xl-2 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
            <div  style={{backgroundColor: "rgb(107, 208, 152)",width: "70px",height: "70px"}}
            className="icon-lg icon-shapes bg-gradient-dark shadow-warning text-center mt-n4 position-absolute">
              <i className="fa fa-certificate fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="text-end pt-1"align = "right">
              <div className="booknamestyle">9722041</div>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
          </div>
        </div>
        <div className="col-xl-2 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
            <div  style={{backgroundColor: "rgb(251, 198, 88)",width: "70px",height: "70px"}}
            className="icon-lg icon-shapes bg-gradient-dark shadow-success text-center mt-n4 position-absolute">
              <i className="fa fa-file fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="text-end pt-1"align = "right">
              <div className="booknamestyle">19-MAY-2025</div>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
          </div>
        </div>
        <div className="col-xl-2 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2"align = "right">
            <div  style={{backgroundColor: "#e3165bb8",width: "70px",height: "70px"}}
            className="icon-lg icon-shapes bg-gradient-dark shadow-primary text-center mt-n4 position-absolute">
                <i className="fa fa-history fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="text-end pt-1">
              <button style={{marginLeft:"0px",width: "85px"}}
                        className="bookbtn btn-outline-warning"
                        onClick={() =>
                          history.push("/admin/book-an-audit", "dtls")
                        }
                      >
                        BOOK
                      </button>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
          </div>
        </div>
        <div className="col-xl-2 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2"align = "right">
            <div  style={{backgroundColor: "#e3165bb8",width: "70px",height: "70px"}}
            className="icon-lg icon-shapes bg-gradient-dark shadow-primary text-center mt-n4 position-absolute">
                <i className="fa fa-history fa-2x" style={{marginTop:"20px",color:"white"}}></i>
              </div>
              <div className="text-end pt-1">
              <button style={{marginLeft:"0px",width: "85px"}}
                        className="bookbtn btn-outline-warning"
                        onClick={() => setModal(true)}
                      >
                        HISTORY
                      </button>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
          </div>
        </div>
      </div> */}

{ localStorage.getItem("role") == "admin" ?
<Row>
        <div className="col-md-3"  >   
      <div style={{marginLeft:"5px"}}>
            <p style={titalstyle}>VESSEL NAME</p>
            <Card style={{  borderRadius: "12px", height: "90px"}}>
              <CardBody>
                <Row>
                  <Col
                    md="3"
                    className="bookfind"
                    style={{ backgroundColor: "#51bcda", height: "90px",marginLeft:"-3px",marginTop:"-15px"  }}
                  >
                    <div className="findingicon">
                     <i
                        className="fa fa-ship fa-2x"s
                        aria-hidden="true"
                        style={icontyle}
                      ></i></div>
                  </Col>
                  <Col  md="9">
                    <div className="booknamestyle" style={{fontSize:"16px"}}>FEDERAL TAMBO</div>
                  </Col>
                </Row>
              </CardBody>
            </Card></div>
            </div>
            {/*  style={{width: "12.499999995%",flex:" 1 0 12.499%",maxWidth: "20.499%"}} */}
     <div className="col-md-3"  >
      <div style={titalstyle}>VESSEL IMO NO
              <Card  style={{  borderRadius: "12px", height: "90px"}}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "rgb(107, 208, 152)",height: "90px",marginLeft:"-3px",marginTop:"-15px"}}
                    >
                      <div className="findingicon">
                      <i
                        className="fa fa-ship fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i></div>
                    </Col>
                    <Col  md="9">
                      <div className="booknamestyle">9644495</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </div>
      </div>
     <div className="col-md-3"  >
      <div style={titalstyle}>DOC EXPIRY
              <Card  style={{  borderRadius: "12px", height: "90px"}}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "rgb(229, 86, 86)",height: "90px",marginLeft:"-3px",marginTop:"-15px" }}
                    >
                     <div className="findingicon">
                       <i className="fa fa-calendar fa-2x" style={icontyle}></i></div>
                    </Col>
                    <Col  md="9">
                      <div className="booknamestyle">19-MAY-2025</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </div>
      </div>
     <div className="col-md-3"  >
      <div style={{marginLeft:"5px"}}>
            <p style={titalstyle}>VESSEL HISTORY</p>
               <Card  style={{  borderRadius: "12px", height: "90px"}}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "rgb(251, 198, 88)", height: "90px",marginLeft:"-3px",marginTop:"-15px" }}
                    >
                      <div className="findingicon">
                      <i className="fa fa-history fa-2x" aria-hidden="true"
                    style={icontyle}></i></div>
                    </Col>
                    <Col  md="9">
                    <div className="booknamestyle" style={{marginTop:"0px",fontSize:"17px"}}>
                      <button style={{marginLeft:"-10px",width: "85px"}}
                        className="bookbtn btn-outline-warning"
                        onClick={showModal}  
                      >
                        HISTORY
                      </button></div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </div>
      </div>
      </Row>
      :
      <Row>
        <div className="col-md-2"  >   
      <div style={{marginLeft:"5px"}}>
            <p style={titalstyle}>VESSEL NAME</p>
            <Card style={{  borderRadius: "12px", height: "90px"}}>
              <CardBody>
                <Row>
                  <Col
                    md="4"
                    className="bookfind"
                    style={{ backgroundColor: "#51bcda",height: "90px",marginLeft:"-3px",marginTop:"-15px"  }}
                  >
                    <div className="findingicon">
                     <i
                        className="fa fa-ship fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i></div>
                  </Col>
                  <Col  md="8">
                  {localStorage.getItem("role") == "owner1" ?
                  <div className="vesseldetailtitle" style={{marginTop:"0px",fontSize:"12px"}}>DEEPWATER PROTEUS</div>
                    :<div className="vesseldetailtitle" style={{marginTop:"0px",fontSize:"17px"}}>FEDERAL TAMBO</div>}
                  </Col>
                </Row>
              </CardBody>
            </Card></div>
            </div>
            {/*  style={{width: "12.499999995%",flex:" 1 0 12.499%",maxWidth: "20.499%"}} */}
     <div className="col-md-2"  >
      <div style={titalstyle}>VESSEL IMO NO
              <Card  style={{  borderRadius: "12px", height: "90px"}}>
                <CardBody>
                  <Row>
                    <Col
                      md="4"
                      className="bookfind"
                      style={{ backgroundColor: "rgb(107, 208, 152)",height: "90px",marginLeft:"-3px",marginTop:"-15px"}}
                    >
                      <div className="findingicon">
                      <i
                        className="fa fa-ship fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i></div>
                    </Col>
                    <Col  md="8">
                    {localStorage.getItem("role") == "owner1" ?
                     <div className="vesseldetailtitle">9675171</div>
                      :<div className="vesseldetailtitle">9644495</div>}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </div>
      </div>
     <div className="col-md-2"  >
      <div style={titalstyle}>DOC EXPIRY
              <Card  style={{  borderRadius: "12px", height: "90px"}}>
                <CardBody>
                  <Row>
                    <Col
                      md="4"
                      className="bookfind"
                      style={{ backgroundColor: "rgb(229, 86, 86)",height: "90px",marginLeft:"-3px",marginTop:"-15px" }}
                    >
                     <div className="findingicon">
                       <i className="fa fa-calendar fa-2x" style={icontyle}></i></div>
                    </Col>
                    <Col  md="8">
                    {localStorage.getItem("role") == "owner1" ?
                    <div className="vesseldetailtitle" style={{fontSize:"15px"}}>08-DEC-2026</div>
                      :<div className="vesseldetailtitle" style={{fontSize:"15px"}}>19-MAY-2025</div>}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </div>
      </div>
     <div className="col-md-2"  >
      <div style={titalstyle}>BOOK AN AUDIT
              <Card  style={{  borderRadius: "12px", height: "90px"}}>
                <CardBody>
                  <Row>
                    <Col
                      md="4"
                      className="bookfind"
                      style={{
                        backgroundColor: "rgb(251 198 88)",
                        height: "90px",marginLeft:"-3px",marginTop:"-15px"
                      }}
                    >
                      <div className="findingicon">
                      <i
                        className="fa fa-calendar fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i></div>
                    </Col>
                    <Col  md="8">
                      <div className="vesseldetailtitle" style={{marginTop:"0px",fontSize:"17px"}}>
                      <button style={{marginLeft:"-8px",width: "85px"}}
                        className="bookbtn btn-outline-warning"
                        onClick={() =>
                          history.push("/admin/bookAnAudit", "dtls")
                        }
                      >
                        BOOK
                      </button></div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </div>
      </div>
     <div className="col-md-2"  >
      <div style={{marginLeft:"5px"}}>
            <p style={titalstyle}>VESSEL HISTORY</p>
               <Card  style={{  borderRadius: "12px", height: "90px"}}>
                <CardBody>
                  <Row>
                    <Col
                      md="4"
                      className="bookfind"
                      style={{ backgroundColor: "rgb(251, 198, 88)", height: "90px",marginLeft:"-3px",marginTop:"-15px" }}
                    >
                      <div className="findingicon">
                      <i className="fa fa-history fa-2x" aria-hidden="true"
                    style={icontyle}></i></div>
                    </Col>
                    <Col  md="8">
                    <div className="vesseldetailtitle" style={{marginTop:"0px",fontSize:"17px"}}>
                      <button style={{marginLeft:"-10px",width: "85px"}}
                        className="bookbtn btn-outline-warning"
                        onClick={showModal}
                      >
                        HISTORY
                      </button></div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              </div>
      </div>
      </Row>
      }

        <hr className="bookline"></hr>
        <Row>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">IMO NUMBER</p>
            {localStorage.getItem("role") == "owner1" ?
            <p className="bookanvesselable">9675171</p>
            :<p className="bookanvesselable">9644495</p>}
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">VESSEL NAME</p>
            {localStorage.getItem("role") == "owner1" ?
            <p className="bookanvesselable">DEEPWATER PROTEUS</p>
            :<p className="bookanvesselable">FEDERAL TAMBO</p>}
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">COMPANY IMO NUMBER</p>
            <p className="bookanvesselable">1601573</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">OFFICIAL NUMBER</p>
            <p className="bookanvesselable">7195</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">REG OWNER IMO NO.</p>
            <p className="bookanvesselable">5944975</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">GROSS TON</p>
            <p className="bookanvesselable">36357</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">SOLAS CATEGORY</p>
            <p className="bookanvesselable">Bulk carrier</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">HOME PORT</p>
            <p className="bookanvesselable">Majuro</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">CALL SIGN</p>
            <p className="bookanvesselable">V7YP9</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">CLASS SOCIETY</p>
            <p className="bookanvesselable">Lloyds Register</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">KEEL LAID DATE</p>
            <p className="bookanvesselable">04-JUN-2014</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">REGISTRATION DATE</p>
            <p className="bookanvesselable">25-OCT-2016</p>
          </Col>
          <Col md="3">
            <div className="bookiconred icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">TC APPROVAL STATUS</p>
            <p className="bookanvesselable">Approved</p>
          </Col>
          <Col md="3">
            <div className="bookiconred icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">VESSEL STATUS</p>
            <p className="bookanvesselable">Active</p>
          </Col>
          <Col md="3">
            <div className="bookiconred icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">COMPANY STATUS</p>
            <p className="bookanvesselable">Active</p>
          </Col>
          <Col md="3">
            <div className="bookiconred icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">DOC EXPIRY</p>
            {localStorage.getItem("role") == "owner1" ?
            <p className="bookanvesselable">08-DEC-2026</p>
           :<p className="bookanvesselable">19-MAY-2025</p>}
          </Col>
          {/* <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">DOC TYPE NUMBER</p>
            <p className="bookanvesselable">14988</p>
          </Col> */}
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">DOC TYPE NUMBER</p>
            <p className="bookanvesselable">14988</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">DOC ISSUE DATE</p>
            <p className="bookanvesselable">09-APR-2020</p>
          </Col>
          {/* <Col md="3">
            <div className="bookiconred icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">DOC EXPIRY</p>
            {localStorage.getItem("role") == "owner1" ?
            <p className="bookanvesselable">2026-08-12</p>
            :  <p className="bookanvesselable">19-MAY-2025</p>}
          </Col> */}
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">DOC TYPE</p>
            <p className="bookanvesselable">Full Term</p>
          </Col>

          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">DOC ISSUER</p>
            <p className="bookanvesselable">DNV GL</p>
          </Col>
          {/* <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">KEEL LAID DATE</p>
            <p className="bookanvesselable">2014-06-04</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">REG OWNER IMO NO.</p>
            <p className="bookanvesselable">5944975</p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">OPERATION CODE</p>
            <p className="bookanvesselable">-</p>
          </Col> */}

          <Col md="6">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">CUSTOMER NAME AND ADDRESS</p>
            <p className="bookanvesselable">FLEET MANAGEMENT LIMITED</p>
            <p className="bookanvesselable">
              27TH FLOOR, SOUTH ISLAND PLACE 8 WONG CHUK HANG ROAD HONG KONG
            </p>
          </Col>
          <Col md="6">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">REGISTERED COMPANY NAME AND ADDRESS</p>
            <p className="bookanvesselable">GH CITATION LLC</p>
            <p className="bookanvesselable">
              TRUST COMPANY COMPLEX, AJELTAKE ROAD, AJELTAKE ISLAND, MAJURO,
              REPUBLIC OF THE MARSHALL ISLANDS MH 96960
            </p>
          </Col>
          <Col md="3">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">OPERATION CODE</p>
            <p className="bookanvesselable">Permanent Certificate</p>
          </Col>
          {/* <Col md="6">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">COMPANY ADDRESS</p>
            <p className="bookanvesselable">
              27TH FLOOR, SOUTH ISLAND PLACE 8 WONG CHUK HANG ROAD HONG KONG
            </p>
          </Col>
          <Col md="6">
            <div className="bookicon icon-shape rounded-circle shadow"></div>
            <p className="bookanvessel">REGISTERED COMPANY ADDRESS</p>
            <p className="bookanvesselable">
              TRUST COMPANY COMPLEX, AJELTAKE ROAD, AJELTAKE ISLAND, MAJURO,
              REPUBLIC OF THE MARSHALL ISLANDS MH 96960
            </p>
          </Col> */}
        </Row>
      </Card>
    </div>
  );
}

export default VesselDetails;
