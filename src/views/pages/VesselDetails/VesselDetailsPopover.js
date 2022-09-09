import React from "react";
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
// import "../vessel_info/VesselOverviewPopover.css";

function VesselDetailsPopover(props) {
  return (
    <div>
      <Card>
        <CardHeader>
        <h6 className="title title-up">VESSEL DATA MODIFIED ON  <span className="text-info"> 20 JAN 2022</span></h6>
        </CardHeader>
        <CardBody>
        <div style={{fontSize:"12px"}}>
       
       <span className="circle text-warning"></span> DOC TYPE :{" "}
       <span className="overviewValues">Full Term </span>
       <br />
       <span className="circle text-warning"></span> VESSEL NAME :{" "}
       <span className="overviewValues">GAA CITATIONS</span>
       <br />
       <span className="circle text-warning"></span> REGISTERED COMPANY NAME :{" "}
       <span className="overviewValues">GAA CITATION LLC </span>
       <br />
       <span className="circle text-warning"></span> COMPANY STATUS :{" "}
       <span className="overviewValues">Active</span>
       <br />
     </div>
        </CardBody>
       
      </Card>
      
    </div>
  );
}

export default VesselDetailsPopover;
