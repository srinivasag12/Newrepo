/*!

=========================================================
* Paper Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Collapse } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import company_logo from "assets/img/marshall-islands-registry-logo.jpg";
import company_logo1 from "assets/img/Anglo-Eastern.png";
import avatar from "assets/img/faces/ayo-ogunseinde-2.jpg";
import logo from "assets/img/react-logo.png";
import sidebar_bg from "assets/img/IRI-Yacht-Header-Image.jpg";
var ps;

function Sidebar(props) {
  const [openAvatar, setOpenAvatar] = React.useState(false);
  const [collapseStates, setCollapseStates] = React.useState({});
  const sidebar = React.useRef();
  // this creates the intial state of this component based on the collapse routes
  // that it gets through props.routes
  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.js - route /admin/regular-forms
  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !collapseStates[prop.state];
        return (
          <li
            className={getCollapseInitialState(prop.views) ? "active1" : ""}
            key={key}
          >
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={collapseStates[prop.state]}
              onClick={(e) => {
                e.preventDefault();
                setCollapseStates(st);
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p>
                    {prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                <>
                  <span className="sidebar-mini-icon">{prop.mini}</span>
                  <span className="sidebar-normal">
                    {prop.name}1
                    <b className="caret" />
                  </span>
                </>
              )}
            </a>
            <Collapse isOpen={collapseStates[prop.state]}>
              <ul className="nav">{createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }
      return (
        <li className={activeRoute(prop.layout + prop.path)} key={key}>
          {prop.name != "My Profile" &&
          prop.name != "Notification" &&
          (localStorage.getItem("role") == "company"
            ? prop.name != "Quick Info"
            : true) ? (
            <NavLink to={prop.layout + prop.path} activeClassName="">
              {prop.icon !== undefined ? (
                <>
                  {prop.name != "My Profile" && prop.name != "Notification" ? (
                    <>
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  <div style={{ marginLeft: "10px" }}>
                    {/* <span className="sidebar-mini-icon">{prop.mini}</span> */}
                    <i className={prop.mini} />
                    <span className="sidebar-normal">{prop.name}</span>
                  </div>
                </>
              )}
            </NavLink>
          ) : (
            <></>
          )}
        </li>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    /*  console.log("activeRoute");
    console.log("routeName", routeName);
    console.log("props", props);

    console.log(
      "props.location.pathname.indexOf(routeName)",
      props.location.pathname.indexOf(routeName)
    ); */

    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      // we need to destroy the false scrollbar when we navigate
      // to a page that doesn't have this component rendered
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  React.useEffect(() => {
    setCollapseStates(getCollapseStates(props.routes));
  }, []);
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a href="#" className="simple-text logo-normal">
          <div>
            {localStorage.getItem("role") == "admin" ? (
              <img src={company_logo} alt="react-logo" />
            ) : (
              <img
                src={company_logo1}
                alt="react-logo"
                style={{ background: "white" }}
              />
            )}
          </div>
        </a>

        <a
          href="#"
          className="simple-text logo-normal"
          style={{
            marginLeft: "40px",
          }}
        >
          OWNER PORTAL
        </a>
        {/* <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          Creative Tim
        </a> */}
      </div>

      <div
        className="sidebar-wrapper"
        ref={sidebar}
        //  ref="sidebar"
        style={{
          backgroundImage: `url(${sidebar_bg})`,
          backgroundSize: "cover",
          height: "95vh",
          backgroundPosition: "bottom",
        }}
      >
        <Nav>{createLinks(props.routes)}</Nav>
      </div>
    </div>
  );
}

export default Sidebar;
