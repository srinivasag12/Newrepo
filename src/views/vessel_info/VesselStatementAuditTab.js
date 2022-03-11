import React, { useState } from 'react';
import { Tabs } from "antd";
import "./Audit.css";
import { Tag, Divider } from "antd";
import { Table } from "antd";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Collapse } from "antd";

import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";


const { TabPane } = Tabs;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
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

      const dataISPS = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>ISPS Intermediate Verification (ISPS-INT)</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                    
          },                  
      ];     
    
      const dataISM = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>ISM Intermediate Audit (ISM-INT)</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                      
        },
        {
          key: "2",
          name: <p style={{ fontSize: "Medium" }}>ISPS Intermediate Verification (ISPS-INT)</p>,
          due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
          window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
          extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
          location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
          status: <Tag color="purple">Credited</Tag>,
          auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                    
        },
        {
          key: "3",
          name: <p style={{ fontSize: "Medium" }}>MLC Intermediate Inspection (MLC-INT)</p>,
          due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
          window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
          extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
          location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
          status: <Tag color="purple">Credited</Tag>,
          auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                      
      },
      ];

      const dataMLC = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>MLC Intermediate Inspection (MLC-INT)</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                      
        },
      ];

      const dataASI = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>Annual Safety Inspection (ASI)</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        },
      ];



      const dataDMLCII = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>DMLC II</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        }
      ];

      const dataSSP = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>SSP</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                      
        }
      ];

      const dataIHM = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>IHM</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        }
      ];

      const dataSOPEP = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>SOPEP</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        }
      ];

      const dataSTS = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>STS</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        }
      ];

      const dataSMPEP = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>SMPEP</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        }
      ];

      const dataBWS = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>BWS</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        }
      ];

      const dataSWR = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>SWR</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        }
      ];

      const dataVOC = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>VOC</p>,
            due_date: <p style={{ fontSize: "Medium" }}>10-Jun-2021</p>,
            window_range: <p style={{ fontSize: "Medium" }}>10-Dec-2020 to 10-Dec-2021</p>,
            extended_date: <p style={{ fontSize: "Medium" }}>10-Dec-2022</p>,
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            status: <Tag color="purple">Credited</Tag>,
            auditor: <p style={{ fontSize: "Medium" }}>AUDITOR</p>,                       
        }
      ];



      const dataHistoryISM = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>ISM Corrective Action Plan (ISM-CAR)</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        },
        {
          key: "2",
          name: <p style={{ fontSize: "Medium" }}>ISM Corrective Action Plan (ISM-CAR)</p>, 
          date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
          location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
          type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
          status: <Tag color="purple">Credited</Tag>,                                  
      }
      ];

      const dataHistoryISPS = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>ISPS Initial Verification (ISPS-INI)</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        },
        {
          key: "2",
          name: <p style={{ fontSize: "Medium" }}>ISPS Initial Verification (ISPS-INI)</p>, 
          date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
          location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
          type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
          status: <Tag color="purple">Credited</Tag>,                                  
      }
      ];

      const dataHistoryMLC = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>MLC Intermediate Inspection (MLC-INI)</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        },
        {
          key: "2",
          name: <p style={{ fontSize: "Medium" }}>MLC Intermediate Inspection (MLC-INI)</p>, 
          date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
          location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
          type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
          status: <Tag color="purple">Credited</Tag>,                                  
      }
      ];

      const dataHistoryASI = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>Annual Safety Inspection (ASI)</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistorySSP = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>SSP</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistoryDMLC = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>DMLC II</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistoryIHM = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>IHM</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistorySOPEP  = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>SOPEP</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistorySTS  = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>STS</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistorySMPEP  = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>    SMPEP</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistoryBWS  = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>BWS</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistoryVOC  = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>VOC</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];

      const dataHistorySWR = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>SWR</p>, 
            date:  <p style={{ fontSize: "Medium" }}>19-Jan-2021</p>,         
            location: <p style={{ fontSize: "Medium" }}>Houston , TX</p>,
            type:  <p style={{ fontSize: "Medium" }}>Remote</p>, 
            status: <Tag color="purple">Credited</Tag>,                                  
        }
      ];



        const [expanded, setExpanded] = useState("panel1");

        const handleChange = (panel) => (event, isExpanded) => {
            console.log("panel", panel);
            setExpanded(isExpanded ? panel : false);
        };
    
    return (
        <div>
           
            <div style={{padding:"10px"}}>
              
            <Tabs type="card">
                <TabPane tab="AUDIT" key="1" style={{ backgroundColor: "#eee " }}> 
                    <br /> 
                    {/* <p style={{fontWeight:"bold"}}>ISM</p>          */}
                    <Table
                    columns={columns}
                    dataSource={dataISM}
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

                <TabPane tab="SURVEYS" key="2" style={{ backgroundColor: "#eee " }}> 
                    <br />      
                   <p style={{fontWeight:"bold"}}>ASI</p>          
                    <Table
                    columns={columns}
                    dataSource={dataASI}
                    size="small"
                    pagination={false}
                   />
                </TabPane>

                <TabPane tab="STATUTORY" key="3" style={{ backgroundColor: "#eee " }}>  
                   <br />      
                   <p style={{fontWeight:"bold"}}>SSP</p>          
                    <Table
                    columns={columns}
                    dataSource={dataSSP}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{fontWeight:"bold"}}>DMLC II</p>          
                    <Table
                    columns={columns}
                    dataSource={dataDMLCII}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{fontWeight:"bold"}}>IHM</p>          
                    <Table
                    columns={columns}
                    dataSource={dataIHM}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{fontWeight:"bold"}}>SOPEP </p>          
                    <Table
                    columns={columns}
                    dataSource={dataSOPEP}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>STS  </p>          
                    <Table
                    columns={columns}
                    dataSource={dataSTS}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>SMPEP  </p>          
                    <Table
                    columns={columns}
                    dataSource={dataSMPEP}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>BWS  </p>          
                    <Table
                    columns={columns}
                    dataSource={dataBWS}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>VOC  </p>          
                    <Table
                    columns={columns}
                    dataSource={dataVOC}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>SWR </p>          
                    <Table
                    columns={columns}
                    dataSource={dataSWR}
                    size="small"
                    pagination={false}
                   />
                </TabPane>

                <TabPane tab="HISTORY" key="4" style={{ backgroundColor: "#eee " }}> 
                    
                <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <h6>AUDIT</h6>
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


                </TabPane>
            </Tabs>
            </div>

        </div>
    )
}

export default VesselStatementAuditTab
