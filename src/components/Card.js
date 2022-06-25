import React from "react";
import CardBody from "./CardBody";
import CardExtention from "./CardExtention";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import "../styles/card.css";

export default function Card({ data }) {
  console.log(data)
  return (
    <div className="card-display">
      {data
        ? data.map((info) => (
            <div className="card" key={info.id}>
              <CardHeader name={info.name} logo={info.logo} faculty={info.faculty} />
              <hr />
              <CardBody seats={info.roundSeats} score={info.score}/>
              <hr />
              <CardExtention />
              <hr />
              <CardFooter interested={info.likes}/>
            </div>
          ))
        : null}
    </div>
  );
}
