import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

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
  };
function Surveys() {
  return (
    <div className="content">
      <h4 class="cardTitle">Surveys</h4>
      {/* <div className="content">Audit</div> */}
      <Row>
        <Col md="2">
          {/* style={{borderRadius:"0px"}} */}
          <Card>
            <CardBody>
              <div style={titalstyle}>Surveys</div>
              <hr></hr>
              <Row>
                <Col md="6">
                  <div style={numberstyle}>7</div>
                  <div style={textstyle}>Overdue</div>
                </Col>
                <Col md="6">
                  <div style={numberstyle2}>0</div>
                  <div style={textstyle}>Due</div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <div style={titalstyle}>Findings</div>
              <hr></hr>
              <Row>
                <Col md="6">
                  <div style={numberstyle}>0</div>
                  <div style={textstyle}>Overdue</div>
                </Col>
                <Col md="6">
                  <div style={numberstyle2}>0</div>
                  <div style={textstyle}>Due</div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="2">
          <Card>
            <CardBody>
              <div style={titalstyle}>Certificates</div>
              <hr></hr>
              <Row>
                <Col md="12">
                  <div style={numberstyle2}>0</div>
                  <div style={textstyle}>Expiring</div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="2">
          <Card>
            <CardBody>
              <div style={titalstyle}>Parts</div>
              <hr></hr>
              <Row>
                <Col md="12">
                  <div style={numberstyle}>28</div>
                  <div style={textstyle}>Overdue</div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Surveys;
