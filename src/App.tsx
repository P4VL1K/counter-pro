import React, {useState} from 'react';
import './App.css';
import {RightCounter} from "./RightCounter";
import {LeftCounter} from "./LeftCounter";

function App() {

    const [value, setValue] = useState<number>(0)
    //setter => (value +1), (currentValue) => currentValue +1
    const [startValue,setStartValue] = useState(0)
    const [maxValue,setMaxValue] = useState(0)

    return (
        <div className="main">
           <LeftCounter value={value} setValue={setValue} startValue={startValue} setStartValue={setStartValue} maxValue={maxValue} setMaxValue={setMaxValue}/>
           <RightCounter value={value} setValue={setValue} startValue={startValue} setStartValue={setStartValue}
                         maxValue={maxValue} setMaxValue={setMaxValue}/>
        </div>
    );
}

export default App;
