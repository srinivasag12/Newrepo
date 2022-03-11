import React, { useState, useEffect } from "react";
import "./UserMaintenance.css";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button, Radio, notification } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import { EnvironmentOutlined } from "@ant-design/icons";
import { FieldBinaryOutlined } from "@ant-design/icons";
import { ContactsOutlined } from "@ant-design/icons";

import AngloEastern from "../../assets/img/Anglo-Eastern.png";

import { Checkbox } from "antd";

import { Avatar, Image } from "antd";

import { Select } from "antd";

import { Tooltip } from "antd";

const { Option } = Select;

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Success",
    description: "Auditor created successfully.",
    placement: "topLeft",
  });
};

function UserMaintenance() {
  const [role, setRole] = useState("Company");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyImo, setCompanyImo] = useState("");

  useEffect(() => {
    console.log("Use Effect Role ::", role);
  }, [role]);

  function handleChange(value) {
    console.log(value.value);
    console.log(role);
    setRole(value.value);
    console.log(role);
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const handleCompanyNameChange = (event) => {
    console.log("handleCompanyNameChange", event.target.value);
    setCompanyName(event.target.value);
  };

  const handleCompanyAddressChange = (event) => {
    console.log("handleCompanyAddressChange", event.target.value);
    setCompanyAddress(event.target.value);
  };

  const handleCompanyImoChange = (event) => {
    console.log("handleCompanyImoChange", event.target.value);
    setCompanyImo(event.target.value);
  };

  function retriveInfo() {
    console.log("retriveInfo");
    setCompanyName("PETROLEO BRASILEIRO S.A. - UO ES");
    setCompanyAddress(
      "27TH FLOOR, SOUTH ISLAND PLACE 8 WONG CHUK HANG ROAD HONG KONG"
    );
    setCompanyImo("0161412");
  }

  return (
    <div className="content">
      <div>
        <Card className="roleCard">
          <div>
            {/* <p>
            <Input
              size="large"
              placeholder="First Name"
              prefix={<UserOutlined />}
            />
          </p>
          <p>
            <Input
              size="large"
              placeholder="Last Name"
              prefix={<UserOutlined />}
            />
          </p> */}
            <p>
              {localStorage.getItem("role") == "admin" ? (
                <Select
                  size="large"
                  labelInValue="Role"
                  placeholder="Role"
                  defaultValue={{ value: "Company" }}
                  style={{ width: 300 }}
                  onChange={handleChange}
                >
                  <Option value="Auditor">Auditor</Option>
                  <Option value="Company">Company</Option>
                </Select>
              ) : (
                <Select
                  size="large"
                  labelInValue="Role"
                  placeholder="Role"
                  defaultValue={{ value: "User" }}
                  style={{ width: 300 }}
                  onChange={handleChange}
                >
                  <Option value="User">User</Option>
                </Select>
              )}
            </p>
          </div>
        </Card>
      </div>

      <div></div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {localStorage.getItem("role") == "admin" ? (
        <div>
          {(() => {
            if (role === "Auditor") {
              return (
                <Card>
                  <div className="right">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined size="large" />}
                      size="large"
                      style={{ float: "right" }}
                    >
                      Retrieve Information
                    </Button>
                  </div>

                  <div style={{ textAlign: "center", padding: "20px" }}>
                    <Avatar size={40} shape="square" icon={<UserOutlined />} />
                  </div>

                  <div className="userMaintenanceCard1">
                    <div>
                      <Input
                        size="large"
                        placeholder="First Name"
                        prefix={<UserOutlined style={{ color: "cadetblue" }} />}
                      />
                    </div>

                    <div>
                      <Input
                        size="large"
                        placeholder="Last Name"
                        prefix={
                          <UserOutlined style={{ color: "darkolivegreen" }} />
                        }
                      />
                    </div>
                  </div>

                  <div className="userMaintenanceCard">
                    <div>
                      <Input
                        size="large"
                        placeholder="Auditor Name"
                        prefix={<UserOutlined style={{ color: "cadetblue" }} />}
                      />
                    </div>

                    <div>
                      <Input
                        size="large"
                        placeholder="Auditor Designation"
                        prefix={
                          <ContactsOutlined
                            style={{ color: "darkolivegreen" }}
                          />
                        }
                      />
                    </div>

                    <div>
                      <Input
                        size="large"
                        placeholder="Auditor Email ID"
                        prefix={<MailOutlined style={{ color: "skyblue" }} />}
                      />
                    </div>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <Checkbox onChange={onChange}>
                      <p style={{ fontWeight: "bold" }}>
                        Access to all Company
                      </p>
                    </Checkbox>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div className="footer_btn_section">
                      <div></div>
                      <Button type="primary" size="default" danger>
                        Clear
                      </Button>

                      <Button type="primary" size="default">
                        Save
                      </Button>
                      <div></div>
                    </div>
                  </div>
                </Card>
              );
            } else if (role === "Company") {
              return (
                <Card>
                  {/* <div className="right">
                  <Button
                    type="primary"
                    icon={<DownloadOutlined size="large" />}
                    size="large"
                    style={{ float: "right" }}
                    onClick={retriveInfo}
                  >
                    Retrieve Information
                  </Button>
                </div> */}

                  <div style={{ textAlign: "center", padding: "10px" }}>
                    {role === "Company" ? (
                      <Avatar
                        size={40}
                        shape="square"
                        icon={<GlobalOutlined />}
                      />
                    ) : (
                      <Avatar
                        size={40}
                        shape="square"
                        icon={<GlobalOutlined />}
                      />
                    )}
                  </div>

                  <div className="userMaintenanceCard">
                    <div>
                      <Input
                        size="large"
                        placeholder="First Name"
                        prefix={<UserOutlined />}
                      />
                    </div>

                    <div>
                      <Input
                        size="large"
                        placeholder="Last Name"
                        prefix={<UserOutlined />}
                      />
                    </div>

                    <div>
                      <Input
                        size="large"
                        placeholder="Login ID/Email ID"
                        prefix={<MailOutlined />}
                      />
                    </div>
                  </div>

                  <div className="userMaintenanceCard">
                    <div>
                      <Input
                        value={companyName}
                        onChange={handleCompanyNameChange}
                        size="large"
                        placeholder="Company Name"
                        prefix={
                          <GlobalOutlined style={{ color: "cadetblue" }} />
                        }
                      />
                    </div>

                    <div>
                      <Tooltip title={companyAddress}>
                        <Input
                          value={companyAddress}
                          onChange={handleCompanyAddressChange}
                          size="large"
                          placeholder="Company Address"
                          prefix={
                            <EnvironmentOutlined
                              style={{ color: "palevioletred" }}
                            />
                          }
                        />
                      </Tooltip>
                    </div>

                    <div>
                      <Input
                        value={companyImo}
                        onChange={handleCompanyImoChange}
                        size="large"
                        placeholder="Company Imo No."
                        prefix={
                          <FieldBinaryOutlined style={{ color: "seagreen" }} />
                        }
                      />
                    </div>
                  </div>

                  {/* <div style={{ textAlign: "center" }}>
          <Checkbox onChange={onChange}>
            <p style={{ fontWeight: "bold" }}>Access to all Company</p>
          </Checkbox>
        </div> */}

                  <div style={{ textAlign: "center" }}>
                    <div className="footer_btn_section">
                      <div></div>
                      <Button type="primary" size="default" danger>
                        Clear
                      </Button>

                      <Button type="primary" size="default">
                        Save
                      </Button>
                      <div></div>
                    </div>
                  </div>
                </Card>
              );
            }
          })()}
        </div>
      ) : (
        <div>
          <Card>
            {/* <div className="right">
                  <Button
                    type="primary"
                    icon={<DownloadOutlined size="large" />}
                    size="large"
                    style={{ float: "right" }}
                    onClick={retriveInfo}
                  >
                    Retrieve Information
                  </Button>
                </div> */}

            <div style={{ textAlign: "center", padding: "10px" }}>
              {role === "Company" ? (
                <Avatar size={40} shape="square" icon={<UserOutlined />} />
              ) : (
                <Avatar size={40} shape="square" icon={<UserOutlined />} />
              )}
            </div>

            <div className="userMaintenanceCard">
              <div>
                <Input
                  size="large"
                  placeholder="First Name"
                  prefix={<UserOutlined />}
                />
              </div>

              <div>
                <Input
                  size="large"
                  placeholder="Last Name"
                  prefix={<UserOutlined />}
                />
              </div>

              <div>
                <Input
                  size="large"
                  placeholder="Login ID/Email ID"
                  prefix={<MailOutlined />}
                />
              </div>
            </div>

            <div className="userMaintenanceCard">
              <div>
                <Input
                  value="ANGLO-EASTERN"
                  onChange={handleCompanyImoChange}
                  size="large"
                  placeholder="Company"
                  readOnly
                  prefix={<GlobalOutlined style={{ color: "seagreen" }} />}
                />
              </div>

              <div>
                <Tooltip title={companyAddress}>
                  <Input
                    value="Kowloon Bay ,Kowloon ,Hong Kong"
                    onChange={handleCompanyAddressChange}
                    size="large"
                    placeholder=" Address"
                    prefix={
                      <EnvironmentOutlined style={{ color: "palevioletred" }} />
                    }
                  />
                </Tooltip>
              </div>

              <div>
                <Select
                  showSearch
                  mode="multiple"
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="Select a vessel"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="4 YOU">4 YOU</Option>
                  <Option value="FEDERAL ASAHI">FEDERAL ASAHI</Option>
                  <Option value="ADVANTAGE SKY">ADVANTAGE SKY</Option>
                  <Option value="BLUE EVERTON">BLUE EVERTON</Option>
                  <Option value="SCOUT II">SCOUT II</Option>
                </Select>
              </div>
            </div>

            {/* <div style={{ textAlign: "center" }}>
          <Checkbox onChange={onChange}>
            <p style={{ fontWeight: "bold" }}>Access to all Company</p>
          </Checkbox>
        </div> */}

            <div style={{ textAlign: "center" }}>
              <div className="footer_btn_section">
                <div></div>
                <Button type="primary" size="default" danger>
                  Clear
                </Button>

                <Button type="primary" size="default">
                  Create User
                </Button>
                <div></div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* <Card>
        <div className="right">
          <Button
            type="primary"
            icon={<DownloadOutlined size="large" />}
            size="large"
            style={{ float: "right" }}
          >
            Retrieve Information
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>
          <Avatar size={40} icon={<UserOutlined />} />
        </div>

        <div className="userMaintenanceCard">
          <div>
            <Input
              size="large"
              placeholder="Auditor Name"
              prefix={<UserOutlined />}
            />
          </div>

          <div>
            <Input
              size="large"
              placeholder="Auditor Designation"
              prefix={<ContactsOutlined />}
            />
          </div>

          <div>
            <Input
              size="large"
              placeholder="Auditor Email ID"
              prefix={<MailOutlined />}
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Checkbox onChange={onChange}>
            <p style={{ fontWeight: "bold" }}>Access to all Company</p>
          </Checkbox>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="footer_btn_section">
            <div></div>
            <Button type="primary" size="default" danger>
              Clear
            </Button>

            <Button type="primary" size="default">
              Save
            </Button>
            <div></div>
          </div>
        </div>
      </Card> */}

      <br></br>

      {/* <Card>
        <div className="right">
          <Button
            type="primary"
            icon={<DownloadOutlined size="large" />}
            size="large"
            style={{ float: "right" }}
          >
            Retrieve Information
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>
          <Avatar size={40} icon={<GlobalOutlined />} />
        </div>

        <div className="userMaintenanceCard">
          <div>
            <Input
              size="large"
              placeholder="Company Name"
              prefix={<GlobalOutlined />}
            />
          </div>

          <div>
            <Input
              size="large"
              placeholder="Company Address"
              prefix={<EnvironmentOutlined />}
            />
          </div>

          <div>
            <Input
              size="large"
              placeholder="Company Imo No."
              prefix={<FieldBinaryOutlined />}
            />
          </div>
        </div>

       

        <div style={{ textAlign: "center" }}>
          <div className="footer_btn_section">
            <div></div>
            <Button type="primary" size="default" danger>
              Clear
            </Button>

            <Button type="primary" size="default">
              Save
            </Button>
            <div></div>
          </div>
        </div>
      </Card> */}
    </div>
  );
}

export default UserMaintenance;
