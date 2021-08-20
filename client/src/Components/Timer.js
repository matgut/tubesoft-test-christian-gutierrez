import React from 'react'

const Timer = (props) => {
    return (
        <div>
            <span>{props.time.hour}</span>
            <span>:</span>
            <span>{props.time.minute}</span>
            <span>:</span>
            <span>{props.time.second}</span>
            <span>:</span>
            <span>{props.time.milisecond}</span>
            <br />
        </div>
    )
}

export default Timer
