import React, { useState } from 'react';
import { Tabs } from "antd";
import "./Audit.css";
import { Tag, Divider } from "antd";
import { Table } from "antd";
const { TabPane } = Tabs;

const columns = [
    {
      title: "Vessel Name",
      dataIndex: "vessel_name",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Sub Type",
      dataIndex: "sub_type",
    },
    {
      title: "Category	",
      dataIndex: "category",
    },
    {
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
        title: "Next Action",
        dataIndex: "next_action",
      },
    {
      title: "Due Date",
      dataIndex: "due_date",
      render(text, record) {
        return {
          props: {
            style: { background: record.color},
          },
          children: <div>{text}</div>,
        };
      }
    }

  ];

  
function VesselStatementFindingTab() {

    const dataISM = [
        {
            key: "1",
            vessel_name: <p style={{ fontSize: "Medium" }}>EASTERLY BEECH GALAXY</p>,
            type: <p style={{ fontSize: "Medium" }}>ISM</p>,
            sub_type: <p style={{ fontSize: "Medium" }}>INTERIM</p>,
            category: <p style={{ fontSize: "Medium" }}>MNC</p>,
            code: <p style={{ fontSize: "Medium" }}>14.2.3</p>,            
            status: <Tag color="purple">DOWNGRADED</Tag>,
            next_action: <p style={{ fontSize: "Medium" }}>PLAN ACCEPTED</p>,
            due_date: <p style={{ fontSize: "Medium" }}>25-DEC-2021</p>,     
            color:"yellow"               
          },   
          {
            key: "2",
            vessel_name: <p style={{ fontSize: "Medium" }}>EASTERLY BEECH GALAXY</p>,
            type: <p style={{ fontSize: "Medium" }}>ISPS</p>,
            sub_type: <p style={{ fontSize: "Medium" }}>INTERIM</p>,
            category: <p style={{ fontSize: "Medium" }}>FAILURE</p>,
            code: <p style={{ fontSize: "Medium" }}>A 7.2</p>,            
            status: <Tag color="purple">COMPLIANCE RESTORED</Tag>,
            next_action: <p style={{ fontSize: "Medium" }}>PLAN ACCEPTED</p>,
            due_date: <p style={{ fontSize: "Medium" }}>01-FEB-2022</p>,  
            color:""                  
          }, 
          {
            key: "3",
            vessel_name: <p style={{ fontSize: "Medium" }}>EASTERLY BEECH GALAXY</p>,
            type: <p style={{ fontSize: "Medium" }}>MLC</p>,
            sub_type: <p style={{ fontSize: "Medium" }}>INTERIM</p>,
            category: <p style={{ fontSize: "Medium" }}>SD</p>,
            code: <p style={{ fontSize: "Medium" }}>3.1</p>,            
            status: <Tag color="purple">DOWNGRADED</Tag>,
            next_action: <p style={{ fontSize: "Medium" }}>PLAN ACCEPTED</p>,
            due_date: <p style={{ fontSize: "Medium" }}>01-Oct-2021</p>,   
            color:"red"                 
          },              
      ];  
      
      const dataISPS = [
        {
            key: "1",
            vessel_name: <p style={{ fontSize: "Medium" }}>EASTERLY BEECH GALAXY</p>,
            type: <p style={{ fontSize: "Medium" }}>ISPS</p>,
            sub_type: <p style={{ fontSize: "Medium" }}>INTERIM</p>,
            category: <p style={{ fontSize: "Medium" }}>FAILURE</p>,
            code: <p style={{ fontSize: "Medium" }}>A 7.2</p>,            
            status: <Tag color="purple">COMPLIANCE RESTORED</Tag>,
            next_action: <p style={{ fontSize: "Medium" }}>PLAN ACCEPTED</p>,
            due_date: <p style={{ fontSize: "Medium" }}>01-Oct-2021</p>,                    
          },                  
      ];  

      const dataMLC = [
        {
            key: "1",
            vessel_name: <p style={{ fontSize: "Medium" }}>EASTERLY BEECH GALAXY</p>,
            type: <p style={{ fontSize: "Medium" }}>MLC</p>,
            sub_type: <p style={{ fontSize: "Medium" }}>INTERIM</p>,
            category: <p style={{ fontSize: "Medium" }}>SD</p>,
            code: <p style={{ fontSize: "Medium" }}>3.1</p>,            
            status: <Tag color="purple">DOWNGRADED</Tag>,
            next_action: <p style={{ fontSize: "Medium" }}>PLAN ACCEPTED</p>,
            due_date: <p style={{ fontSize: "Medium" }}>01-Oct-2021</p>,                    
          },                  
      ];  

      const dataASI = [
        {
            key: "1",
            vessel_name: <p style={{ fontSize: "Medium" }}>EASTERLY BEECH GALAXY</p>,
            type: <p style={{ fontSize: "Medium" }}>ASI</p>,
            sub_type: <p style={{ fontSize: "Medium" }}>INTERIM</p>,
            category: <p style={{ fontSize: "Medium" }}>SD</p>,
            code: <p style={{ fontSize: "Medium" }}>3.1</p>,            
            status: <Tag color="purple">DOWNGRADED</Tag>,
            next_action: <p style={{ fontSize: "Medium" }}>PLAN ACCEPTED</p>,
            due_date: <p style={{ fontSize: "Medium" }}>01-Oct-2021</p>,                    
          },                  
      ];  

      const dataDMLCII = [
        {
            key: "1",
            vessel_name: <p style={{ fontSize: "Medium" }}>EASTERLY BEECH GALAXY</p>,
            type: <p style={{ fontSize: "Medium" }}>DMLC II</p>,
            sub_type: <p style={{ fontSize: "Medium" }}>INITIAL</p>,
            category: <p style={{ fontSize: "Medium" }}>REVIEW NOTE</p>,
            code: <p style={{ fontSize: "Medium" }}>3.1</p>,            
            status: <Tag color="purple">VERFIED/CLOSED</Tag>,
            next_action: <p style={{ fontSize: "Medium" }}>NIL</p>,
            due_date: <p style={{ fontSize: "Medium" }}>N.A.</p>,                    
          },                  
      ];  
      

    return (
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
{/* 
                   <br />      
                   <p style={{fontWeight:"bold"}}>ISPS</p>  
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
                   <p style={{fontWeight:"bold"}}>DMLC II</p>          
                    <Table
                    columns={columns}
                    dataSource={dataDMLCII}
                    size="small"
                    pagination={false}
                   />

                  
                </TabPane>
            </Tabs>
            </div>
    )
}

export default VesselStatementFindingTab
