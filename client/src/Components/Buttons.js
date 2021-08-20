import React from 'react'

const Buttons = (props) => {
    return (
        <div>
            <button onClick={() => props.function.startTime()}>start</button>
            <button onClick={() => props.function.stopTime()}>stop</button>
            <button onClick={() => props.function.finishTime()}>finish</button>
        </div>
    )
}

export default Buttons
