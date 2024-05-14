import "./folderItem.css";
import React from "react";

function template(props) {
  return (
    <div className="folder-item">
      <div className="name">{props.fileName}</div>
      <div className="date">{props.data}</div>
    </div>
  );
}

export default template;
