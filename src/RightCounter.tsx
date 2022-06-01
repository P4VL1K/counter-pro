import React from "react";
import './App.css';


export function RightCounter () {
    return (
        <div className='rightCounter'>
            <div className='quantity'>
                <b>0</b>
            </div>
            <div className='counterBTNS'>
                <button className='incRightBTN'>inc</button>
                <button className='resetRightBTN'>reset</button>
            </div>
        </div>
    )
}