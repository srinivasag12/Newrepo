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
import Buttons from "views/components/Buttons.js";
// import Calendar from "views/Calendar.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import ExtendedForms from "views/forms/ExtendedForms.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import GridSystem from "views/components/GridSystem.js";
import Icons from "views/components/Icons.js";
import LockScreen from "views/pages/LockScreen.js";
// import Login from "views/pages/Login.js";
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

import Vessel from "views/pages/Vessel/Vessel";
import VesselDetails from "views/pages/VesselDetails/VesselDetails";
import VesselStatement from "views/pages/VesselStatement/VesselStatement";
import BookAnAudit from "views/pages/SchedulingAndAuditbooking/BookAnAudit";
import Calendar from "views/pages/SchedulingAndAuditbooking/Calendar";
import MyProfile from "views/pages/MyProfile/MyProfile";
import UserMaintenance from "views/pages/user_maintenance/UserMaintenance";
import EventCalendar from "views/pages/SchedulingAndAuditbooking/EventCalendar";
import RequestAuditInspection from "views/pages/SchedulingAndAuditbooking/RequestAuditInspection";

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
    name: "Vessel info",
    icon: "fa fa-ship",
    state: "pagesCollapse",
    views: [
      {
        path: "/vessel",
        name: "Vessel",
        mini: "fa fa-ship",
        component: Vessel,
        layout: "/admin",
      },
      {
        path: "/VesselDetails",
        name: "VesselDetails",
        mini: "fa fa-info-circle",
        component: VesselDetails,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/VesselStatement",
    name: "VesselStatement",
    icon: "fa fa-file-text-o",
    component: VesselStatement,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Scheduling",
    icon: "nc-icon nc-calendar-60",
    state: "mapsCollapse",
    views: [
      {
        path: "/calendar",
        name: "Schedule Calendar",
        mini: "fa fa-calendar",
        // component: Calendar,
        component: EventCalendar,
        layout: "/admin",
      },
      {
        path: "/requestAuditOrInspection",
        name: "Request Audit/Inspection",
        mini: "fa fa-calendar-check-o",
        // component: BookAnAudit,
        component: RequestAuditInspection,
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
    path: "/profile",
    name: "My Profile",
    icon: "nc-icon nc-bank",
    component: MyProfile,
    layout: "/admin",
  },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "nc-icon nc-calendar-60",
  //   component: Calendar,
  //   layout: "/admin"
  // }
];
// {
//   path: "/register",
//   name: "Register",
//   mini: "R",
//   component: Register,
//   layout: "/auth"
// },
// {
//   path: "/lock-screen",
//   name: "LockScreen",
//   mini: "LS",
//   component: LockScreen,
//   layout: "/auth"
// },
// {
//   path: "/user-profile",
//   name: "UserProfile",
//   mini: "UP",
//   component: UserProfile,
//   layout: "/admin"
// }
// {
//   collapse: true,
//   name: "Components",
//   icon: "nc-icon nc-layout-11",
//   state: "componentsCollapse",
//   views: [
//     {
//       path: "/buttons",
//       name: "Buttons",
//       mini: "B",
//       component: Buttons,
//       layout: "/admin"
//     },
//     {
//       path: "/grid-system",
//       name: "Grid System",
//       mini: "GS",
//       component: GridSystem,
//       layout: "/admin"
//     },
//     {
//       path: "/panels",
//       name: "Panels",
//       mini: "P",
//       component: Panels,
//       layout: "/admin"
//     },
//     {
//       path: "/sweet-alert",
//       name: "Sweet Alert",
//       mini: "SA",
//       component: SweetAlert,
//       layout: "/admin"
//     },
//     {
//       path: "/notifications",
//       name: "Notifications",
//       mini: "N",
//       component: Notifications,
//       layout: "/admin"
//     },
//     {
//       path: "/icons",
//       name: "Icons",
//       mini: "I",
//       component: Icons,
//       layout: "/admin"
//     },
//     {
//       path: "/typography",
//       name: "Typography",
//       mini: "T",
//       component: Typography,
//       layout: "/admin"
//     }
//   ]
// },
// {
//   collapse: true,
//   name: "Forms",
//   icon: "nc-icon nc-ruler-pencil",
//   state: "formsCollapse",
//   views: [
//     {
//       path: "/regular-forms",
//       name: "Regular Forms",
//       mini: "RF",
//       component: RegularForms,
//       layout: "/admin"
//     },
//     {
//       path: "/extended-forms",
//       name: "Extended Forms",
//       mini: "EF",
//       component: ExtendedForms,
//       layout: "/admin"
//     },
//     {
//       path: "/validation-forms",
//       name: "Validation Forms",
//       mini: "VF",
//       component: ValidationForms,
//       layout: "/admin"
//     },
//     {
//       path: "/wizard",
//       name: "Wizard",
//       mini: "W",
//       component: Wizard,
//       layout: "/admin"
//     }
//   ]
// },
// {
//   collapse: true,
//   name: "Tables",
//   icon: "nc-icon nc-single-copy-04",
//   state: "tablesCollapse",
//   views: [
//     {
//       path: "/regular-tables",
//       name: "Regular Tables",
//       mini: "RT",
//       component: RegularTables,
//       layout: "/admin"
//     },
//     {
//       path: "/extended-tables",
//       name: "Extended Tables",
//       mini: "ET",
//       component: ExtendedTables,
//       layout: "/admin"
//     },
//     {
//       path: "/react-tables",
//       name: "React Tables",
//       mini: "RT",
//       component: ReactTables,
//       layout: "/admin"
//     }
//   ]
// },

export default routes;
