import React from 'react';
import './App.css';
import {RightCounter} from "./RightCounter";
import {LeftCounter} from "./LeftCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {disableBtnAC, setMaxValueAC, setMessageAC, setStartValueAC, settingAC, setValueAC} from "./counter-reducer";

function App() {

    let value = useSelector<AppRootStateType, number>(state => state.counter.value)
    let startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    let message = useSelector<AppRootStateType, string>(state => state.counter.message)
    let isSetting = useSelector<AppRootStateType, boolean>(state => state.counter.isSetting)
    let disBtn = useSelector<AppRootStateType, boolean>(state => state.counter.disBtn)

    const dispatch = useDispatch()

   // const [value, setValue] = useState<number>(0)
    //setter => (value +1), (currentValue) => currentValue +1
    //const [startValue,setStartValue] = useState(0)
   // const [maxValue,setMaxValue] = useState(0)

    const setValue = (value: number) => {
        dispatch(setValueAC(value))
    }
    const setStartValue = (startValue: number) => {
        dispatch(setStartValueAC(startValue))
    }
    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }
    const setMessage = (message: string) => {
        dispatch(setMessageAC(message))
    }
    const setting = (meaning: boolean) => {
        dispatch(settingAC(meaning))
    }
    const disable = (dis: boolean) => {
        dispatch(disableBtnAC(dis))
    }

    return (
        <div className="main">
           <LeftCounter
               value={value}
               setValue={setValue}
               startValue={startValue}
               setStartValue={setStartValue}
               maxValue={maxValue}
               setMaxValue={setMaxValue}
               message={message}
               setMessage={setMessage}
               setting={setting}
               disable={disable}
           />
           <RightCounter
               value={value}
               setValue={setValue}
               startValue={startValue}
               setStartValue={setStartValue}
               maxValue={maxValue}
               message={message}
               setMaxValue={setMaxValue}
               isSetting={isSetting}
               disBtn={disBtn}
           />
        </div>
    );
}

export default App;
