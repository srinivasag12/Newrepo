import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import "../vessel_info/Findings.css";
import ReactApexChart from "react-apexcharts";
import { Popover } from "antd";
import FindingsPopovers from "./FindingsPopovers";

class Findings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "",
          data: [44, 55, 57],
        },
        {
          name: "",
          data: [76, 85, 101],
        },
        {
          name: "",
          data: [35, 41, 36],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["ISM", "ISPS", "MLC"],
        },
        yaxis: {
          title: {
            text: "",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    const titalstyle = {
        color: "rgb(154, 154, 154)",
        fontWeight: "600",
        fontSize: "15px",
        textAlign: "center",
      },
      imagestyle = {
        width: "20px",
        marginLeft: "29px",
      },
      icontyle = {
        color: "white",
        textAlign: "center",
        marginTop: "40px",
        marginLeft: "5px",
      };

    return (
      <div className="content">
        <CardTitle
          style={{
            color: "#19979a",
            fontWeight: "700",
            fontSize: "20px",
          }}
          tag="h5"
        >
          FINDINGS
        </CardTitle>
        <Row>
          <Col md="3">
            <Card style={{ borderRadius: "0px", height: "110px" }}>
              <CardBody>
                <Row>
                  <Col
                    md="3"
                    className="cardfind"
                    style={{ backgroundColor: "lightblue" }}
                  >
                    <i
                      class="fa fa-search fa-2x"
                      aria-hidden="true"
                      style={icontyle}
                    ></i>
                  </Col>
                  <Col md="9">
                    <div className="numberstyle" style={{ color: "lightblue" }}>
                      20
                    </div>
                    <p style={titalstyle}>FINDINGS</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card style={{ borderRadius: "0px", height: "110px" }}>
              <CardBody>
                <Row>
                  <Col
                    md="3"
                    className="cardtext"
                    style={{ backgroundColor: "red" }}
                  >
                    <i
                      class="fa fa-envelope-open-o fa-2x"
                      aria-hidden="true"
                      style={icontyle}
                    ></i>
                  </Col>
                  <Col md="9">
                    <div className="numberstyle" style={{ color: "red" }}>
                      12
                    </div>
                    <div style={titalstyle}>OPEN FINDINGS</div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card style={{ borderRadius: "0px", height: "110px" }}>
              <CardBody>
                <Row>
                  <Col
                    md="3"
                    className="cardtext"
                    style={{ backgroundColor: "#6bd098" }}
                  >
                    <i class="fa fa-window-close fa-2x" style={icontyle}></i>
                  </Col>
                  <Col md="9">
                    <div className="numberstyle" style={{ color: "#6bd098" }}>
                      08
                    </div>
                    <div style={titalstyle}>CLOSED FINDINGS</div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card style={{ borderRadius: "0px", height: "110px" }}>
              <CardBody>
                <Row>
                  <Col
                    md="3"
                    className="cardtext"
                    style={{ backgroundColor: "#ef8157" }}
                  >
                    <i
                      class="fa fa-calendar fa-2x"
                      aria-hidden="true"
                      style={icontyle}
                    ></i>
                  </Col>
                  <Col md="9">
                    <div className="numberstyle" style={{ color: "#ef8157" }}>
                      10-May-2021
                    </div>
                    <div style={titalstyle}>FINDINGS DUE DATE</div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <CardTitle
                  style={{
                    color: "#19979a",
                    fontWeight: "700",
                    fontSize: "15px",
                  }}
                  tag="h5"
                >
                  OPEN FINDINGS
                </CardTitle>
              </CardHeader>
              <CardBody>
                <table class="table table-hover">
                  <thead class="primary">
                    <tr>
                      <th scope="col" class="primary">
                        TYPE
                      </th>
                      <th scope="col">SUBTYPE</th>
                      <th scope="col">CATEGORY</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">MORE INFO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ISM</td>
                      <td>INITIAL</td>
                      <td>MNC</td>
                      <td>
                        <span class="badge rounded-pill bg-primary">
                          PLAN ACCEPTED
                        </span>
                      </td>
                      <td>
                        <Popover content={<FindingsPopovers />}>
                          <div style={imagestyle}>
                            <img src={require("../../assets/img/info.png")} />
                          </div>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <td>ISM</td>
                      <td>INTERIM</td>
                      <td>MNC</td>
                      <td>
                        <span class="badge rounded-pill bg-success">
                          VERIFED/CLOSED
                        </span>
                      </td>
                      <td>
                        <Popover content={<FindingsPopovers />}>
                          <div style={imagestyle}>
                            <img src={require("../../assets/img/info.png")} />
                          </div>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <td>ISPS</td>
                      <td>INITIAL</td>
                      <td>OBC</td>
                      <td>
                        <span class="badge rounded-pill bg-secondary">
                          OPEN
                        </span>
                      </td>
                      <td>
                        {" "}
                        <Popover content={<FindingsPopovers />}>
                          <div style={imagestyle}>
                            <img src={require("../../assets/img/info.png")} />
                          </div>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <td>MLC</td>
                      <td>INITIAL</td>
                      <td>OBC</td>
                      <td>
                        <span class="badge rounded-pill bg-secondary">
                          OPEN
                        </span>
                      </td>
                      <td>
                        {" "}
                        <Popover content={<FindingsPopovers />}>
                          <div style={imagestyle}>
                            <img src={require("../../assets/img/info.png")} />
                          </div>
                        </Popover>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <CardBody>
                <p style={titalstyle}>OPEN FINDINGS</p>
                <div id="chart">
                  <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height={275}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Findings;
