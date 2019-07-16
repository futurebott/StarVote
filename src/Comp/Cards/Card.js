import React from "react";
const Card = props => {
  console.log(props.desc);
  return (
    <div>
      <p style={{ backgroundColor: "Red", width: "200px" }}>{props.Name}</p>
      <p>{props.Description}</p>
    </div>
  );
};

export default Card;
