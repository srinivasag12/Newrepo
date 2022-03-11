import React from "react";

function FindingsPopovers(props) {
  return (
    <div>
      <span className="circle text-success"></span> VESSEL NAME :{" "}
      <span className="overviewValues">EASTERLY BEECH GALAXY</span>
      <br />
      <span className="circle text-info"></span> CODE :{" "}
      <span className="overviewValues">123</span>
      <br />
      <span className="circle text-warning"></span> NEXT ACTION :{" "}
      <span className="overviewValues">VERIFY/CLOSE</span>
      <br />
      <span className="circle text-warning"></span> DUE DATE :{" "}
      <span className="overviewValues">19-Aug-2021</span>
      <br />
    </div>

  );
}

export default FindingsPopovers;
