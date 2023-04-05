import React, { useState } from 'react';
import { Tabs } from "antd";
// import "../vessel_info/Audit.css";
import { Tag, Divider } from "antd";
import { Table } from "antd";

// Z
import { useHistory } from "react-router-dom";
import { Collapse } from "antd";

import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";


const { TabPane } = Tabs;

const columns = [
  {
    title:  <p style={{textAlign:"center" }}> First Name</p>,
    dataIndex: "name",
    render(text, record) {
      return {
        props: {
          style: { color: record.color,textAlign:"center" },
        },
        children: <div>{text}</div>,
      };
    }
  },
  {
    title:  <p style={{textAlign:"center" }}> Last Name</p>,
    // "Last Name",
    dataIndex: "due_date",
  },
 
  {
    title: <p style={{textAlign:"center" }}> Location</p>,
    //  "Location",
    dataIndex: "location",
  },
  {
    title:  <p style={{textAlign:"center" }}> Email ID</p>,
    // "Email ID",
    dataIndex: "email",
  },
   // {
  //   title:  <p style={{textAlign:"center" }}> Vessel Type</p>,
  //   // "Vessel Type",
  //   dataIndex: "window_range",
  // },
];

const columnsHistory = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Status",
    dataIndex: "status",
  }
];

const { Panel } = Collapse;

function UserComapanyDetails() {
  const history = useHistory();


  const dataISM = [
    {
      key: "1",
      name: <p style={{fontSize: "13px",textAlign:"center" }}> FEDERAL </p>,
      due_date: <p style={{fontSize: "13px",textAlign:"center" }}>TAMBO</p>,
      window_range: <p style={{fontSize: "13px",textAlign:"center" }}>INITIAL</p>,
      location: <p style={{fontSize: "13px",textAlign:"center" }}>Houston , TX</p>,     
      email: <p style={{fontSize: "13px",textAlign:"center" }}>user@federaltambo.com</p>,
    },
    {
      key: "2",
      name: <p style={{fontSize: "13px",textAlign:"center" }}>BALTIC </p>,
      due_date: <p style={{fontSize: "13px",textAlign:"center" }}>LEOPARD</p>,
      window_range: <p style={{fontSize: "13px",textAlign:"center" }}>INTERMEDIATE</p>,
      location: <p style={{fontSize: "13px",textAlign:"center" }}>Houston , TX</p>,     
      email: <p style={{fontSize: "13px",textAlign:"center" }}>user@balticleopard.com</p>,
    },
    {
      key: "3",
      name: <p style={{fontSize: "13px",textAlign:"center" }}> NAVIGARE </p>,
      due_date: <p style={{fontSize: "13px",textAlign:"center" }}>BACCA</p>,
      window_range: <p style={{fontSize: "13px",textAlign:"center" }}>INITIAL</p>,
      location: <p style={{fontSize: "13px",textAlign:"center" }}>Houston , TX</p>,     
      email: <p style={{fontSize: "13px",textAlign:"center" }}>user@navigarebacca.com</p>,     
    },
    {
      key: "4",
      name: <p style={{fontSize: "13px",textAlign:"center" }}>SEAMAX </p>,
      due_date: <p style={{fontSize: "13px",textAlign:"center" }}>FAIRFIELD</p>,
      window_range: <p style={{fontSize: "13px",textAlign:"center" }}>AMENDMENT</p>,
      location: <p style={{fontSize: "13px",textAlign:"center" }}>Houston , TX</p>,     
      email: <p style={{fontSize: "13px",textAlign:"center" }}>user@seamaxfairrfield.comX</p>,
    },
  ];


  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    console.log("panel", panel);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>

      <div>

{/*        
          <Card style={cardcss}>
            <div style={subtypetextcss}>MSC</div></Card> */}
            {/* <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "10px" }} align="left">MSC</p> */}
            <Table 
              columns={columns}
              dataSource={dataISM}
              size="small"
              pagination={false}
            />
          
        
      </div>

    </div>
  )
}

export default UserComapanyDetails
