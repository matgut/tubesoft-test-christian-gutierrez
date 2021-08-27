import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  span: {
      fontSize: 50,
      fontFamily: 'roboto'

    },
}));

const Timer = (props) => {
  const classes = useStyles();
  return (
    <div>
      <span className={classes.span}>{(props.time.hour >= 10) ? props.time.hour : "0"+ props.time.hour}</span>
      <span className={classes.span}>:</span>
      <span className={classes.span}>{(props.time.minute >= 10) ? props.time.minute : "0"+props.time.minute}</span>
      <span className={classes.span}>:</span>
      <span className={classes.span}>{(props.time.second >= 10) ? props.time.second : "0"+props.time.second}</span>
      <span className={classes.span}>:</span>
      <span className={classes.span}>{(props.time.milisecond >= 10) ? props.time.milisecond : "0"+props.time.milisecond}</span>
      <br />
    </div>
  );
};

export default Timer;
