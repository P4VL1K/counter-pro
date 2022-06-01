import React from "react";
import './App.css';


export function LeftCounter () {
    return (
        <div className='leftCounter'>
            <div className='tuner'>
                <div>
                    <b>max value:</b><input value={0} type="number"/>
                </div>
                <div>
                    <b>start value:</b><input value={0} type="number"/>
                </div>
            </div>
            <div className='setBTN'>
                <button className='leftBTN'>set</button>
            </div>
        </div>
    )
}