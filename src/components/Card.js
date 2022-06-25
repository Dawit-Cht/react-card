import React from "react";
import CardBody from "./CardBody";
import CardExtention from "./CardExtention";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import '../styles/card.css'

export default function Card({data}) {

  return (
    <div className="card">
        <CardHeader />
        <hr/>
        <CardBody />
        <hr />
        <CardExtention />
        <hr />
        <CardFooter />
    </div>
  )
  /*return (
    <div> 
      {data?data.map((info) => {
        <div>
          <CardHeader name={info.name} faculty={info.faculty}/>
          <CardBody />
          <CardExtention />
          <CardFooter />
        </div>
      }):<div>no data</div>}
    </div>
  );*/
}
