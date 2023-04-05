export const auditTypes = [
  { desc: "ISM", id: "1001", color: "#f04f6a" },
  { desc: "ISPS", id: "1002", color: "lightseagreen" },
  { desc: "MLC", id: "1003", color: "orangered" },
];

export const IsmTypeId = 1001;
export const IspsTypeId = 1002;
export const MlcTypeId = 1003;

export const auditSubTypes = [
  {
    id: 1001,
    desc: "INITIAL",
  },
  {
    id: 1002,
    desc: "INTERIM",
  },
  {
    id: 1003,
    desc: "INTERMEDIATE",
  },
  {
    id: 1004,
    desc: "RENEWAL",
  },
  {
    id: 1005,
    desc: "ADDITIONAL",
  },
];

export const inspectionList = [
  { id: 0, desc: "AIS Inspection", color: "darkgray" },
  { id: 1, desc: "VM Inspection", color: "orange" },
  { id: 2, desc: "Vetting Inspection", color: "#ab1d1d" },
];

export const userList = [
  {
    userName: "MARK HAMILL",
    userId: 1,
    status: 1,
    statusDesc: "Available",
    firstName: "Mark",
    lastName: "Hamill",
    email: "mark.h@bsolsystems.com",
    phone: "635336548",
    roles: ["Auditor", "Inspector"],
  },
  {
    userName: "KYLE KATARN",
    userId: 2,
    status: 1,
    statusDesc: "Available",
    firstName: "Kyle",
    lastName: "Katarn",
    email: "kyle.k@bsolsystems.com",
    phone: "8636312155",
    roles: ["Auditor", "Inspector"],
  },
  {
    userName: "TIM CAHILL",
    userId: 3,
    status: 0,
    statusDesc: "Not Available",
    firstName: "Tim",
    lastName: "Cahill",
    email: "tim.c@bsolsystems.com",
    phone: "3214666556",
    roles: ["Auditor"],
  },
  {
    userName: "DARREN",
    userId: 125,
    status: 2,
    statusDesc: "On Leave",
    firstName: "Darren",
    lastName: "Johnson",
    email: "darren.j@bsolsystems.com",
    phone: "789654666",
    roles: ["Auditor", "Inspector"],
  },
  {
    userName: "MICHAEL",
    userId: 120,
    status: 2,
    statusDesc: "On Leave",
    firstName: "Michael",
    lastName: "Jackson",
    email: "michael.j@bsolsystems.com",
    phone: "8765423322",
    roles: ["Auditor", "Inspector"],
  },
  {
    userName: "KIRAN",
    userId: 17,
    status: 1,
    statusDesc: "Available",
    firstName: "Kiran",
    lastName: "M J",
    email: "kiran.mj@bsolsystems.com",
    phone: "67455521254",
    roles: ["Inspector"],
  },
  {
    userName: "JOHN",
    userId: 12,
    status: 2,
    statusDesc: "On Leave",
    firstName: "John",
    lastName: "Lewis",
    email: "john.l@bsolsystems.com",
    phone: "8765423322",
    roles: ["Inspector"],
  },
  {
    userName: "TRAVIS",
    userId: 12,
    status: 0,
    statusDesc: "Not Available",
    firstName: "Travis",
    lastName: "Scott",
    email: "travis.s@bsolsystems.com",
    phone: "35463598444",
    roles: ["Inspector"],
  },
];

export const vesselList = [
  {
    vesselName: "FEDERAL TAMBO",
    vesselType: "CHEMICAL TANKER",
    vesselImoNo: 6545217,
    officialNo: 21224,
  },
  {
    vesselName: "BALTIC LEOPARD",
    vesselType: "OIL TANKER",
    vesselImoNo: 7522135,
    officialNo: 45322,
  },
  {
    vesselName: "NAVIGARE BACCA",
    vesselType: "CARGO SHIP",
    vesselImoNo: 9866545,
    officialNo: 12344,
  },
  {
    vesselName: "SEAMAX FAIRFIELD",
    vesselType: "MULTI PURPOSE",
    vesselImoNo: 8456778,
    officialNo: 53232,
  },
];

export const ownerVesselList = [
  {
    vesselName: "DEEPWATER PROTEUS",
    vesselType: "CHEMICAL TANKER",
    vesselImoNo: 1033354,
    officialNo: 100,
  },
  {
    vesselName: "DEEPWATER POSEIDON",
    vesselType: "OIL TANKER",
    vesselImoNo: 6012234,
    officialNo: 6543,
  },
  {
    vesselName: "DHIRUBHAI DEEPWATER KG2",
    vesselType: "GAS CARRIER",
    vesselImoNo: 8564421,
    officialNo: 7855,
  },
  {
    vesselName: "DEEPWATER PONTUS",
    vesselType: "BULK CARRIER",
    vesselImoNo: 9875551,
    officialNo: 36521,
  },
];

export const expiryDateList = [
  { desc: "ISM", typeId: "1001", type: "A", expiryDate: "2022-12-31" },
  { desc: "ISPS", typeId: "1002", type: "A", expiryDate: "2023-01-15" },
  { desc: "MLC", typeId: "1003", type: "A", expiryDate: "2023-06-10" },
  { desc: "AIS INSPECTION", typeId: "0", type: "I", expiryDate: "2022-10-09" },
  { desc: "VM INSPECTION", typeId: "1", type: "I", expiryDate: "2023-02-26" },
  {
    desc: "VETTING INSPECTION",
    typeId: "2",
    type: "I",
    expiryDate: "2022-01-20",
  },
];
