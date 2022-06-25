import React from 'react'
import More from '../img/more.png'
import '../styles/cardExtention.css'

export default function CardExtention() {
  return (
    <div className="card-extention">
      <img src={More} className="more" alt='more detail'></img>
      <p className="extention-text">ดูสัดส่วนคะแนน</p>
    </div>
  )
}
