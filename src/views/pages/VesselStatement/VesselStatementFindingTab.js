import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import { Tabs } from "antd";
import "./VesselStatement.css";
import { Tag, Divider } from "antd";
import { Table } from "antd";
import { useHistory } from "react-router-dom";
const { TabPane } = Tabs;

const columns = [
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
          style: { color: record.color },
        },
        children: <div>{text}</div>,
      };
    }
  }

];


function VesselStatementFindingTab() {
  const history = useHistory();
  const dataISM = [
    {
      key: "1",
      type: <p style={{ fontSize: "14px" }}>ISM</p>,
      sub_type: <p style={{ fontSize: "14px" }}>INTERIM</p>,
      category: <p style={{ fontSize: "14px" }}>MNC</p>,
      code: <p style={{ fontSize: "14px" }}>14.2.3</p>,
      status: <Tag color="purple">DOWNGRADED</Tag>,
      next_action: <p style={{ fontSize: "14px" }}>PLAN ACCEPTED</p>,
      due_date: <p style={{ fontSize: "14px" }}>25-DEC-2021</p>,
      color: "#ffb100"
    },
    {
      key: "2",
      type: <p style={{ fontSize: "14px" }}>ISPS</p>,
      sub_type: <p style={{ fontSize: "14px" }}>INTERIM</p>,
      category: <p style={{ fontSize: "14px" }}>FAILURE</p>,
      code: <p style={{ fontSize: "14px" }}>A 7.2</p>,
      status: <Tag color="purple">COMPLIANCE RESTORED</Tag>,
      next_action: <p style={{ fontSize: "14px" }}>PLAN ACCEPTED</p>,
      due_date: <p style={{ fontSize: "14px" }}>01-FEB-2022</p>,
      color: ""
    },
    {
      key: "3",
      type: <p style={{ fontSize: "14px" }}>MLC</p>,
      sub_type: <p style={{ fontSize: "14px" }}>INTERIM</p>,
      category: <p style={{ fontSize: "14px" }}>SD</p>,
      code: <p style={{ fontSize: "14px" }}>3.1</p>,
      status: <Tag color="purple">DOWNGRADED</Tag>,
      next_action: <p style={{ fontSize: "14px" }}>PLAN ACCEPTED</p>,
      due_date: <p style={{ fontSize: "14px" }}>01-Oct-2021</p>,
      color: "red"
    },
  ];

  const dataISPS = [
    {
      key: "1",
      type: <p style={{ fontSize: "14px" }}>ISPS</p>,
      sub_type: <p style={{ fontSize: "14px" }}>INTERIM</p>,
      category: <p style={{ fontSize: "14px" }}>FAILURE</p>,
      code: <p style={{ fontSize: "14px" }}>A 7.2</p>,
      status: <Tag color="purple">COMPLIANCE RESTORED</Tag>,
      next_action: <p style={{ fontSize: "14px" }}>PLAN ACCEPTED</p>,
      due_date: <p style={{ fontSize: "14px" }}>01-Oct-2021</p>,
    },
  ];

  const dataMLC = [
    {
      key: "1",
      type: <p style={{ fontSize: "14px" }}>MLC</p>,
      sub_type: <p style={{ fontSize: "14px" }}>INTERIM</p>,
      category: <p style={{ fontSize: "14px" }}>SD</p>,
      code: <p style={{ fontSize: "14px" }}>3.1</p>,
      status: <Tag color="purple">DOWNGRADED</Tag>,
      next_action: <p style={{ fontSize: "14px" }}>PLAN ACCEPTED</p>,
      due_date: <p style={{ fontSize: "14px" }}>01-Oct-2021</p>,
    },
  ];

  const dataASI = [
    {
      key: "1",
      type: <p style={{ fontSize: "14px" }}>ASI</p>,
      sub_type: <p style={{ fontSize: "14px" }}>INTERIM</p>,
      category: <p style={{ fontSize: "14px" }}>SD</p>,
      code: <p style={{ fontSize: "14px" }}>3.1</p>,
      status: <Tag color="purple">DOWNGRADED</Tag>,
      next_action: <p style={{ fontSize: "14px" }}>PLAN ACCEPTED</p>,
      due_date: <p style={{ fontSize: "14px" }}>01-Oct-2021</p>,
    },
  ];

  const dataDMLCII = [
    {
      key: "1",
      type: <p style={{ fontSize: "14px" }}>DMLC II</p>,
      sub_type: <p style={{ fontSize: "14px" }}>INITIAL</p>,
      category: <p style={{ fontSize: "14px" }}>REVIEW NOTE</p>,
      code: <p style={{ fontSize: "14px" }}>3.1</p>,
      status: <p style={{ fontSize: "14px" }}>OPEN</p>,
      next_action: <Tag color="purple">VERFIED/CLOSED</Tag>,
      due_date: <p style={{ fontSize: "14px" }}>25-Dec-2021</p>,
      color: "red"
    },
  ];
  const cardcss = {
    // width: "200px",
    borderRadius: "0px",
    marginBottom: "9px",
    height: "45px",
    background: "#eeeeee",
  },
    subtypetextcss = {
      marginTop: "12px",
      fontWeight: "700",
      textAlign: "start",
      marginLeft: "10px",
    };


  return (
    <div style={{ padding: "10px" }}>

      <Tabs type="card">
        <TabPane tab="MSC" key="1" style={{ backgroundColor: "#ffff " }}>
          <Card style={cardcss}>
            <div style={subtypetextcss}>MSC</div></Card>
          <Table
            onRow={(r) => ({
              onClick: () => (history.push("/admin/finding"))
            })}
            columns={columns}
            dataSource={dataISM}
            size="small"
            pagination={false}
          />
          <div style={{ backgroundColor: "white", color: "white" }}>.</div>
          <Card style={cardcss}>
            <div style={subtypetextcss}>DMLC II</div></Card>
          <Table
            onRow={(r) => ({
              onClick: () => (history.push("/admin/finding"))
            })}
            columns={columns}
            dataSource={dataDMLCII}
            size="small"
            pagination={false}
          />
          {/* 
                   <br />      
                   <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "-10px" }}align="left">ISPS</p>  
                   <Table
                    columns={columns}
                    dataSource={dataISPS}
                    size="small"
                    pagination={false}
                   />

                   <br />      
                   <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "-10px" }}align="left">MLC</p>  
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
          <Table
            onRow={(r) => ({
              onClick: () => (history.push("/admin/finding"))
            })}
            columns={columns}
            dataSource={dataASI}
            size="small"
            pagination={false}
          />

        </TabPane>

        {/* <TabPane tab="STATUTORY" key="3" style={{ backgroundColor: "#eee " }}>  
                   
                   <br />      
                   <p style={{ fontWeight: "bold", marginLeft: "10px", marginTop: "-10px" }}align="left">DMLC II</p>          
                    <Table
                    columns={columns}
                    dataSource={dataDMLCII}
                    size="small"
                    pagination={false}
                   />

                  
                </TabPane> */}
      </Tabs>
    </div>
  )
}

export default VesselStatementFindingTab
