import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { VectorMap } from "react-jvectormap";
import {
  Chart,
  PieSeries,
  Legend,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const data = [
  { region: "Audits", val: 857, backgroundColor: "bg" },
  { region: "Findings", val: 116, backgroundColor: "bg" },
  // { region: "ISPS ", val: 116 },
  { region: "Certificates", val: 258, backgroundColor: "bg" },
  { region: "Orders", val: 182, backgroundColor: "bg" },
];

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const pistyle = {
        marginLeft: "50px",
        marginTop: "-40px",
        width: "480px",
        height: "400px",
      },
      sentecestyle = {
        textTransform: "capitalize",
        fontWeight: "600",
        color: "#9A9A9A",
      },
      sentecestyleblck = {
        textTransform: "capitalize",
        fontWeight: "600",
        color: "black",
      },
      titlesentencestyle = {
        textTransform: "capitalize",
        fontWeight: "600",
        color: "#9A9A9A",
        fontSize: "large",
        marginBottom: "20px",
      },
      numberstyle1 = {
        color: "#42a5f5",
        fontWeight: "600",
        fontSize: "30px",
        marginTop: "-15px",
        marginBottom: "-43px",
        marginLeft: "0px",
      },
      numberstyle2 = {
        color: "#ffca28",
        fontWeight: "600",
        fontSize: "30px",
        marginTop: "-15px",
        marginBottom: "-43px",
        marginLeft: "0px",
      },
      numberstyle3 = {
        color: "#9ccc65",
        fontWeight: "600",
        fontSize: "30px",
        marginTop: "-15px",
        marginBottom: "-43px",
        marginLeft: "0px",
      },
      numberstyle4 = {
        color: "rgb(255 112 67)",
        fontWeight: "600",
        fontSize: "30px",
        marginTop: "-15px",
        marginBottom: "-43px",
        marginLeft: "0px",
      },
      totalvesselsstyle = {
        color: "#51bcda",
        fontWeight: "600",
        fontSize: "30px",
        marginLeft: "6px",
      };
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  {/* <CardTitle
                    style={{
                      color: "#19979a",
                      fontWeight: "700",
                      fontSize: "30px",
                    }}
                    tag="h4"
                  >
                    FLEET COMPLIANCE
                  </CardTitle> */}
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      {/* <CardTitle
                        style={{
                          color: "#ef8157",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                        tag="h6"
                      >
                        OWNER PORTAL WORD IS GETTING TRIMMED
                      </CardTitle> */}

                      <CardTitle
                        style={{
                          color: "#19979a",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                        tag="h5"
                      >
                        FLEET COMPLIANCE
                      </CardTitle>

                      <div
                        style={{
                          marginLeft: "185px",
                          marginTop: "140px",
                          position: "absolute",
                          color: "rgb(0 0 0 / 25%)",
                        }}
                      >
                        <i class="fa fa-ship fa-4x"></i>
                        <div style={totalvesselsstyle}>182</div>
                        <h6
                          style={{
                            marginLeft: "-13px",
                            color: "rgb(0 0 0 / 25%)",
                          }}
                        >
                          Total Vessels
                        </h6>
                      </div>
                      <Chart style={pistyle} data={chartData}>
                        <PieSeries
                          valueField="val"
                          argumentField="region"
                          innerRadius={0.6}
                          color="backgroundColor"
                        ></PieSeries>
                        <Legend></Legend>
                        <Animation />
                      </Chart>
                    </Col>
                    <Col md="6">
                      <p style={titlesentencestyle}>Your Vessels</p>
                      <div style={{ display: "flex" }}>
                        <Col md={"2"}>
                          <div style={numberstyle4}>116 &nbsp;&nbsp;</div>
                        </Col>
                        <p style={sentecestyle}>Vessels with Overdue</p>&nbsp;
                        <div style={sentecestyleblck}>Audits</div>
                      </div>
                      <hr style={{ marginTop: "0" }}></hr>

                      <div style={{ display: "flex" }}>
                        <Col md={"2"}>
                          <div style={numberstyle1}>587 &nbsp;&nbsp;</div>
                        </Col>
                        <p style={sentecestyle}>Vessels WIth </p>&nbsp;
                        <div style={sentecestyleblck}>Audits</div>&nbsp;
                        <p style={sentecestyle}>Overdue Within 180 Days</p>
                      </div>
                      <hr style={{ marginTop: "0" }}></hr>

                      <div style={{ display: "flex" }}>
                        <Col md={"2"}>
                          <div style={numberstyle3}>66 &nbsp;&nbsp;</div>
                        </Col>
                        <p style={sentecestyle}>Vessels with Overdue</p>&nbsp;
                        <div style={sentecestyleblck}>Findings</div>
                      </div>
                      <hr style={{ marginTop: "0" }}></hr>

                      <div style={{ display: "flex" }}>
                        <Col md={"2"}>
                          <div style={numberstyle2}>182 &nbsp;&nbsp;</div>
                        </Col>
                        <p style={sentecestyle}>Vessels with </p>&nbsp;
                        <div style={sentecestyleblck}>Findings</div>&nbsp;
                        <p style={sentecestyle}> Overdue Within 180 Days</p>
                      </div>
                      <hr style={{ marginTop: "0" }}></hr>

                      <div style={{ display: "flex" }}>
                        <Col md={"2"}>
                          <div style={numberstyle1}>270 &nbsp;&nbsp;</div>
                        </Col>
                        <p style={sentecestyle}>Vessels with </p>&nbsp;
                        <div style={sentecestyleblck}>Certificates</div>&nbsp;
                        <p style={sentecestyle}>expiring in 180Days</p>
                      </div>
                      <hr style={{ marginTop: "0" }}></hr>

                      <div style={{ display: "flex" }}>
                        <Col md={"2"}>
                          <div style={numberstyle3}>21 &nbsp;&nbsp;</div>
                        </Col>
                        <p style={sentecestyle}>Vessels with </p>&nbsp;
                        <div style={sentecestyleblck}>Submitted Orders</div>
                      </div>
                      <hr style={{ marginTop: "0" }}></hr>

                      <div style={{ display: "flex" }}>
                        <Col md={"2"}>
                          <div style={numberstyle3}>171 &nbsp;&nbsp;</div>
                        </Col>
                        <p style={sentecestyle}>Vessels with</p>&nbsp;
                        <div style={sentecestyleblck}>Attendance</div>&nbsp;
                        <p style={sentecestyle}>in Progress</p>
                        <hr style={{ marginTop: "0" }}></hr>
                      </div>
                    </Col>
                    {/* <Col className="ml-auto mr-auto" md="9">
                      <VectorMap
                        map={"world_mill"}
                        backgroundColor="transparent"
                        zoomOnScroll={false}
                        containerStyle={{
                          height: "480px",
                        }}
                        containerClassName="map"
                        regionStyle={{
                          initial: {
                            fill: "#e4e4e4",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0,
                          },
                        }}
                        series={{
                          regions: [
                            {
                              values: mapData,
                              scale: ["#AAAAAA", "#444444"],
                              normalizeFunction: "polynomial",
                            },
                          ],
                        }}
                      />
                    </Col> */}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
