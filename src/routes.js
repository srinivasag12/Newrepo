/*!

=========================================================
* Paper Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Buttons from "views/components/Buttons.js";
import Calendar from "views/Calendar.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import VesselSpecification from "views/VesselSpecification.js";
import BookAnAudit from "views/BookAnAudit.js";
import Findings from "views/Findings.js";
import History from "views/scheduling/History.js";

import ExtendedForms from "views/forms/ExtendedForms.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import GridSystem from "views/components/GridSystem.js";
import Icons from "views/components/Icons.js";
import LockScreen from "views/pages/LockScreen.js";
import Login from "views/pages/Login.js";
import Notifications from "views/components/Notifications.js";
import Panels from "views/components/Panels.js";
import ReactTables from "views/tables/ReactTables.js";
import Register from "views/pages/Register.js";
import RegularForms from "views/forms/RegularForms.js";
import RegularTables from "views/tables/RegularTables.js";
import SweetAlert from "views/components/SweetAlert.js";
import Timeline from "views/pages/Timeline.js";
import Typography from "views/components/Typography.js";
import UserProfile from "views/pages/UserProfile.js";
import ValidationForms from "views/forms/ValidationForms.js";
import VectorMap from "views/maps/VectorMap.js";
import Widgets from "views/Widgets.js";
import Wizard from "views/forms/Wizard.js";

import VesselOverview from "views/vessel_info/VesselOverview";

import Owner from "views/vessel_info/Owner";
import Surveys from "views/vessel_info/Surveys";

import Finding from "views/vessel_info/Findings";
import Audit from "views/vessel_info/Audit";
import Certificates from "views/vessel_info/Certificates";
import Company from "views/company/Company";
import Chart from "views/chart/Chart";
import MyProfile from "views/MyProfile";
import UserMaintenance from "views/user_maintenance/UserMaintenance";
import QuickInfo from "views/quick_info/QuickInfo";
import Notification from "views/Notification/Notification";
import Vessel from "views/vessel_info/Vessel";
import VesselDetails from "views/vessel_info/VesselDetails";
import VesselStatement from "views/vessel_info/VesselStatement";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },

  {
    collapse: true,
    name: "Company",
    icon: "nc-icon nc-globe",
    state: "companyCollapse",
    views: [
      {
        path: "/company",
        name: "Company Details",
        mini: "fa fa-globe",
        component: Company,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Vessel Info",
    icon: "fa fa-ship",
    state: "vesselCollapse",
    views: [
      {
        path: "/vessel",
        name: "Vessel",
        mini: "fa fa-ship",
        component: Vessel,
        layout: "/admin",
      },

      {
        path: "/details",
        name: "Vessel Details",
        mini: "fa fa-info-circle",
        component: VesselDetails,
        layout: "/admin",
      },

      {
        path: "/audit",
        name: "Audit / Review",
        mini: "fa fa-file",
        component: Audit,
        layout: "/admin",
      },

      {
        path: "/finding",
        name: "Finding",
        mini: "fa fa-check-square-o",
        component: Finding,
        layout: "/admin",
      },

      {
        path: "/certificates",
        name: "Certificates",
        mini: "fa fa-file-text-o",
        component: Certificates,
        layout: "/admin",
      },
    ],
  },
  
  {
    path: "/statement",
    name: "Vessel Statement",
    icon: "fa fa-file-text-o",
    component: VesselStatement,
    layout: "/admin",
  },

  {
    path: "/chart",
    name: "Chart",
    icon: "nc-icon nc-chart-pie-36",
    component: Chart,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Scheduling",
    icon: "nc-icon nc-calendar-60",
    state: "schedulingCollapse",
    views: [
      {
        path: "/book-an-audit",
        name: "Book An Audit",
        mini: "fa fa-calendar-check-o",
        component: BookAnAudit,
        layout: "/admin",
      },
      {
        path: "/calendar",
        name: "Schedule Calendar",
        mini: "fa fa-calendar",
        component: Calendar,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/userMaintenance",
    name: "User Maintenance",
    icon: "nc-icon nc-circle-10",
    component: UserMaintenance,
    layout: "/admin",
  },

  {
    path: "/quickInfo",
    name: "Quick Info",
    icon: "nc-icon nc-alert-circle-i",
    component: QuickInfo,
    layout: "/admin",
  },

  {
    path: "/profile",
    name: "My Profile",
    icon: "nc-icon nc-bank",
    component: MyProfile,
    layout: "/admin",
  },

  {
    path: "/notification",
    name: "Notification",
    icon: "nc-icon nc-bank",
    component: Notification,
    layout: "/admin",
  },
];

export default routes;

/* {
    collapse: true,
    name: "Pages",
    icon: "nc-icon nc-book-bookmark",
    state: "pagesCollapse",
    views: [
      {
        path: "/timeline",
        name: "Timeline",
        mini: "T",
        component: Timeline,
        layout: "/admin",
      },
      {
        path: "/login",
        name: "Login",
        mini: "L",
        component: Login,
        layout: "/auth",
      },
      {
        path: "/register",
        name: "Register",
        mini: "R",
        component: Register,
        layout: "/auth",
      },
      {
        path: "/lock-screen",
        name: "LockScreen",
        mini: "LS",
        component: LockScreen,
        layout: "/auth",
      },
      {
        path: "/user-profile",
        name: "UserProfile",
        mini: "UP",
        component: UserProfile,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Components",
    icon: "nc-icon nc-layout-11",
    state: "componentsCollapse",
    views: [
      {
        path: "/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons,
        layout: "/admin",
      },
      {
        path: "/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem,
        layout: "/admin",
      },
      {
        path: "/panels",
        name: "Panels",
        mini: "P",
        component: Panels,
        layout: "/admin",
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        mini: "I",
        component: Icons,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        mini: "T",
        component: Typography,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Forms",
    icon: "nc-icon nc-ruler-pencil",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms,
        layout: "/admin",
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms,
        layout: "/admin",
      },
      {
        path: "/wizard",
        name: "Wizard",
        mini: "W",
        component: Wizard,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    icon: "nc-icon nc-single-copy-04",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables,
        layout: "/admin",
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables,
        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps,
        layout: "/admin",
      },
      {
        path: "/full-screen-map",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap,
        layout: "/admin",
      },
      {
        path: "/vector-map",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "nc-icon nc-box",
    component: Widgets,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "nc-icon nc-chart-bar-32",
    component: Charts,
    layout: "/admin",
  }, */
