import React, { useState } from 'react';
import { Tabs } from "antd";
import "./VesselStatement.css";
import { Tag, Divider } from "antd";
import { Table } from "antd";

// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useHistory } from "react-router-dom";
import { Collapse } from "antd";

import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";


const { TabPane } = Tabs;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render(text, record) {
      return {
        props: {
          style: { color: record.color },
        },
        children: <div>{text}</div>,
      };
    }
  },
  {
    title: "Due Date",
    dataIndex: "due_date",
  },
  {
    title: "Window Range",
    dataIndex: "window_range",
  },
  {
    title: "Extended Due Date	",
    dataIndex: "extended_date",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Auditor",
    dataIndex: "auditor",
  }
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

function VesselStatementAuditTab() {
  const history = useHistory();
  const dataISPS = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>ISPS Intermediate Verification (ISPS-INT)</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    },
  ];

  const dataISM = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>ISM Intermediate Audit (ISM-INT)</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
      color: "red",
    },
    {
      key: "2",
      name: <p style={{fontSize: "14px" }}>ISM Renewal Audit (ISM-INT)</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Dec-2023</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Sep-2023 to 10-Dec-2023</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
      color: "#ffb100",
    },
    {
      key: "3",
      name: <p style={{fontSize: "14px" }}>ISPS Intermediate Verification (ISPS-INT)</p>,
      due_date: <p style={{fontSize: "14px" }}>10-DEC-2022</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
      // color:"red",                    
    },
    {
      key: "4",
      name: <p style={{fontSize: "14px" }}>MLC Intermediate Inspection (MLC-INT)</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
      color: "red",
    },
  ];

  const dataMLC = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>MLC Intermediate Inspection (MLC-INT)</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    },
  ];

  const dataASI = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>Annual Safety Inspection (ASI)</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    },
  ];



  const dataDMLCII = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>DMLC II</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];

  const dataSSP = [
    {
      key: "1",
      name: <p style={{fontSize: "14px", marginRight: "30px" }}>SSP</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];

  const dataIHM = [
    {
      key: "1",
      name: <p style={{fontSize: "14px", marginRight: "18px" }}>IHM</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];

  const dataSOPEP = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>SOPEP</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];

  const dataSTS = [
    {
      key: "1",
      name: <p style={{fontSize: "14px", marginRight: "18px" }}>STS</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];

  const dataSMPEP = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>SMPEP</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];

  const dataBWS = [
    {
      key: "1",
      name: <p style={{fontSize: "14px", marginRight: "18px" }}>BWS</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];

  const dataSWR = [
    {
      key: "1",
      name: <p style={{fontSize: "14px", marginRight: "18px" }}>SDR</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];

  const dataVOC = [
    {
      key: "1",
      name: <p style={{fontSize: "14px", marginRight: "18px" }}>VOC</p>,
      due_date: <p style={{fontSize: "14px" }}>10-Jun-2021</p>,
      window_range: <p style={{fontSize: "14px" }}>10-Dec-2020 to 10-Dec-2021</p>,
      extended_date: <p style={{fontSize: "14px" }}>10-Dec-2022</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      status: <Tag color="purple">Credited</Tag>,
      auditor: <p style={{fontSize: "14px" }}>AUDITOR</p>,
    }
  ];



  const dataHistoryISM = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>ISM Corrective Action Plan (ISM-CAR)</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    },
    {
      key: "2",
      name: <p style={{fontSize: "14px" }}>ISM Corrective Action Plan (ISM-CAR)</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistoryISPS = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>ISPS Initial Verification (ISPS-INI)</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    },
    {
      key: "2",
      name: <p style={{fontSize: "14px" }}>ISPS Initial Verification (ISPS-INI)</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistoryMLC = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>MLC Intermediate Inspection (MLC-INI)</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    },
    {
      key: "2",
      name: <p style={{fontSize: "14px" }}>MLC Intermediate Inspection (MLC-INI)</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistoryASI = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>Annual Safety Inspection (ASI)</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistorySSP = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>SSP</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistoryDMLC = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>DMLC II</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistoryIHM = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>IHM</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistorySOPEP = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>SOPEP</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistorySTS = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>STS</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistorySMPEP = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>    SMPEP</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistoryBWS = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>BWS</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistoryVOC = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>VOC</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];

  const dataHistorySWR = [
    {
      key: "1",
      name: <p style={{fontSize: "14px" }}>SWR</p>,
      date: <p style={{fontSize: "14px" }}>19-Jan-2021</p>,
      location: <p style={{fontSize: "14px" }}>Houston , TX</p>,
      type: <p style={{fontSize: "14px" }}>Remote</p>,
      status: <Tag color="purple">Credited</Tag>,
    }
  ];
const cardcss={
  // width: "200px",
  borderRadius: "0px",
  marginBottom: "9px",
  height: "45px",
  background: "#eee",
},
subtypetextcss ={
  marginTop: "12px",
  fontWeight: "700",
  textAlign: "start",
  marginLeft: "10px",
};


  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    console.log("panel", panel);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>

      <div style={{ padding: "10px"}}>

        <Tabs type="card" style={{color: "#363636" }} >
          <TabPane tab="MSC" key="1" style={{ backgroundColor: "#ffff" }} >
            {/* <br /> */}
            {/* <Col md="12">
            <Button align="center"
            style={{color:"white"}}>
              CERTIFICATES    
            </Button>
          </Col> */}
          <Card style={cardcss}>
            <div style={subtypetextcss}>MSC</div></Card>
            {/* <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "10px" }} align="left">MSC</p> */}
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataISM}
              size="small"
              pagination={false}
            />
            {/* 
            */}
            <br />
            <Card style={cardcss}>
            <div style={subtypetextcss}>SSP</div></Card>
            {/* <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "-10px" }} align="left">SSP</p> */}
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataSSP}
              size="small"
              pagination={false}
            />
            {/* 
            */}
            <br />
            <Card style={cardcss}>
            <div style={subtypetextcss}>DMLC</div></Card>
            {/* <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "-10px" }} align="left">DMLC II</p> */}
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
             className="table-layout"
              columns={columns}
              dataSource={dataDMLCII}
              size="small"
              pagination={false}
            />
            {/* <br />       */}
            {/* <p style={{fontWeight:"bold"}}>ISPS</p>  
                   <Table
                    columns={columns}
                    dataSource={dataISPS}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{fontWeight:"bold"}}>MLC</p>  
                   <Table
                    columns={columns}
                    dataSource={dataMLC}
                    size="small"
                    pagination={false}
                   /> */}
          </TabPane>

          <TabPane tab="INSPECTIONS" key="2" style={{ backgroundColor: "#ffff " }}>
            <Card style={cardcss}>
            <div style={subtypetextcss}>ASI</div></Card>
            <br />
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataASI}
              size="small"
              pagination={false}
            />
          </TabPane>

          <TabPane tab="STATUTORY" key="3" style={{ backgroundColor: "#ffff " }}>
          <Card style={cardcss}>
            <div style={subtypetextcss}>IHM</div></Card>
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataIHM}
              size="small"
              pagination={false}
            />

            
<br />
            <Card style={cardcss}>
            <div style={subtypetextcss}>SOPEP</div></Card>
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataSOPEP}
              size="small"
              pagination={false}
            />

            
<br />
            <Card style={cardcss}>
            <div style={subtypetextcss}>STS</div></Card>
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataSTS}
              size="small"
              pagination={false}
            />

            
<br />
            <Card style={cardcss}>
            <div style={subtypetextcss}>SMPEP</div></Card>
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataSMPEP}
              size="small"
              pagination={false}
            />

            
<br />
            <Card style={cardcss}>
            <div style={subtypetextcss}>BWS</div></Card>
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataBWS}
              size="small"
              pagination={false}
            />

            
<br />
            <Card style={cardcss}>
            <div style={subtypetextcss}>VOC</div></Card>
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataVOC}
              size="small"
              pagination={false}
            />

            
<br />
            <Card style={cardcss}>
            <div style={subtypetextcss}>SDR</div></Card>
            <Table
             onRow={(r) => ({
              onClick: () => (history.push("/admin/audit"))
            })}
              columns={columns}
              dataSource={dataSWR}
              size="small"
              pagination={false}
            />
          </TabPane>

          {/* <TabPane tab="HISTORY" key="4" style={{ backgroundColor: "#eee " }}> 
                    
                <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <h6>MSC</h6>
                    </AccordionSummary> 

                    <AccordionDetails>
                        <Card style={{ width: "100%" }}>
                                 
                            <p style={{fontWeight:"bold"}}>ISM</p>                            
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistoryISM}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>ISPS</p>
                             
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistoryISPS}
                                size="small"
                                pagination={false}
                            />
                            <p style={{fontWeight:"bold"}}>MLC</p>                           
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistoryMLC}
                                size="small"
                                pagination={false}
                            />                           
                        </Card>
                    </AccordionDetails>

                </Accordion>

                <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <h6>SURVEY</h6>
                    </AccordionSummary> 

                    <AccordionDetails>
                        <Card style={{ width: "100%" }}>
                            <p style={{fontWeight:"bold"}}>ASI</p>                           
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistoryASI}
                                size="small"
                                pagination={false}
                            />
                        </Card>
                    </AccordionDetails>

                </Accordion>

                <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <h6>STATUTORY</h6>
                    </AccordionSummary> 

                    <AccordionDetails>
                        <Card style={{ width: "100%" }}>
                            <p style={{fontWeight:"bold"}}>SSP</p>                            
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistorySSP}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>DMLC II</p>
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistoryDMLC}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>IHM</p>
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistoryIHM}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>SOPEP </p>
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistorySOPEP}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>STS </p>
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistorySTS}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>SMPEP </p>
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistorySMPEP}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>BWS </p>                            
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistoryBWS}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>VOC </p>                            
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistoryVOC}
                                size="small"
                                pagination={false}
                            />

                            <p style={{fontWeight:"bold"}}>SWR </p>                            
                            <Table
                                columns={columnsHistory}
                                dataSource={dataHistorySWR}
                                size="small"
                                pagination={false}
                            />
                        </Card>
                    </AccordionDetails>

                </Accordion>


                </TabPane> */}
        </Tabs>
      </div>

    </div>
  )
}

export default VesselStatementAuditTab
