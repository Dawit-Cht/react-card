import React from "react";
import Like from "../img/like.png";
import Engi from "../img/engi.png";
import "../styles/cardHeader.css";

export default function CardHeader({ name }, { faculty }) {
  return (
    <div className="card-header">
        <div className="faculty">
          <img src={Engi} alt="logo" className="faculty-logo"></img>
          <div className="faculty-text">
            <p className="faculty-name">คณะวิศวกรรมศาสตร์</p>
            <p className="faculty-field">สาขาวิชาวิศวกรรมศาสตร์</p>
            <p className="university">จุฬาลงกรณ์มหาวิทยาลัย</p>
          </div>
        </div>
        <img src={Like} alt="like" className="like"></img>
    </div>
  );
}
