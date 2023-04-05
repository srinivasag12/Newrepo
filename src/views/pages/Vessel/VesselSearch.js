import React from "react";
import "./VesselSearch.css";
import { Input } from "antd";
import Search from "@mui/icons-material/Search";

function VesselSearch(props) {
  const searchChangeHandler = (event) => {
    console.log("SEARCH EVENT HANDLER ::", event.target.value);
    console.log("VESSEL SEARCH PROPS", props);
    props.onSearchData(event.target.value);
  };
  return (
    <div>
        {localStorage.getItem("role") == "admin" ?
      <div className="searchbycompany" align="center">
        <select style={{borderRadius:"15px"}}
          className="form-control"
          placeholder="Search anything"
          onChange={searchChangeHandler}
        >
          <option>ALL</option>
          <option>ANGLO - EASTERN</option>
          <option>TRANSOCEAN</option>

        </select>
      </div>:""}

      <div className="search-box">
        <input
          type="search"
          placeholder="Search anything"
          className="search-input"
          onChange={searchChangeHandler}
        />
        {/* <Input placeholder="Basic usage" className="search-input" /> */}
        <a href="#" className="search-btn">
          {/* <i className="fas fa-search"></i> */}

          <Search />
        </a>
      </div>
    </div>
  );
}

export default VesselSearch;
