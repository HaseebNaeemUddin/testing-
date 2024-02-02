import React from "react";

export const Details_Component = (props) => {
  return (
    <div>
      <img src={props.image_url} />
      <h1>Title: {props.title}</h1>
      <h1>Price: {props.price}</h1>
      <p>{props.description}</p>
    </div>
  );
};