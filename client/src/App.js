import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import Timer from './Components/Timer';
import Buttons from './Components/Buttons';
import * as timeServices from './Services/TimeServices';
import isEmpty from 'validator/lib/isEmpty';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const initialValues = {
    finish_time: "",
    username: ""
  }
  const classes = useStyles();
  const [time, setTime] = useState({hour:0, minute:0, second:0, milisecond:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [data, setData] = useState(initialValues);
  // Not started = 0
  // started = 1
  // stopped = 2



  const runTimer = () =>{
    
    if(time.minute === 60){
      time.hour++;
      time.minute=0;
    }

    if(time.second === 60){
      time.minute++;
      time.second=0;
    }

    if(time.milisecond  === 100){
      time.second++;
      time.milisecond=0;
    }

    time.milisecond++;
    return setTime({hour:time.hour, minute:time.minute, second:time.second, milisecond:time.milisecond});

  }

  const startTime = () => {
    runTimer();
    setStatus(1);
    setInterv(setInterval(runTimer,10));
  }

  const stopTime = () =>{
    clearInterval(interv);
    setStatus(2);
  }

  const handleChangeInput = (e) => {
    setData({
      ...data,[e.target.name]: e.target.value
    });
  }

  const finishTime = () =>{

    console.log(`${time.hour}:${time.minute}:${time.second}:${time.milisecond}`);
    if (isEmpty(data.username)) {
      console.log('no se puede registrar un tiempo sin haber ingresado username');
      return;
    }else{
      let dataFinishTinme = `${time.hour}:${time.minute}:${time.second}`;
      let finalData = {
        finish_time : dataFinishTinme,
        username: data.username
      }

      timeServices.createTime(finalData)
        .then((response)=>{
          console.log(response)

        })
        .catch((error)=>{
          console.log('axios finishTime error: ', error);
        })
      
    }
  }


  return (
    // <Grid container className={classes.root} spacing={2}>
    //   <Grid item xs={12}>
    //     <Grid container justifyContent="center" spacing={spacing}>
    //       {[0, 1, 2].map((value) => (
    //         <Grid key={value} item>
    //           <Paper className={classes.paper} />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Grid>
    // </Grid>
    <div>
      <label htmlFor="username">Enter your name:</label>
      <input type="text" name='username' id="txtusername" onChange={handleChangeInput} />
      <br />
      <Timer time={time}/>
      <Buttons status={status} function={{ startTime, stopTime , finishTime}}/>
    </div>
  );
}

export default App;
