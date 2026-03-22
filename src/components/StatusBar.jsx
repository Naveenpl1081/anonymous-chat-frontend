import React from "react";

function StatusBar({ status }) {
  return (
    <div className="status">
      {status === "searching" && "Searching..."}
      {status === "connected" && "Connected"}
      {status === "idle" && "Click Start"}
    </div>
  );
}

export default StatusBar;