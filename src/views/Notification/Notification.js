import React from "react";
import "./Notification.css";
import { Card } from "antd";
import { Switch } from "antd";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";

import NotificationsIcon from "@material-ui/icons/Notifications";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";

function Notification() {
  return (
    <div className="content">
      <Card title="OVERDUE">
        <div>
          <DirectionsBoatIcon
            className="nc-icon nc-globe text-warning"
            style={{
              fontSize: "30px",
              float: "left",
            }}
          ></DirectionsBoatIcon>

          <h6 style={{ color: "gray", float: "left", marginLeft: "5px" }}>
            Coming in 7 days
          </h6>

          <hr style={{ visibility: "hidden" }}></hr>
        </div>
        <div className="horizontalBreak">
          <hr style={{ fontWeight: "bold" }}></hr>
        </div>
        <div className="notification_switch">
          <div>
            <p className="label">AUDIT</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox color="primary" />
            </div>
          </div>
          <div>
            <p className="label">FINDINGS</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">CERTIFICATE</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              {/* <Switch /> */}
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          {/* <div>
            <p className="label">VESSEL INFO</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Switch />
            </div>
          </div> */}
        </div>

        <div>
          <DirectionsBoatIcon
            className="nc-icon nc-globe text-warning"
            style={{
              fontSize: "30px",
              float: "left",
            }}
          ></DirectionsBoatIcon>

          <h6 style={{ color: "gray", float: "left", marginLeft: "5px" }}>
            Coming in 15 days
          </h6>

          <hr style={{ visibility: "hidden" }}></hr>
        </div>
        <div className="horizontalBreak">
          <hr style={{ fontWeight: "bold" }}></hr>
        </div>
        <div className="notification_switch">
          <div>
            <p className="label">AUDIT</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">FINDINGS</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">CERTIFICATE</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          {/* <div>
            <p className="label">VESSEL INFO</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Switch />
            </div>
          </div> */}
        </div>

        <div>
          <DirectionsBoatIcon
            className="nc-icon nc-globe text-warning"
            style={{
              fontSize: "30px",
              float: "left",
            }}
          ></DirectionsBoatIcon>

          <h6 style={{ color: "gray", float: "left", marginLeft: "5px" }}>
            Coming in 30 days
          </h6>

          <hr style={{ visibility: "hidden" }}></hr>
        </div>
        <div className="horizontalBreak">
          <hr style={{ fontWeight: "bold" }}></hr>
        </div>
        <div className="notification_switch">
          <div>
            <p className="label">AUDIT</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">FINDINGS</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">CERTIFICATE</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          {/* <div>
            <p className="label">VESSEL INFO</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Switch />
            </div>
          </div> */}
        </div>
      </Card>

      <Card title="DUE">
        <div>
          <DirectionsBoatIcon
            className="nc-icon nc-globe text-warning"
            style={{
              fontSize: "30px",
              float: "left",
            }}
          ></DirectionsBoatIcon>

          <h6 style={{ color: "gray", float: "left", marginLeft: "5px" }}>
            Coming in 7 days
          </h6>

          <hr style={{ visibility: "hidden" }}></hr>
        </div>
        <div className="horizontalBreak">
          <hr style={{ fontWeight: "bold" }}></hr>
        </div>
        <div className="notification_switch">
          <div>
            <p className="label">AUDIT</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">FINDINGS</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">CERTIFICATE</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          {/* <div>
            <p className="label">VESSEL INFO</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Switch />
            </div>
          </div> */}
        </div>

        <div>
          <DirectionsBoatIcon
            className="nc-icon nc-globe text-warning"
            style={{
              fontSize: "30px",
              float: "left",
            }}
          ></DirectionsBoatIcon>

          <h6 style={{ color: "gray", float: "left", marginLeft: "5px" }}>
            Coming in 15 days
          </h6>

          <hr style={{ visibility: "hidden" }}></hr>
        </div>
        <div className="horizontalBreak">
          <hr style={{ fontWeight: "bold" }}></hr>
        </div>
        <div className="notification_switch">
          <div>
            <p className="label">AUDIT</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">FINDINGS</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">CERTIFICATE</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
        </div>

        <div>
          <DirectionsBoatIcon
            className="nc-icon nc-globe text-warning"
            style={{
              fontSize: "30px",
              float: "left",
            }}
          ></DirectionsBoatIcon>

          <h6 style={{ color: "gray", float: "left", marginLeft: "5px" }}>
            Coming in 30 days
          </h6>

          <hr style={{ visibility: "hidden" }}></hr>
        </div>
        <div className="horizontalBreak">
          <hr style={{ fontWeight: "bold" }}></hr>
        </div>
        <div className="notification_switch">
          <div>
            <p className="label">AUDIT</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">FINDINGS </p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
          <div>
            <p className="label">CERTIFICATE</p>
            <div style={{ float: "right", marginTop: "-40px" }}>
              <Checkbox size="large" color="primary" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Notification;
