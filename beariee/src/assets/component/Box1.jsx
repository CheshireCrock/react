import React from "react";

function Box({ text, channel, desc, img }) {
  return (
    <div>
      <h1>{text}</h1>
      <h2>{channel}</h2>
      <h3>{desc}</h3>
      <img style={{width: 300, height: 400} } src={img} alt=""></img>
    </div>
  );
}

export default Box;
