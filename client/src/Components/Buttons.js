import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import DoneIcon from '@material-ui/icons/Done';
import PauseIcon from '@material-ui/icons/Pause';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
          minWidth: 32,
          paddingLeft: 8,
          paddingRight: 8,
          "& .MuiButton-startIcon": {
            margin: 0
          }
        }
      },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
          },
    }
  }));

const Buttons = (props) => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <ButtonGroup size="large" aria-label="large outlined button group">
                {
                    (props.status === 2)?
                    <Button 
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<PauseIcon style={{fontSize: 100 }}/>}
                        onClick={() => props.function.startTime()}
                    /> : 
                    <Button 
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<PlayArrowIcon style={{fontSize: 100 }}/>}
                        onClick={() => props.function.startTime()}
                    />
                }
                <Button 
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<StopIcon style={{fontSize: 100 }}/>}
                    onClick={() => props.function.stopTime()}
                />
                <Button 
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<DoneIcon style={{fontSize: 100 }}/>}
                    onClick={() => props.function.finishTime()}
                />
            </ButtonGroup>
            
            <button onClick={() => props.function.startTime()}>start</button>
            <button onClick={() => props.function.stopTime()}>stop</button>
            <button onClick={() => props.function.finishTime()}>finish</button>
        </Grid>
    )
}

export default Buttons
