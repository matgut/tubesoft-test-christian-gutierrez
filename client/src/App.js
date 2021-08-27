import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import Timer from './Components/Timer';
import Buttons from './Components/Buttons';
import * as timeServices from './Services/TimeServices';
import isEmpty from 'validator/lib/isEmpty';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({content: '', typeAlert: ''});
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
      setAlert(true);
      setAlertContent({
        content: 'Unable to register for some time without having entered username',
        typeAlert: 'error'
      });
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
          if(response.code === 0){
            setAlert(true);
            setAlertContent({
              content: response.message,
              typeAlert: 'success'
            });
          }
        })
        .catch((error)=>{
          console.log('axios finishTime error: ', error);
        })
      
    }
  }


  return (
    <Grid container justifyContent = "center" className={classes.root}>
      <FormControl>
        <InputLabel htmlFor="my-input">Enter your name:</InputLabel>
        <Input id="username" name="username" onChange={handleChangeInput} />
      </FormControl>
      <Timer time={time}/>
      <Buttons status={status} functionPlay={startTime} functionStop={stopTime} functionFinish={finishTime}/>
      {alert ? <Alert variant="filled" severity={alertContent.typeAlert}  onClose={() => {setAlert(false)}}>{alertContent.content}</Alert> : <></> }
    </Grid>
    
  );
}

export default App;
