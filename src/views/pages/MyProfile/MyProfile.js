import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
// import "./MyProfile.css";

import { Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Tag, Divider } from "antd";
function MyProfile() {
  return (
    <div className="content">
      <Row>
        <Col md="4">
          <Card className="card-user">
            <div className="image">
              <img alt="..." src={require("assets/img/bg/damir-bosnjak.jpg")} />
            </div>
            <CardBody>
              <div className="author">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={require("assets/img/default-avatar.png")}
                  />
                  <h5 className="title">Chet Faker</h5>
                </a>
                <p className="description">
                  {/* <Tag color="processing">AUDITOR</Tag> */}
                  <Tag color="#2db7f5">
                    {localStorage.getItem("role") === "company"
                      ? "DPA"
                      : "AUDITOR"}
                  </Tag>
                </p>

                <p style={{ fontWeight: "600" }}>chetfaker@email.com</p>

                <Row>
                  <Col>
                    <span> STATUS :</span>
                    <span className="circle text-success"></span>
                    <span className="overviewValues">ACTIVE</span>
                  </Col>

                  <Col>
                    <span> YEAR JOINED :</span>
                    <span
                      className="circle text-success"
                      style={{ visibility: "hidden" }}
                    ></span>
                    <span className="overviewValues"> 2015</span>
                  </Col>
                </Row>

                {/* <br />
                <span> STATUS :</span>
                <span className="circle text-success"></span>
                <span className="overviewValues">ACTIVE</span> */}
              </div>
              {/* <p className="description text-center">
                "I like the way you work it <br />
                No diggity <br />I wanna bag it up"
              </p> */}
            </CardBody>
            <CardFooter>
              <hr />
              <div className="button-container">
                <Row>
                  <Col className="ml-auto" lg="3" md="6" xs="6">
                    <h5>
                      <span
                        style={{
                          color: "#42a5f5",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        2
                      </span>{" "}
                      <br />
                      <small className="titlesentencestyle">Company</small>
                    </h5>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                    <h5>
                      <span
                        style={{
                          color: "rgb(255 112 67)",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        4
                      </span>{" "}
                      <br />
                      <small className="titlesentencestyle">Vessels</small>
                    </h5>
                  </Col>

                  {/* <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                    <h5>
                      <span
                        style={{
                          color: "#9ccc65",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        25
                      </span>{" "}
                      <br />
                      <small className="titlesentencestyle">Audits</small>
                    </h5>
                  </Col> */}
                  {/* <Col className="mr-auto" lg="3">
                    <h5>
                      July-2010 <br />
                      <small>Active</small>
                    </h5>
                  </Col> */}
                </Row>
              </div>
            </CardFooter>
          </Card>
        </Col>
        <Col md="8">
          <Card>
            <CardHeader>
              <h5 className="title">Edit Profile</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Company </label>
                      <Input
                        defaultValue={
                          localStorage.getItem("role") === "company"
                            ? "ANGLO - EASTERN" : localStorage.getItem("role") === "owner1" ? "TRANSOCEAN OFFSHORE DEEPWATER DRILLING INC."
                            : "PETROLEO BRASILEIRO S.A. - UO ES"
                        }
                        disabled
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="3">
                    <FormGroup>
                      <label>Username</label>
                      <Input
                        defaultValue="michael23"
                        placeholder="Username"
                        type="text"
                        readonly
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Input
                        placeholder="Email"
                        type="email"
                        defaultValue="chetfaker@email.com"
                        readonly
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        defaultValue="Chet"
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <Input
                        defaultValue="Faker"
                        placeholder="Last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        defaultValue="Melbourne, Australia"
                        placeholder="Home Address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h5 className="title">Change Password</h5>
            </CardHeader>
            <CardBody>
              {/* <div className="modal-form-group">
				          <label for="password">Password </label>
                  <input type="text" name="password" placeholder="Enter Password" id="password">
			        </div>

						  <div className="modal-form-group">
				          <label for="confirm-password">Confirm Password </label>
                  <input type="password" name="confirm-password" placeholder="Confirm Your Password" id="confirm-password">
			        </div> */}

              <div>
                <FormGroup>
                  <label>Current Password</label>
                  <Input placeholder="Current Password" type="text" />
                </FormGroup>

                <FormGroup>
                  <label>New Password</label>
                  <Input placeholder="New Password" type="password" />
                </FormGroup>

                <div style={{ textAlign: "center" }}>
                  <Button
                    type="primary"
                    size="small"
                    loading
                    style={{ background: "#1890ff" }}
                  >
                    Change Password
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MyProfile;
