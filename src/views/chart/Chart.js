import React from "react";

function Chart() {
  return (
    <div className="content">
      <iframe
        src="https://app.powerbi.com/view?r=eyJrIjoiM2U2MjdjMWMtNTg1Ny00NDY1LTg0YzUtZmUyZmZkYWE4OTI2IiwidCI6IjhmOTZiMTExLTJlNmEtNDM2OS1hMTVhLWVhMzM0NTZkYTJiMyJ9"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
}

export default Chart;
