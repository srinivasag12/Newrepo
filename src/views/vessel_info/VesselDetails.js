import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import "./VesselDetails.css";

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
    marginLeft: "3px",
  };

function VesselDetails() {
  const history = useHistory();

  return (
    <div className="content">
      <Card>
        <div class="bookpage">
          <Row>
            <Col md="3">
              <p style={titalstyle}>VESSEL NAME</p>
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
              <div style={titalstyle}>VESSEL IMO NO</div>
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "#6bd098", height: "90px" }}
                    >
                      <i
                        class="fa fa-ship fa-2x"
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
              <div style={titalstyle}>DOC EXPIRY</div>
              <Card style={{ borderRadius: "12px", height: "90px" }}>
                <CardBody>
                  <Row>
                    <Col
                      md="3"
                      className="bookfind"
                      style={{ backgroundColor: "#d43e3e", height: "90px" }}
                    >
                      <i class="fa fa-calendar fa-2x" style={icontyle}></i>
                    </Col>
                    <Col md="9">
                      <div className="booknamestyle">2025-05-19</div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <div style={titalstyle}>BOOK AN AUDIT</div>
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
                        class="fa fa-calendar fa-2x"
                        aria-hidden="true"
                        style={icontyle}
                      ></i>
                    </Col>
                    <Col md="9">
                      <button
                        class="bookbtn btn-outline-warning"
                        onClick={() =>
                          history.push("/admin/book-an-audit", "dtls")
                        }
                      >
                        BOOK
                      </button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

        <hr class="bookline"></hr>
        <Row>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">IMO NUMBER</p>
            <p class="bookanvesselable">9722041</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">VESSEL NAME</p>
            <p class="bookanvesselable">GH CITATION</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">OFFICIAL NUMBER</p>
            <p class="bookanvesselable">7195</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">CALL SIGN</p>
            <p class="bookanvesselable">V7YP9</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">GROSS TON</p>
            <p class="bookanvesselable">36357</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">VESSEL TYPE</p>
            <p class="bookanvesselable">Bulk carrier</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">TC APPROVAL STATUS</p>
            <p class="bookanvesselable">Approved</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">HOME PORT</p>
            <p class="bookanvesselable">Majuro</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">REGISTRATION DATE</p>
            <p class="bookanvesselable">2016-10-25</p>
          </Col>
          <Col md="3">
            <div class="bookiconred icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">VESSEL STATUS</p>
            <p class="bookanvesselable">Active</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">CLASS SOCIETY</p>
            <p class="bookanvesselable">Lloyds Register</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">COMPANY IMO NUMBER</p>
            <p class="bookanvesselable">1601573</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">COMPANY STATUS</p>
            <p class="bookanvesselable">Active</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">DOC TYPE NUMBER</p>
            <p class="bookanvesselable">14988</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">DOC ISSUE DATE</p>
            <p class="bookanvesselable">2020-04-09</p>
          </Col>
          <Col md="3">
            <div class="bookiconred icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">DOC EXPIRY</p>
            <p class="bookanvesselable">2025-05-19</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">DOC TYPE</p>
            <p class="bookanvesselable">Full Term</p>
          </Col>

          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">DOC ISSUER</p>
            <p class="bookanvesselable">DNV GL</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">KEEL LAID DATE</p>
            <p class="bookanvesselable">2014-06-04</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">REG OWNER IMO NO.</p>
            <p class="bookanvesselable">5944975</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">OPERATION CODE</p>
            <p class="bookanvesselable">-</p>
          </Col>

          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">CUSTOMER NAME</p>
            <p class="bookanvesselable">FLEET MANAGEMENT LIMITED</p>
          </Col>
          <Col md="3">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">REGISTERED COMPANY NAME</p>
            <p class="bookanvesselable">GH CITATION LLC</p>
          </Col>
          <Col md="6">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">COMPANY ADDRESS</p>
            <p class="bookanvesselable">
              27TH FLOOR, SOUTH ISLAND PLACE 8 WONG CHUK HANG ROAD HONG KONG
            </p>
          </Col>
          <Col md="6">
            <div class="bookicon icon-shape rounded-circle shadow"></div>
            <p class="bookanvessel">REGISTERED COMPANY ADDRESS</p>
            <p class="bookanvesselable">
              TRUST COMPANY COMPLEX, AJELTAKE ROAD, AJELTAKE ISLAND, MAJURO,
              REPUBLIC OF THE MARSHALL ISLANDS MH 96960
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default VesselDetails;
