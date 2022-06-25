import React from "react";
import Like from "../img/like.png";
import "../styles/cardHeader.css";

export default function CardHeader(props ) {
  return (
    <div className="card-header">
      <div className="faculty">
        <img src={props.logo} alt="faculty-logo" className="faculty-logo"></img>
        <div className="faculty-text">
          <p className="faculty-name">{props.faculty.name}</p>
          <p className="faculty-field">{props.name}</p>
          <p className="university">{props.faculty.university.name}</p>
        </div>
      </div>
      <img src={Like} alt="like" className="like"></img>
    </div>
  );
}
