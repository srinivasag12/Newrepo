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
import { withRouter } from "react-router-dom";
import "./Dashboard.css"
import { Card, CardHeader, CardBody, CardTitle, Row, Col, CardSubtitle, CardFooter, Input } from "reactstrap";
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useHistory } from "react-router-dom";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Search from '@mui/icons-material/Search';
import ToggleButton from '@mui/material/ToggleButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CardActionArea } from '@mui/material';
import { Popover } from "antd";
// import FindingsPopovers from "../views/vessel_info/FindingsPopovers"
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { fontWeight } from "@mui/system";
import Divider from '@mui/material/Divider';


const columns = [
  { id: 'name', label: 'VesselIMO' },
  { id: 'code', label: 'VesselName' },
  { id: 'population', label: 'Company IMO', },
  { id: 'size', label: 'Issue Date', },
  { id: 'density', label: 'Expiry Date', },
  { id: 'certificate', label: 'Number' },
  { id: 'type', label: 'Type' },
  { id: 'subtype', label: 'Sub Type' },
];

function createData(name, code, population, size, density, certificate, type, subtype) {
  // const density = population / size;
  return { name, code, population, size, density, certificate, type, subtype };
}

const rows = [
  createData(9314831, 'VESSEL-01', "0098122", "05-May-2022", "07-May-2022", "8069175-SM-297F-22", "ISM", "INITIAL"),
  createData(9711444, 'VESSEL-43', "0533576", "04-May-2022", "06-May-2022", "8069256-SM-297F-22", "ISM", "INTERIM"),
  createData(9288813, 'VESSEL-24', "1125689", "03-May-2022", "07-May-2022", "8069264-SM-297F-22", "ISM", "INTERMEDIATE"),
  createData(9314832, 'VESSEL-12', "0025465", "06-May-2022", "08-May-2022", "8069174-SM-297F-22", "ISM", "INITIAL"),
  createData(9472634, 'VESSEL-05', "0054284", "02-May-2022", "04-May-2022", "8069083-SM-297F-22", "ISM", "INTERIM"),
];

const imagestyle = {
  cursor: "pointer",
  width: "20px",
  marginLeft: "29px"
};

const certificatecolumns = [
  { id: 'name', label: 'Certificate No.' },
  { id: 'code', label: 'Term' },
  { id: 'size', label: 'IssueDate' },
  { id: 'density', label: 'ExpiryDate' },
  { id: 'certificate', label: 'Extended IssueDate' },
  { id: 'endorsedDate', label: 'Endorsed Date' },
  { id: 'type', label: 'Type' },
  { id: 'subtype', label: 'Status' },
];

function certificatecreateData(name, code, size, density, certificate, endorsedDate, type, subtype) {
  return { name, code, size, density, certificate, endorsedDate, type, subtype };
}

const certificaterows = [
  certificatecreateData("8069175-SM-297F-22", 'FULL TERM', "06-May-2022", "05-May-2022", "07-May-2022", "05-May-2027", "ISM", "Active"),
  certificatecreateData("8069256-SM-297F-22", 'FULL TERM', "05-May-2022", "04-May-2022", "06-May-2022", "05-May-2027", "ISM", "Active"),
  certificatecreateData("8069264-SM-297F-22", 'FULL TERM', "04-May-2022", "03-May-2022", "07-May-2022", "05-May-2027", "ISM", "Active"),
  certificatecreateData("8069174-SM-297F-22", 'FULL TERM', "09-May-2022", "06-May-2022", "08-May-2022", "05-May-2027", "ISM", "Active"),
  certificatecreateData("8069083-SM-297F-22", 'FULL TERM', "03-May-2022", "02-May-2022", "04-May-2022", "05-May-2027", "ISM", "Active"),
];

const companyList = [
  {
    companyName: "FEDERAL ASAHI.",
    imoNumber: "9564413",
    officialId: "7307",
    country: "Marshall Island",
    docType: "Full Term",
    docIssuer: "DNV GL",
    docExpiry: "20-JUN-2023",
    companyAddress: "THOME SHIP MANAGEMENT PTE LTD 16 RAFFLES QUAY #43-01 HONG LEONG BUILDING   SINGAPORE  048581 SINGAPORE",
    activeStatus: "Active",

    /* vessels: 2,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG", */
  },
  {
    companyName: "3116 Ltd.",
    imoNumber: "0161412",
    officialId: "7325",
    country: "Marshall Island",
    docType: "Full Term",
    docIssuer: "Lloyds   Register",
    docExpiry: "20-JUN-2023",
    companyAddress: "12 GENEL DENIZCILIK NAKLIYATI AS 12 BUYUKDERE CADDESI. YAPI KREDI PLAZA A BLOK KAT 12",
    activeStatus: "Active",

    /*  vessels: 2,
     auditsOverDue: 0,
     auditsDue: 0,
     findingsOverDue: 5,
     findingsDue: 0,
     expiringCertificates: 10,
     address: "112 Robinson Road #04-04, 068925 SG", */
  },
  {
    companyName: "A&L CF June(3) Limited",
    imoNumber: "0161432",
    officialId: "9151",
    country: "United Kingdom",
    docType: "Full Term",
    docIssuer: "DNV GL",
    docExpiry: "20-JUN-2023",
    companyAddress: "THOME SHIP MANAGEMENT PTE LTD 16 RAFFLES QUAY #43-01 HONG LEONG BUILDING   SINGAPORE  048581 SINGAPORE",
    activeStatus: "Active",

    /*   vessels: 1,
      auditsOverDue: 0,
      auditsDue: 0,
      findingsOverDue: 5,
      findingsDue: 0,
      expiringCertificates: 10,
      address: "112 Robinson Road #04-04, 068925 SG", */
  },
  {
    companyName: "PETROLEO BRASILEIRO S.A.",
    imoNumber: "0161412",
    officialId: "9027",
    country: "Brazil",
    docType: "Full Term",
    docIssuer: "DNV GL",
    docExpiry: "20-JUN-2023",
    companyAddress: "GENEL DENIZCILIK NAKLIYATI AS BUYUKDERE CADDESI. YAPI KREDI PLAZA A BLOK KAT 12   LEVENT ISTANBUL  80620 TURKEY",
    activeStatus: "Active",

    /*  vessels: 3,
     auditsOverDue: 0,
     auditsDue: 0,
     findingsOverDue: 5,
     findingsDue: 0,
     expiringCertificates: 10,
     address: "112 Robinson Road #04-04, 068925 SG", */
  },
  {
    companyName: "TRANSOCEAN OFFSHORE DEEPWATER DRILLING INC.",
    imoNumber: "0216161",
    officialId: "9047",
    country: "Vernier, Switzerland",
    docType: "Full Term",
    docIssuer: "Lloyds   Register",
    docExpiry: "20-JUN-2023",
    companyAddress: " NOMIKOS TRANSWORLD MARITIME AGENCIES S.A.  1, ALAMANAS STREET    MAROUSI, ATHENS  151 25 GREECE",
    activeStatus: "Active",

    /* vessels: 2,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG", */
  },
  
  {
    companyName: "ABC Maritime AG",
    imoNumber: "1191412",
    officialId: "9048",
    country: "Greece",
    docType: "Full Term",
    docIssuer: "Lloyds   Register",
    docExpiry: "20-JUN-2023",
    companyAddress: "GENEL DENIZCILIK NAKLIYATI AS BUYUKDERE CADDESI. YAPI KREDI PLAZA A BLOK KAT 12   LEVENT ISTANBUL  80620 TURKEY",
    activeStatus: "Active",

    /*  vessels: 5,
     auditsOverDue: 0,
     auditsDue: 0,
     findingsOverDue: 5,
     findingsDue: 0,
     expiringCertificates: 10,
     address: "112 Robinson Road #04-04, 068925 SG", */
  },
  {
    companyName: "ABC-JIN CORP",
    imoNumber: "4223337",
    officialId: "8047",
    country: "Switzerland",
    docType: "Full Term",
    docIssuer: "DNV GL",
    docExpiry: "20-JUN-2023",
    companyAddress: "GENEL DENIZCILIK NAKLIYATI AS BUYUKDERE CADDESI. YAPI KREDI PLAZA A BLOK KAT 12   LEVENT ISTANBUL  80620 TURKEY",
    activeStatus: "Active",

    /* vessels: 4,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG", */
  },
  /* {
    companyName: "PETROLEO BRASILEIRO S.A. - UO ES",
    imoNumber: "0161412",
    officialId: "9047",
    country: "Brazil",
    vessels: 3,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  }, */
  /* {
    companyName: "PETROLEO BRASILEIRO S.A. - UO ES",
    imoNumber: "0161412",
    officialId: "9047",
    country: "Brazil",
    vessels: 2,
    auditsOverDue: 0,
    auditsDue: 0,
    findingsOverDue: 5,
    findingsDue: 0,
    expiringCertificates: 10,
    address: "112 Robinson Road #04-04, 068925 SG",
  }, */
];

const vesselList = [
  {
    vesselName: "VESSEL",
    vesselCount: "216",
    ownervesselscout: "32",
    owener1vesselcount: "42",
    color: "success",
  },
  {
    vesselName: "VESSEL WITH OVERDUE AUDITS",
    vesselCount: "116",
    ownervesselscout: "2",
    owener1vesselcount: "3",
    color: "danger",
  },
  {
    vesselName: "VESSEL WITH AUDITS OVERDUE IN 180 DAYS",
    vesselCount: "587",
    ownervesselscout: "5",
    owener1vesselcount: "6",
    color: "danger",
  },
  {
    vesselName: "VESSEL WITH OVERDUE FINDINGS",
    vesselCount: "66",
    ownervesselscout: "6",
    owener1vesselcount: "8",
    color: "danger",
  },
  {
    vesselName: "VESSEL WITH CERTFICATES EXPIRING IN 180 DAYS",
    vesselCount: "70",
    ownervesselscout: "8",
    owener1vesselcount: "9",
    color: "danger",
  },
  {
    vesselName: "VESSEL WITH ATTENDANCE IN PROGRESS",
    vesselCount: "51",
    ownervesselscout: "6",
    owener1vesselcount: "7",
    color: "warning",
  },
  {
    vesselName: "VESSEL WITH SUBMITTED ORDERS",
    vesselCount: "21",
    ownervesselscout: "5",
    owener1vesselcount: "8",
    color: "success",
  },

];

const auditList = [
  {
    vesselName: "TOTAL AUDITS",
    vesselCount: "587",
    ownervesselscout: "62",
    owener1vesselcount: "72",
    color: "success",
  },
  {
    vesselName: "SCHEDULED AUDITS(NOT YET STARTED)",
    vesselCount: "25",
    ownervesselscout: "6",
    owener1vesselcount: "42",
    color: "warning",
  },
  {
    vesselName: "SCHEDULED AUDITS(OVERDUE)",
    vesselCount: "54",
    ownervesselscout: "16",
    owener1vesselcount: "19",
    color: "danger",
  },

];
const certificateList = [
  {
    vesselName: "CERTIFICATES EXPIRING IN 180 DAYS",
    vesselCount: "54",
    ownervesselscout: "40",
    owener1vesselcount: "39",
    color: "danger",
  },
  {
    vesselName: "CERTIFICATES",
    vesselCount: "25",
    ownervesselscout: "12",
    owener1vesselcount: "15",
    color: "success",
  },
  {
    vesselName: "LETTERS",
    vesselCount: "58",
    ownervesselscout: "18",
    owener1vesselcount: "22",
    color: "success",
  },

];

const findingsList = [
  {
    vesselName: "OPEN FINDINGS",
    vesselCount: "12",
    owener1vesselcount: "13",
    color: "warning",
  },
  {
    vesselName: "FINDINGS WITH DUE",
    vesselCount: "24",
    owener1vesselcount: "18",
    color: "warning",
  },

  {
    vesselName: "FINDINGS WITH OVERDUE",
    vesselCount: "18",
    owener1vesselcount: "23",
    color: "danger",
  },
]

const Dashboard = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [showResults, setShowResults] = React.useState(false)
  const [selected, setSelected] = React.useState(true);
  const [auditCardSelected, setAuditCardSelected] = React.useState(true);
  const onClick = () => setShowResults(true)
  const history = useHistory();
  const [value, setValue] = React.useState('Companies');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedAuditCard, setSelectedAuditCard] = useState(0);
  const [selectedCertificateCard, setSelectedCertificateCard] = useState(0);
  const [selectedFindingsCard, setSelectedFindingsCard] = useState(0);
  
const [expanded, setExpanded] = React.useState(false);

const handleExpansionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const companySearchDataChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCompanyList = companyList.filter((item) => {
    console.log(
      Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

 const companySelectHandler = officialId => {
    let a = companyList.filter(company => company.officialId === officialId)[0]
    console.log("Selected Company OBJ : ", a);
    setSelectedCompany(a);
  }


  const auditCardSelectHandler = index => {
    setSelectedAuditCard(index);
    console.log("selected audit : ", index)
  }
  const certificateCardSelectHandler = index => {
    setSelectedCertificateCard(index);
    console.log("selected certificate : ", index)
  }
  const findingsCardSelectHandler = index => {
    setSelectedFindingsCard(index);
    console.log("selected findings : ", index)
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -13,
      top: 0,
      //border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*  const PannelHeaderSection = () => {
 
     if (selected) {
       return <Box sx={{ m: "30px", textAlign: "center", fontWeight: "bold" }}>OVER ALL COMPANIES STATISTICS</Box>
     } else {
       return <Container maxWidth="sm">
         <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
       </Container>
     }
  */

  //}
  return (
    <div className="content dashboard-content" style={{
      display: "flex",
      flexDirection: "column", flex: 1,
      padding: 20,
    }}>
      {localStorage.getItem("role") == "admin" ?
        <TabContext value={value}>
          <div style={{ flex: 1, border: "1px solid #80808021", marginInline: "18px", borderRadius: "10px", backgroundColor: "white", display: "flex", alignItems: "center" }}>
            <Box sx={{ width: '100%' }}>
              <TabList style={{ justifyContent: "space-evenly", display: "flex", }}
                // marginInline: "18px" 
                value={value}
                variant="fullWidth"
                onChange={handleChange}
                textColor="primary"
                indicatorColor="transparant"
                aria-label="Ower Portal Dashboard Tabs Header"
              >
                <Tab value="Companies" label={<StyledBadge badgeContent={54} color="primary">Companies</StyledBadge>} style={{ fontWeight: "bold" }} onClick={onClick} />
                <Tab value="Audit" label={<StyledBadge badgeContent={34} color="primary">Survey / Audits</StyledBadge>} style={{ fontWeight: "bold" }} />
                <Tab value="Certificates" label={<StyledBadge badgeContent={42} color="primary">Certificates</StyledBadge>} style={{ fontWeight: "bold" }} />
                <Tab value="Findings" label={<StyledBadge badgeContent={72} color="primary">Findings</StyledBadge>} style={{ fontWeight: "bold" }} />
              </TabList>
            </Box>

          </div>

          {/* side pannel - search box with toggle button */}

          <div style={{ flex: 9, display: "flex", flexDirection: "row", padding: 20, }} >
            <div style={{ flex: 2, border: "1px solid #80808021", backgroundColor: "white", height: "85vh", overflowY: "scroll" }}>
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap', p: 1, ml: 1, mt: 1, mr: 1, height: "35px", alignContent: 'space-around'
              }}>
                <InputBase
                  id="searchText"
                  autoFocus
                  fullWidth
                  placeholder={'Search...'}
                  onChange={companySearchDataChangeHandler}
                  startAdornment={<Search style={{
                    fontSize: '20',
                    color: "grey[500]",
                    marginRight: 1
                  }} />}
                >
                </InputBase>
              </Box>
              <Box sx={{
                display: 'flex',
                height: "35px", mr: 2, justifyContent: 'flex-end'
              }}>
                <ToggleButton
                  color="primary"
                  value="check"
                  selected={selected}
                  onChange={() => {
                    if (selected == true) {

                    }
                    else if (selected === false) {
                      setSelected(!selected);
                      companySelectHandler(null);
                      setSearchTerm("");
                    }
                  }}
                >
                  All
                </ToggleButton>
              </Box>

              {/* side pannel - Company List */}


              <List sx={{ width: '100%' }}>
                {filteredCompanyList.map((res, index) => (

                  <ListItem alignItems="flex-start">
                    <CardActionArea sx={{borderRadius: "10px"}} onClick={() => { companySelectHandler(res.officialId); setSelected(false); }}>
                      <Card style={{ background: selectedCompany?.officialId === res.officialId ? "#a2e3f561" : "#ffffff",border:selectedCompany?.officialId===res.officialId?"2px solid #a2e3f5":"", cursor: "pointer", boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", width: "-webkit-fill-available", borderRadius: "10px", padding: "8px", marginBottom: "0" }} >
                        <CardBody>
                          <Row style={{ marginInline: "1", marginBottom: "5px" }}><h6 style={{ fontWeight: "bold", color: "#507e99" }}>{res.imoNumber}</h6><h6 style={{ fontWeight: "bold", color: "#507e99" }}>{res.officialId}</h6></Row>
                          <CardTitle style={{ fontWeight: "bold", textAlign: "center", marginBottom: "0.35rem" }}>{res.companyName}</CardTitle>
                          <CardSubtitle style={{ fontWeight: "bold", color: "gray", textAlign: "center" }}>{res.country}</CardSubtitle>
                        </CardBody>
                      </Card>
                    </CardActionArea>
                  </ListItem>

                ))}
              </List>





              {/* </Card>
            <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", margin: "8px 16px", background: "#ffffff", borderRadius: "10px", padding: "8px" }} >
              <CardBody style={{}}>
                <Row><h6>0161412</h6><h6>9030</h6></Row>
                <CardTitle style={{ fontWeight: "bold" }}>ANGLO-EASTERN</CardTitle>
                <CardSubtitle style={{ fontWeight: "bold", textColor: "gray" }}>Brazil</CardSubtitle>

              </CardBody>
            </Card>
            <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", margin: "8px 16px", background: "#ffffff", borderRadius: "10px", padding: "8px" }} >
              <CardBody style={{}}>
                <Row><h6>0161412</h6><h6>9030</h6></Row>
                <CardTitle style={{ fontWeight: "bold" }}>ANGLO-EASTERN</CardTitle>
                <CardSubtitle style={{ fontWeight: "bold", textColor: "gray" }}>Brazil</CardSubtitle>

              </CardBody>
            </Card>
            <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", margin: "8px 16px", background: "#ffffff", borderRadius: "10px", padding: "8px" }} >
              <CardBody style={{}}>
                <Row><h6>0161412</h6><h6>9030</h6></Row>
                <CardTitle style={{ fontWeight: "bold" }}>ANGLO-EASTERN</CardTitle>
                <CardSubtitle style={{ fontWeight: "bold", textColor: "gray" }}>Brazil</CardSubtitle>

              </CardBody>
            </Card>
            <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", margin: "8px 16px", background: "#ffffff", borderRadius: "10px", padding: "8px" }} >
              <CardBody style={{}}>
                <Row><h6>0161412</h6><h6>9030</h6></Row>
                <CardTitle style={{ fontWeight: "bold" }}>ANGLO-EASTERN</CardTitle>
                <CardSubtitle style={{ fontWeight: "bold", textColor: "gray" }}>Brazil</CardSubtitle>

              </CardBody>
            </Card> */}

            </div>


            {/* Tab Pannel content */}

            <TabPanel value="Companies" style={{ flex: 8, marginLeft: "12px", padding: "16px", backgroundColor: "white", border: "1px solid #80808021" }}>

            {(selected) ?
              <Box sx={{ m: "30px", textAlign: "center", fontWeight: "bold" }}>OVER ALL COMPANIES STATISTICS</Box>
              :
              <div style={{marginBottom:"12px"}}>
                {/* <Box sx={{ m: 1, p: 1, bgcolor: '#cfe8fc', height: '10vh' }} /> */}
                <Accordion sx={{ m: 1, mb: 2, border: "1px solid #17a2b8fa", borderRadius: "10px",backgroundColor:"#51cbce38",color:"white" }} expanded={expanded === 'panel1'} onChange={handleExpansionChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  ><Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY NAME</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.companyName}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY IMO</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.imoNumber}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>OFFICIAL ID</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.officialId}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COUNTRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.country}
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails sx={{mr:'3rem',}}>
                    {/*  <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                      Aliquam eget maximus est, id dignissim quam.
                    </Typography> */}
                    {/* <Box sx={{ m: 1, p: 1, height: '7vh', bgcolor: '#cfe8fc', width: "100%", flexDirection: "column", display: "flex" }}> */}
                    <Divider sx={{bgcolor:"#17a2b845"}} />
                    <Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC TYPE</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docType}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC ISSUER</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docIssuer}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC EXPIRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docExpiry}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY ADDRESS</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.companyAddress}
                        </Typography>
                      </Box>
                    </Box>

                  {/* </Box> */}
                </AccordionDetails>
              </Accordion>


              </div>
            }

              <div style={{margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
                {vesselList.map((res) => (
                  <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"16px", paddingRight: "0.5rem", height: "6rem" }} >
                    <CardHeader>
                      <div style={{
                        backgroundColor: res.color === "danger" ? "rgb(229, 86, 86)" : res.color === "warning" ? "#fbc658" : res.color === "success" ? "rgb(107, 208, 152)" : "#51bcda",
                        width: "60px", height: "60px"
                      }}
                        className="icon-shapes shadow-info text-center mt-n4 position-absolute">
                        <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.vesselCount}</div>
                      </div>
                      <div className="container" align="left">
                        <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55PX", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>{res.vesselName}</div>
                      </div>
                    </CardHeader>
                    <CardFooter style={{ marginTop: "40px" }}>
                      <div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                        <DoubleArrowIcon
                          className="nc-icon nc-globe text-info"
                          style={{
                            fontSize: "20px",
                            marginTop: "-3px",
                          }}
                        ></DoubleArrowIcon></div></CardFooter>
                  </Card>
                ))}
              </div>
            </TabPanel>


            <TabPanel value="Audit" style={{ flex: 8, marginLeft: "12px", padding: "16px", backgroundColor: "white", border: "1px solid #80808021" }}>
            {(selected) ?
              <Box sx={{ m: "30px", textAlign: "center", fontWeight: "bold" }}>OVER ALL AUDITS STATISTICS</Box>
              :
              <div style={{marginBottom:"12px"}}>
                {/* <Box sx={{ m: 1, p: 1, bgcolor: '#cfe8fc', height: '10vh' }} /> */}
                <Accordion sx={{ m: 1, mb: 2, border: "1px solid #17a2b8fa", borderRadius: "10px",backgroundColor:"#51cbce38" }} expanded={expanded === 'panel1'} onChange={handleExpansionChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  ><Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY NAME</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.companyName}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY IMO</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.imoNumber}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>OFFICIAL ID</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.officialId}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COUNTRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.country}
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails sx={{mr:'3rem',}}>
                    {/*  <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                      Aliquam eget maximus est, id dignissim quam.
                    </Typography> */}
                    {/* <Box sx={{ m: 1, p: 1, height: '7vh', bgcolor: '#cfe8fc', width: "100%", flexDirection: "column", display: "flex" }}> */}
                    <Divider sx={{bgcolor:"#17a2b845"}} />
                    <Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC TYPE</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docType}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC ISSUER</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docIssuer}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC EXPIRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docExpiry}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY ADDRESS</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.companyAddress}
                        </Typography>
                      </Box>
                    </Box>

                  {/* </Box> */}
                </AccordionDetails>
              </Accordion>


              </div>
            }

              <div style={{margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
                {auditList.map((res, index) => (
                  <CardActionArea sx={{borderRadius: "10px"}} onClick={() => { auditCardSelectHandler(index) }}>
                    <Card style={{ background: selectedAuditCard === index ? "#a2e3f561" : "#ffffff",border:selectedAuditCard===index?"2px solid #a2e3f5":"", boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                      <CardHeader>
                        <div style={{
                          backgroundColor: res.color === "danger" ? "rgb(229, 86, 86)" : res.color === "warning" ? "#fbc658" : res.color === "success" ? "rgb(107, 208, 152)" : "#51bcda",
                          width: "60px", height: "60px"
                        }}
                          className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                          <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.vesselCount}</div>
                        </div>
                        <div className="container" align="left">
                          <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55PX", color:selectedAuditCard === index ? "rgb(0 0 0 / 85%)" : "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>{res.vesselName}</div>
                        </div>
                      </CardHeader>
                    </Card>
                  </CardActionArea>
                ))}
              </div>

              {/* table content view */}
              <div style={{ paddingTop: "22px" }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table" >
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth, color: "#46b1cf", fontWeight: "500" }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell key={column.id} align={column.align} style={{ color: "#66615b", fontSize: "13px" }}>
                                      {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            </TabPanel>


            <TabPanel value="Certificates" style={{ flex: 8, marginLeft: "12px", padding: "16px", backgroundColor: "white", border: "1px solid #80808021" }}>
            {(selected) ?
              <Box sx={{ m: "30px", textAlign: "center", fontWeight: "bold" }}>OVER ALL CERTIFICATES STATISTICS</Box>
              :
              <div style={{marginBottom:"12px"}}>
                {/* <Box sx={{ m: 1, p: 1, bgcolor: '#cfe8fc', height: '10vh' }} /> */}
                <Accordion sx={{ m: 1, mb: 2, border: "1px solid #17a2b8fa", borderRadius: "10px",backgroundColor:"#51cbce38" }} expanded={expanded === 'panel1'} onChange={handleExpansionChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  ><Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY NAME</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.companyName}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY IMO</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.imoNumber}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>OFFICIAL ID</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.officialId}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COUNTRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.country}
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails sx={{mr:'3rem',}}>
                    {/*  <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                      Aliquam eget maximus est, id dignissim quam.
                    </Typography> */}
                    {/* <Box sx={{ m: 1, p: 1, height: '7vh', bgcolor: '#cfe8fc', width: "100%", flexDirection: "column", display: "flex" }}> */}
                    <Divider sx={{bgcolor:"#17a2b845"}} />
                    <Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC TYPE</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docType}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC ISSUER</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docIssuer}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC EXPIRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docExpiry}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY ADDRESS</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.companyAddress}
                        </Typography>
                      </Box>
                    </Box>

                  {/* </Box> */}
                </AccordionDetails>
              </Accordion>


              </div>
            }
              <div style={{margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
                {certificateList.map((res,index) => (
                  <CardActionArea sx={{borderRadius: "10px"}}  onClick={() => {  certificateCardSelectHandler(index) }}>
                  <Card style={{background: selectedCertificateCard === index ? "#a2e3f561" : "#ffffff",border:selectedCertificateCard===index?"2px solid #a2e3f5":"", boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                    <CardHeader>
                      <div style={{
                        backgroundColor: res.color === "danger" ? "rgb(229, 86, 86)" : res.color === "warning" ? "#fbc658" : res.color === "success" ? "rgb(107, 208, 152)" : "#51bcda",
                        width: "60px", height: "60px"
                      }}
                        className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                        <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.vesselCount}</div>
                      </div>
                      <div className="container" align="left">
                        <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55PX", color:selectedCertificateCard === index ?"rgb(0 0 0 / 85%)": "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>{res.vesselName}</div>
                      </div>
                    </CardHeader>
                    {/* <CardFooter style={{ marginTop: "40px" }}>
                      <div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                        <DoubleArrowIcon
                          className="nc-icon nc-globe text-info"
                          style={{
                            fontSize: "20px",
                            marginTop: "-3px",
                          }}
                        ></DoubleArrowIcon></div></CardFooter> */}
                  </Card>
                  </CardActionArea>
                ))}
              </div>

              {/* <Row style={{ marginTop: "-10px" }}>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#e55656", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>54</div>
                    </div>
                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>CERTIFICATES EXPIRING IN 180 DAYS</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div></CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#6bd098", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>25</div>
                    </div>

                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>CERTIFICATES</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")}> More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div> </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#6bd098", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>84</div>
                    </div>
                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>LETTERS</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" align="bottom" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div> </CardFooter>
                </Card>
              </Col>
            </Row> */}



              {/* table content view */}
              <div style={{ paddingTop: "22px" }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {certificatecolumns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth, color: "#46b1cf", fontWeight: "500" }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {certificaterows
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {certificatecolumns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell key={column.id} align={column.align} style={{ color: "#66615b", fontSize: "13px" }}>
                                      {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={certificaterows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>

            </TabPanel>

            <TabPanel value="Findings" style={{ flex: 8, marginLeft: "12px", padding: "16px", backgroundColor: "white", border: "1px solid #80808021" }}>
            {(selected) ?
              <Box sx={{ m: "30px", textAlign: "center", fontWeight: "bold" }}>OVER ALL FINDINGS STATISTICS</Box>
              :
              <div style={{marginBottom:"12px"}}>
                {/* <Box sx={{ m: 1, p: 1, bgcolor: '#cfe8fc', height: '10vh' }} /> */}
                <Accordion sx={{ m: 1, mb: 2, border: "1px solid #17a2b8fa", borderRadius: "10px",backgroundColor:"#51cbce38" }} expanded={expanded === 'panel1'} onChange={handleExpansionChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  ><Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY NAME</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.companyName}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY IMO</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.imoNumber}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>OFFICIAL ID</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.officialId}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COUNTRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.country}
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails sx={{mr:'3rem',}}>
                    {/*  <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                      Aliquam eget maximus est, id dignissim quam.
                    </Typography> */}
                    {/* <Box sx={{ m: 1, p: 1, height: '7vh', bgcolor: '#cfe8fc', width: "100%", flexDirection: "column", display: "flex" }}> */}
                    <Divider sx={{bgcolor:"#17a2b845"}} />
                    <Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC TYPE</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docType}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC ISSUER</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docIssuer}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC EXPIRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.docExpiry}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY ADDRESS</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                          {selectedCompany?.companyAddress}
                        </Typography>
                      </Box>
                    </Box>

                  {/* </Box> */}
                </AccordionDetails>
              </Accordion>


              </div>
            }
              <div style={{margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
                {findingsList.map((res,index) => (
                <CardActionArea sx={{borderRadius: "10px"}}  onClick={() => { findingsCardSelectHandler(index) }}>
                  <Card style={{background: selectedFindingsCard === index ? "#a2e3f561" : "#ffffff",border:selectedFindingsCard===index?"2px solid #a2e3f5":"", boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                    <CardHeader>
                      <div style={{
                        backgroundColor: res.color === "danger" ? "rgb(229, 86, 86)" : res.color === "warning" ? "#fbc658" : res.color === "success" ? "rgb(107, 208, 152)" : "#51bcda",
                        width: "60px", height: "60px",marginTop: "-1.5rem" 
                      }}
                        className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                        <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.vesselCount}</div>
                      </div>
                      <div className="container" align="left">
                        <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55PX", color:selectedFindingsCard === index ? "rgb(0 0 0 / 85%)": "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>{res.vesselName}</div>
                      </div>
                    </CardHeader>
                    {/* <CardFooter style={{ marginTop: "40px" }}>
                      <div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                        <DoubleArrowIcon
                          className="nc-icon nc-globe text-info"
                          style={{
                            fontSize: "20px",
                            marginTop: "-3px",
                          }}
                        ></DoubleArrowIcon></div></CardFooter> */}
                  </Card>
                  </CardActionArea>
                ))}
              </div>

              {/* <Row style={{ marginTop: "-10px" }}>
              <Col md="4" style={{ paddingRight: "10PX", paddingLeft: "10px" }}>
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#e55656", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>24</div>
                    </div>
                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55PX", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>FINDINGS</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div></CardFooter>
                </Card>
              </Col>
              <Col md="4" style={{ paddingRight: "10PX", paddingLeft: "10px" }}>
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#fd7e14", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>12</div>
                    </div>

                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>OPEN FINDINGS</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")}> More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div> </CardFooter>
                </Card>
              </Col>
              <Col md="4" style={{ paddingRight: "10PX", paddingLeft: "10px" }}>
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#6bd098", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>18</div>
                    </div>
                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>CLOSED FINDINGS</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" align="bottom" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div> </CardFooter>
                </Card>
              </Col>
            </Row> */}



              {/* table content view */}
              <div style={{ padding: "10px", marginTop: "10px" }}>
                <Card>
                  {/* <CardHeader>
                    <CardTitle
                      style={{
                        color: "#19979a",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                      tag="h5"
                    >
                      OPEN FINDINGS
                    </CardTitle>
                  </CardHeader> */}
                  <CardBody>
                    <table className="table table-hover">
                      <thead className="primary">
                        <tr>
                          <th scope="col" className="primary">
                            TYPE
                          </th>
                          <th scope="col">SUBTYPE</th>
                          <th scope="col">CATEGORY</th>
                          <th scope="col">STATUS</th>
                          <th scope="col">MORE INFO</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ISM</td>
                          <td>INITIAL</td>
                          <td>MNC</td>
                          <td>
                            <span className="badge rounded-pill bg-primary">
                              PLAN ACCEPTED
                            </span>
                          </td>
                          <td>
                            {/* <Popover content={<FindingsPopovers />}>
                              <div style={imagestyle}>
                                <img src={require("../assets/img/info.png")} />
                              </div>
                            </Popover> */}
                          </td>
                        </tr>
                        <tr>
                          <td>ISM</td>
                          <td>INTERIM</td>
                          <td>MNC</td>
                          <td>
                            <span className="badge rounded-pill bg-success">
                              VERIFED/CLOSED
                            </span>
                          </td>
                          <td>
                            {/* <Popover content={<FindingsPopovers />}>
                              <div style={imagestyle}>
                                <img src={require("../assets/img/info.png")} />
                              </div>
                            </Popover> */}
                          </td>
                        </tr>
                        <tr>
                          <td>ISPS</td>
                          <td>INITIAL</td>
                          <td>OBC</td>
                          <td>
                            <span className="badge rounded-pill bg-secondary">
                              OPEN
                            </span>
                          </td>
                          <td>
                            {" "}
                            {/* <Popover content={<FindingsPopovers />}>
                              <div style={imagestyle}>
                                <img src={require("../assets/img/info.png")} />
                              </div>
                            </Popover> */}
                          </td>
                        </tr>
                        <tr>
                          <td>MLC</td>
                          <td>INITIAL</td>
                          <td>OBC</td>
                          <td>
                            <span className="badge rounded-pill bg-secondary">
                              OPEN
                            </span>
                          </td>
                          <td>
                            {" "}
                            {/* <Popover content={<FindingsPopovers />}>
                              <div style={imagestyle}>
                                <img src={require("../assets/img/info.png")} />
                              </div>
                            </Popover> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardBody>
                </Card>
              </div>

            </TabPanel>
          </div>
        </TabContext>




        :




        <div>
          
          <div style={{marginBottom:"12px"}}>
                {/* <Box sx={{ m: 1, p: 1, bgcolor: '#cfe8fc', height: '10vh' }} /> */}
                <Accordion sx={{ m: 1, mb: 2, border: "1px solid #17a2b8fa", borderRadius: "10px",backgroundColor:"#51cbce38" }} expanded={expanded === 'panel1'} onChange={handleExpansionChange('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  ><Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY NAME</Typography>

                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                         {localStorage.getItem("role") == "company" ? "ANGLO - EASTERN" :"TRANSOCEAN"}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY IMO</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                        {localStorage.getItem("role") == "company" ? "0161412" : "1859654" }
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>OFFICIAL ID</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                        {localStorage.getItem("role") == "company" ? "9030" : "5124" }
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COUNTRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                        {localStorage.getItem("role") == "company" ? "Brazil" : "Vernier, Switzerland" }
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails sx={{mr:'3rem',}}>
                    {/*  <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                      Aliquam eget maximus est, id dignissim quam.
                    </Typography> */}
                    {/* <Box sx={{ m: 1, p: 1, height: '7vh', bgcolor: '#cfe8fc', width: "100%", flexDirection: "column", display: "flex" }}> */}
                    <Divider sx={{bgcolor:"#17a2b845"}} />
                    <Box sx={{ m: 1, p: 1, width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-between" }}>

                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC TYPE</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                        Full Term
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC ISSUER</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                        DNV GL
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>DOC EXPIRY</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                        {localStorage.getItem("role") == "company" ? "20-JUN-2024" : "20-JUN-2023" }
                        </Typography>
                      </Box>
                      <Box sx={{ width: "25%" }}>
                        <Typography sx={{ mb: 1, fontWeight: "bold", color: "GrayText", textAlign: "left", fontSize: "0.7rem" }}>COMPANY ADDRESS</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "#507e99", textAlign: "left", fontSize: "0.9rem" }} variant="button" display="block" gutterBottom>
                        {localStorage.getItem("role") == "company" ? "Kowloon Bay ,Kowloon ,Hong Kong" : "GENEL DENIZCILIK NAKLIYATI AS BUYUKDERE CADDESI. YAPI KREDI PLAZA A BLOK KAT 12   LEVENT ISTANBUL  80620  Vernier, Switzerland" }
                        
                        
                        </Typography>
                      </Box>
                    </Box>

                  {/* </Box> */}
                </AccordionDetails>
              </Accordion>


              </div>

        <TabContext value={value}>
          <div style={{ border: "1px solid #80808021", marginInline: "120px", borderRadius: "10px", backgroundColor: "white", display: "flex", alignItems: "center" }}>
            <Box sx={{ width: '100%' }}>
              <TabList style={{ justifyContent: "space-evenly", display: "flex", }}
                // marginInline: "18px" 
                value={value}
                variant="fullWidth"
                onChange={handleChange}
                textColor="primary"
                indicatorColor="transparant"
                aria-label="Ower Portal Dashboard Tabs Header"
              >
                <Tab value="Companies" label={<StyledBadge badgeContent={14} color="primary">vessels</StyledBadge>} style={{ fontWeight: "bold" }} onClick={onClick} />
                <Tab value="Audit" label={<StyledBadge badgeContent={25} color="primary">Survey / Audits</StyledBadge>} style={{ fontWeight: "bold" }} />
                <Tab value="Certificates" label={<StyledBadge badgeContent={12} color="primary">Certificates</StyledBadge>} style={{ fontWeight: "bold" }} />
                {/* <Tab value="Findings" label={<StyledBadge badgeContent={72} color="primary">Findings</StyledBadge>} style={{ fontWeight: "bold" }} /> */}
              </TabList>
            </Box>

          </div>


          <div style={{ flex: 9, display: "flex", flexDirection: "row", padding: 20, }} >

            {/* Tab Pannel content */}

            <TabPanel value="Companies" style={{ flex: 8, marginLeft: "12px", padding: "16px", backgroundColor: "white", border: "1px solid #80808021" }}>

              <div style={{margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
                {vesselList.map((res) => (

                  <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"16px", paddingRight: "0.5rem", height: "6rem" }} >
                    <CardHeader>
                      <div style={{
                        backgroundColor: res.color === "danger" ? "rgb(229, 86, 86)" : res.color === "warning" ? "#fbc658" : res.color === "success" ? "rgb(107, 208, 152)" : "#51bcda",
                        width: "60px", height: "60px"
                      }}
                        className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                        {localStorage.getItem("role") == "company" ?
                          <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.ownervesselscout}</div>
                          : <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.owener1vesselcount}</div>}
                      </div>
                      <div className="container" align="left">
                        <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55PX", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>{res.vesselName}</div>
                      </div>
                    </CardHeader>
                    <CardFooter style={{ marginTop: "40px" }}>
                      <div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                        <DoubleArrowIcon
                          className="nc-icon nc-globe text-info"
                          style={{
                            fontSize: "20px",
                            marginTop: "-3px",
                          }}
                        ></DoubleArrowIcon></div></CardFooter>
                  </Card>
                ))}
              </div>
            </TabPanel>


            <TabPanel value="Audit" style={{ flex: 8, marginLeft: "12px", padding: "16px", backgroundColor: "white", border: "1px solid #80808021" }}>
              {/* <Box sx={{ m: "30px", textAlign: "center", fontWeight: "bold" }}>OVER ALL COMPANIES STATISTICS</Box> */}

              <div style={{margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
                {auditList.map((res,index) => (
                  <CardActionArea sx={{borderRadius: "10px"}} onClick={() => { auditCardSelectHandler(index) }}>
                  <Card style={{background: selectedAuditCard === index ? "#a2e3f561" : "#ffffff",border:selectedAuditCard===index?"2px solid #a2e3f5":"", boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                    <CardHeader>
                      <div style={{
                        backgroundColor: res.color === "danger" ? "rgb(229, 86, 86)" : res.color === "warning" ? "#fbc658" : res.color === "success" ? "rgb(107, 208, 152)" : "#51bcda",
                        width: "60px", height: "60px"
                      }}
                        className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                        {localStorage.getItem("role") == "company" ?
                          <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.ownervesselscout}</div>
                          : <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.owener1vesselcount}</div>}
                      </div>
                      <div className="container" align="left">
                        <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55PX", color:selectedAuditCard === index ? "rgb(0 0 0 / 85%)" : "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>{res.vesselName}</div>
                      </div>
                    </CardHeader>
                    {/* <CardFooter style={{ marginTop: "40px" }}>
                      <div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                        <DoubleArrowIcon
                          className="nc-icon nc-globe text-info"
                          style={{
                            fontSize: "20px",
                            marginTop: "-3px",
                          }}
                        ></DoubleArrowIcon></div></CardFooter> */}
                  </Card>
                  </CardActionArea>
                ))}
              </div>

              {/* <Row style={{ marginTop: "-10px" }}>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#fd7e14", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>54</div>
                    </div>
                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>IN-PROGRESS AUDITS</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div></CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#17a2b8", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>25</div>
                    </div>

                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>SCHEDULED AUDITS(NOT YET STARTED)</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")}> More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div></CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#e55656", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>587</div>
                    </div>
                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>SCHEDULED AUDITS(OVERDUE)</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" align="bottom" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div></CardFooter>
                </Card>
              </Col>
            </Row> */}

              {/* table content view */}
              <div style={{marginTop:"22px"}}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth, color: "#46b1cf", fontWeight: "500" }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell key={column.id} align={column.align} style={{ color: "#66615b", fontSize: "13px" }}>
                                      {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            </TabPanel>


            <TabPanel value="Certificates" style={{ flex: 8, marginLeft: "12px", padding: "16px", backgroundColor: "white", border: "1px solid #80808021" }}>
              {/* <Box sx={{ m: "30px", textAlign: "center", fontWeight: "bold" }}>OVER ALL COMPANIES STATISTICS</Box> */}

              <div style={{margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px"}}>
                {certificateList.map((res,index) => (
                  <CardActionArea sx={{borderRadius: "10px"}}  onClick={() => {  certificateCardSelectHandler(index) }}>
                  <Card style={{background: selectedCertificateCard === index ? "#a2e3f561" : "#ffffff", border:selectedCertificateCard===index?"2px solid #a2e3f5":"", boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                    <CardHeader>
                      <div style={{
                        backgroundColor: res.color === "danger" ? "rgb(229, 86, 86)" : res.color === "warning" ? "#fbc658" : res.color === "success" ? "rgb(107, 208, 152)" : "#51bcda",
                        width: "60px", height: "60px"
                      }}
                        className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                        {localStorage.getItem("role") == "company" ?
                          <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.ownervesselscout}</div>
                          : <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>{res.owener1vesselcount}</div>}
                      </div>
                      <div className="container" align="left">
                        <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "55PX", color: selectedCertificateCard === index ? "rgb(0 0 0 / 54%)" : "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>{res.vesselName}</div>
                      </div>
                    </CardHeader>
                    {/* <CardFooter style={{ marginTop: "40px" }}>
                      <div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                        <DoubleArrowIcon
                          className="nc-icon nc-globe text-info"
                          style={{
                            fontSize: "20px",
                            marginTop: "-3px",
                          }}
                        ></DoubleArrowIcon></div></CardFooter> */}
                  </Card>
                  </CardActionArea>
                ))}
              </div>

              {/* <Row style={{ marginTop: "-10px" }}>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#e55656", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>54</div>
                    </div>
                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>CERTIFICATES EXPIRING IN 180 DAYS</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div></CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#6bd098", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>25</div>
                    </div>

                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>CERTIFICATES</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")}> More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div> </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ boxShadow: "20px 20px 100px #d9d9d9, -20px -20px 100px #ededed", background: "#ffffff", borderRadius: "10px",paddingBottom: "0.5rem",marginBottom:"0", paddingRight: "0.5rem", height: "6rem" }} >
                  <CardHeader>
                    <div style={{ backgroundColor: "#6bd098", width: "60px", height: "60px" }}
                      className="icon-lg icon-shapes bg-gradient-dark shadow-info text-center mt-n4 position-absolute">
                      <div style={{ marginTop: "20%", color: "white", fontWeight: "600", fontSize: "1.6rem" }}>84</div>
                    </div>
                    <div className="container" align="left">
                      <div className="textSizeResolution" style={{ fontWeight: "bold", marginLeft: "52px", color: "rgb(0 0 0 / 54%)", fontSize: "0.85rem", position: "absolute" }}>LETTERS</div>
                    </div>
                  </CardHeader>
                  <CardFooter style={{ marginTop: "40px" }}>
                    < div className="textmoreResolution" align="bottom" style={{ textAlign: "right", cursor: "pointer", fontSize: "12px", fontWeight: "600", color: "#52bcda" }} onClick={() => history.push("/admin/vessel")} > More Info{" "}
                      <DoubleArrowIcon
                        className="nc-icon nc-globe text-info"
                        style={{
                          fontSize: "20px",
                          marginTop: "-3px",
                        }}
                      ></DoubleArrowIcon></ div> </CardFooter>
                </Card>
              </Col>
            </Row> */}



              {/* table content view */}
              <div style={{paddingTop :"22px"}}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {certificatecolumns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth, color: "#46b1cf", fontWeight: "500" }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {certificaterows
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {certificatecolumns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell key={column.id} align={column.align} style={{ color: "#66615b", fontSize: "13px" }}>
                                      {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={certificaterows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>

            </TabPanel>

          </div>
        </TabContext>
        </div>
      }
    </div>
  )
}


export default withRouter(Dashboard);
