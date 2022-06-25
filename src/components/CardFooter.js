import React from 'react'
import Share from '../img/share.png'
import User from '../img/user.png'
import '../styles/cardFooter.css'

export default function CardFooter() {
  return (
    <div className="card-footer">
      <div className="interest-count">
        <img src={User} className="user" alt='interest-user'></img>
        <p className="interest-text"> 10 คนที่สนใจ</p>
      </div>
      <img src={Share} className="share" alt='share'></img>
    </div>
  )
}
