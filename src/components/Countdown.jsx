import React from 'react'

export default function Countdown() {

    return (
        <div className='card countdown-card'>
            <h1 className="item-header">Day {1}</h1>
            <div className="today-container">
                <div>
                    <p>Time Remaining</p>
                    <h3>13H 35M 22S</h3>
                </div>

                <div>
                    <p>Words for Today</p>
                    <h3>16</h3>
                </div>
            </div>

            <button className="start-task" >
                <h6>Start</h6>
            </button>
        </div>
    )
}