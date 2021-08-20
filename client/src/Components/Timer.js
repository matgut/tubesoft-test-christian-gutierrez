import React from "react";

const Timer = (props) => {
  return (
    <div>
      <span>{(props.time.hour >= 10) ? props.time.hour : "0"+ props.time.hour}</span>
      <span>:</span>
      <span>{(props.time.minute >= 10) ? props.time.minute : "0"+props.time.minute}</span>
      <span>:</span>
      <span>{(props.time.second >= 10) ? props.time.second : "0"+props.time.second}</span>
      <span>:</span>
      <span>{(props.time.milisecond >= 10) ? props.time.milisecond : "0"+props.time.milisecond}</span>
      <br />
    </div>
  );
};

export default Timer;
