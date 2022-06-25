import React from "react";
import Bedge from "../img/bedge.png";
import Edit from "../img/edit.png";
import "../styles/cardBody.css";

export default function CardBody(props) {

  return (
    <div className="card-body">
      <div className="open-round">
        <p className="open-round-text">รอบที่เปิด</p>
        <div className="open-seat">
          {props.seats.map( (seat) => {
            return seat>-1?
            <div className="seat" >{seat}</div>:
            <div className="no-seat" >0</div>
          })}
        </div>
      </div>
      <div className="body-header">
        <p className="body-header-text">รอบที่ 4 : Admission</p>
        <button className="btn-edit">
          แก้ไขคะแนน <img src={Edit} alt="edit icon"></img>
        </button>
      </div>
      <div className="score">
        <img src={Bedge} className="bedge" alt="bedge"></img>
        <div>
          <p className="score-text">คะแนนของคุณคือ</p>
          <p className="score-number">{props.score===null?0:props.score.id}</p>
        </div>
      </div>
      <div className="stat-score">
        <div className="score-min">
          <p className="stat-number">{props.score===null?0:props.score.min}</p>
          <p className="score-text">คะแนนต่ำสุด 60</p>
        </div>
        <div className="vertical-line"></div>
        <div className="score-avg">
          <p className="stat-number">{props.score===null?0:props.score.avg}</p>
          <p className="score-text">คะแนนเฉลี่ยน 60</p>
        </div>
        <div className="vertical-line"></div>
        <div>
          <p className="stat-number">{props.score===null?0:props.score.max}</p>
          <p className="score-text">คะแนนสูงสุด 60</p>     
        </div>
      </div>
    </div>
  );
}
