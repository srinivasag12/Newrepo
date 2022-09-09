/*!

=========================================================
* Paper Dashboard PRO React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  NavLink,
  Col,
  Row,
} from "reactstrap";

import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    console.log("user", event);
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    console.log("pass", event);
    setPassword(event.target.value);
  }

  function handleSubmit() {
    console.log("username", username);
    console.log("password", password);

    {
      // (username == "admin") & (password == "admin") ? admin() : company();
      if( (username == "admin") & (password == "admin")){
        admin()
        console.log("admin");
      }else if( (username == "owner") & (password == "owner")){
        company()
        console.log("company");
      }else if( (username == "owner1") & (password == "owner1")){
        owner1()
        console.log("owner1");
      }else if( (username == "other") & (password == "other")){
        other()
        console.log("other");
      }
    }
  }

  function admin() {
    localStorage.setItem("role", "admin");
    history.push("/admin/dashboard");
  }

  function company() {
    localStorage.setItem("role", "company");
    history.push("/admin/dashboard");
  }

  function owner1() {
    localStorage.setItem("role", "owner1");
    history.push("/admin/dashboard");
  }

  function other() {
    localStorage.setItem("role", "other");
    history.push("/admin/dashboard");
  }

  // class Login extends React.Component {
  //   componentDidMount() {
  //     document.body.classList.toggle("login-page");
  //   }
  //   componentWillUnmount() {
  //     document.body.classList.toggle("login-page");
  //   }

  return (
    <div
      className="full-page-background"
      style={{
        backgroundImage: `url(${require("assets/img/IRI_Login.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow:"hidden",
        position: "absolute",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          fontSize: "xx-large",
          marginTop: " 20px",
          marginLeft: "100px",
          color: "#fafafa",
        }}
      >
        OWNER PORTAL
      </div>
      <div className="content" style={{ marginTop: "150px",marginLeft: "27%" }}>
        <Container style={{ marginLeft: "15%"}}>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form
                action=""
                className="form"
                method=""
                onSubmit={handleSubmit}
              >
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Login</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="User Name ..."
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </InputGroup>
                    <br />
                    <FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue=""
                            type="checkbox"
                          />
                          <span className="form-check-sign" />
                          Remember Me
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </CardBody>
                  <CardFooter className="d-grid">
                    {/* <NavLink  href="/admin/dashboard" className="btn btn-primary">Sign up</NavLink > */}
                    <Button
                      block
                      className="btn-round mb-3"
                      color="success"
                      href="#pablo"
                      // onClick={() => history.push("/admin/dashboard")}
                      onClick={() => handleSubmit()}
                    >
                      Login
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;
