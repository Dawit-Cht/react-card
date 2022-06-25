import React from 'react'
import Bedge from '../img/bedge.png'
import Edit from '../img/edit.png'
import '../styles/cardBody.css'

export default function CardBody() {
  return (
    <div className="card-body">
      <div className="open-round"></div>
      <div className="body-header">
        <p className='body-header-text'>รอบที่ 4 : Admission</p>
        <button className="btn-edit">แก้ไขคะแนน <img src={Edit} alt='edit icon'></img></button>
      </div>
      <div className="score">
        <img src={Bedge} className="bedge" alt='bedge'></img>
        <div>
          <p className='score-text'>คะแนนของคุณคือ</p>
          <p className='score-number'>23,453</p>
        </div>
      </div>
      <div className="stat-score"></div>
    </div>
  )
}
