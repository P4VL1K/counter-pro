import React, {ChangeEvent} from "react";
import './App.css';


type LeftCounterPropsType = {
    value: number
    setValue: any //(value: number | string) =>void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export function LeftCounter(props: LeftCounterPropsType) {


    const onChangeStartInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        let setterStartValue = Number(e.currentTarget.value)
        props.setStartValue(setterStartValue)
        let conditionStart = (setterStartValue < 0 || setterStartValue >= props.maxValue) ? 'incorrect value' : 'enter values and press "set"'
        props.setValue(conditionStart)
    }

    const setBTNClickHandler = () => {
        props.setValue(props.startValue)
    }

    const onChangeMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        let setterMaxValue = Number(e.currentTarget.value)
            props.setMaxValue(setterMaxValue)
         let conditionMax = (setterMaxValue <= props.startValue) ? 'incorrect value' : 'enter values and press "set"'
        props.setValue(conditionMax)
    }

    return (
        <div className='leftCounter'>
            <div className='tuner'>
                <div>
                    <b className='maxValueText'>max value:</b>
                    <input
                        value={props.maxValue}
                        type="number"
                        className={(props.startValue >= props.maxValue) ? 'errorStartValueInput' : 'maxValueInput' }
                    onChange={onChangeMaxInputValue}/>
                </div>
                <div>
                    <b className='startValueText'>start value:</b>
                    <input
                        value={props.startValue}
                        onChange={onChangeStartInputValue}
                        type="number"
                        className={(props.startValue < 0) ? 'errorStartValueInput' : ((props.startValue >= props.maxValue) ? 'errorStartValueInput' : 'startValueInput')}/>
                </div>
            </div>
            <div className='setBTN'>
                <button
                    className='leftBTN'
                    onClick={setBTNClickHandler}
                disabled={props.startValue <= 0 || props.startValue >= props.maxValue}>set
                </button>
            </div>
        </div>
    )
}