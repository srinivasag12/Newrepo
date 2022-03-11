import React, { useState } from 'react';
import { Tabs } from "antd";
import "./Audit.css";
import { Tag, Divider } from "antd";
import { Table } from "antd";
const { TabPane } = Tabs;

const columnsISPS = [
    {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Letter No.	",
        dataIndex: "certificate_no",
      },
      {
        title: "Issue Date	",
        dataIndex: "issue_date",
      },
      {
        title: "Approval Date	",
        dataIndex: "expiry_date",
      },
      {
        title: "Term",
        dataIndex: "term",
      },
      {
        title: "State",
        dataIndex: "state",
      },
      {
        title: "State Date ",
        dataIndex: "state_date",
      }
];

const columnsISM = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Certificate No.	",
    dataIndex: "certificate_no",
  },
  {
    title: "Issue Date	",
    dataIndex: "issue_date",
  },
  {
    title: "Expiration/Extended Date	",
    dataIndex: "expiry_date",
  },
  {
    title: "Term",
    dataIndex: "term",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  // {
  //   title: "State Date ",
  //   dataIndex: "state_date",
  // }
];

const columnsMLC = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Certificate No.	",
      dataIndex: "certificate_no",
    },
    {
      title: "Issue Date	",
      dataIndex: "issue_date",
    },
    {
      title: "Expiration/Extended Date	",
      dataIndex: "expiry_date",
    },
    {
      title: "Term",
      dataIndex: "term",
    },
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "State Date ",
      dataIndex: "state_date",
    }
  ];


function VesselStatementCertificateTab() {

      const dataISPS = [
        {
            key: "1",
            name: <p style={{ fontSize: "Medium" }}>International Ship Security Certificates (ISSC)</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8009773-SM-297F-21</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>23-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },                  
      ];     
    
      const dataISM = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>Safety Management Certificate (SMC)</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8009777-SS-296H-21</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>15-Jun-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>20-Jun-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
          key: "2",
          name: <p style={{ fontSize: "Medium" }}>International Ship Security Certificates (ISSC)</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8009773-SM-297F-21</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>23-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
          key: "3",
          name: <p style={{ fontSize: "Medium" }}>MLC Certificate</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8009776-ML-400J-21</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>18-Aug-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>23-Aug-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
      ];

      const dataMLC = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>MLC Certificate</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8009776-ML-400J-21</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>18-Aug-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>23-Aug-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
      ];

      const dataASI = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>Annual Safety Inspection(ASI)</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>800440-ML-297E-20</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>10-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>16-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
      ];

      const dataDMLCII = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>DMLC II Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8004840</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>10-Apr-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>16-Apr-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>DMLC II Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8004540</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>23-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];

      const dataSSP = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>SSP Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8001230</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>01-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>05-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>SSP Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8002345</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>01-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>05-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];

      const dataIHM = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>IHM Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8005678</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>08-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>13-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>IHM Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8004534</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>08-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>13-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];

      const dataSOPEP = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>SOPEP Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8003234</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>28-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>02-Jun-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>SOPEP Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8004140</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>28-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>02-Jun-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];

      const dataSTS = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>STS Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8007415</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>15-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>20-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>STS Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8005465</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>15-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>20-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];

      const dataSMPEP = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>SMPEP Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8004125</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>14-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>19-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>SMPEP Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8007896</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>14-May-2021</p>,
             expiry_date: <p style={{ fontSize: "Medium" }}>19-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];

      const dataBWS = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>BWS Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8008547</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>13-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>BWS Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8005213</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>13-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];

      const dataVOC = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>VOC Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8005544</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>23-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>VOC Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8001597</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>23-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];

      const dataSWR = [
        {
          key: "1",
          name: <p style={{ fontSize: "Medium" }}>SWR Approval Letter</p>,
          certificate_no: <p style={{ fontSize: "Medium" }}>8004455</p>,
          issue_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
          expiry_date: <p style={{ fontSize: "Medium" }}>23-May-2021</p>,
          term: <p style={{ fontSize: "Medium" }}>Full</p>,
          state: <Tag color="purple">Issued</Tag>,
          state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
        },
        {
            key: "2",
            name: <p style={{ fontSize: "Medium" }}>SWR Review Letter</p>,
            certificate_no: <p style={{ fontSize: "Medium" }}>8006666</p>,
            issue_date: <p style={{ fontSize: "Medium" }}>18-May-2021</p>,
            expiry_date: <p style={{ fontSize: "Medium" }}>23-May-2021</p>,
            term: <p style={{ fontSize: "Medium" }}>Full</p>,
            state: <Tag color="purple">Issued</Tag>,
            state_date: <p style={{ fontSize: "Medium" }}>01-Jan-2024</p>,                    
          },
      ];
    
    return (
        <div>
           
            <div style={{padding:"10px"}}>
              
            <Tabs type="card">
                <TabPane tab="AUDIT" key="1" style={{ backgroundColor: "#eee " }}> 
                    <br /> 
                    {/* <p style={{fontWeight:"bold"}}>ISM</p>          */}
                    <Table
                    columns={columnsISM}
                    dataSource={dataISM}
                    size="small"
                    pagination={false}
                   />   

                   {/* <br />      
                   <p style={{fontWeight:"bold"}}>ISPS</p>  
                   <Table
                    columns={columnsISPS}
                    dataSource={dataISPS}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{fontWeight:"bold"}}>MLC</p>  
                   <Table
                    columns={columnsMLC}
                    dataSource={dataMLC}
                    size="small"
                    pagination={false}
                   /> */}
                </TabPane>

                <TabPane tab="SURVEYS" key="2" style={{ backgroundColor: "#eee " }}> 
                    <br />      
                   <p style={{fontWeight:"bold"}}>ASI</p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataASI}
                    size="small"
                    pagination={false}
                   />
                </TabPane>

                <TabPane tab="STATUTORY" key="3" style={{ backgroundColor: "#eee " }}>  
                   <br />      
                   <p style={{fontWeight:"bold"}}>SSP</p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataSSP}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{fontWeight:"bold"}}>DMLC II</p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataDMLCII}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{fontWeight:"bold"}}>IHM</p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataIHM}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>SOPEP </p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataSOPEP}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>STS </p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataSTS}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>SMPEP </p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataSMPEP}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>BWS </p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataBWS}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>VOC </p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataVOC}
                    size="small"
                    pagination={false}
                   />

                    <br />      
                   <p style={{fontWeight:"bold"}}>SWR</p>          
                    <Table
                    columns={columnsISPS}
                    dataSource={dataSWR}
                    size="small"
                    pagination={false}
                   />
                </TabPane>
            </Tabs>
            </div>

        </div>
    )
}

export default VesselStatementCertificateTab
