import React, {ChangeEvent, useEffect} from "react";
import './App.css';
import {UniButton} from "./UniButton";
import {UniInput} from "./UniInput";


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

    useEffect(() => {
        let valueStartAsString = localStorage.getItem('counterStartValue')
        if (valueStartAsString) {
            let newStartValue = JSON.parse(valueStartAsString)
            props.setStartValue(newStartValue)
        }
        let valueMaxAsString = localStorage.getItem('counterMaxValue')
        if (valueMaxAsString) {
            let newMaxValue = JSON.parse(valueMaxAsString)
            props.setMaxValue(newMaxValue)
        }

    }, [])
    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(props.startValue))
        localStorage.setItem('counterMaxValue', JSON.stringify(props.maxValue))
    })


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
                    <UniInput
                        value={props.maxValue}
                        onChangeHandle={onChangeMaxInputValue}
                        type={"number"}
                        className={(props.startValue >= props.maxValue) ? 'errorStartValueInput' : 'maxValueInput'}/>
                    {/*<input*/}
                    {/*    value={props.maxValue}*/}
                    {/*    type="number"*/}
                    {/*    className={(props.startValue >= props.maxValue) ? 'errorStartValueInput' : 'maxValueInput'}*/}
                    {/*    onChange={onChangeMaxInputValue}/>*/}
                </div>
                <div>
                    <b className='startValueText'>start value:</b>
                    <UniInput
                        value={props.startValue}
                        onChangeHandle={onChangeStartInputValue}
                        type={'number'}
                        className={(props.startValue < 0) ? 'errorStartValueInput' : ((props.startValue >= props.maxValue) ? 'errorStartValueInput' : 'startValueInput')}/>
                    {/*<input*/}
                    {/*    value={props.startValue}*/}
                    {/*    onChange={onChangeStartInputValue}*/}
                    {/*    type="number"*/}
                    {/*    className={(props.startValue < 0) ? 'errorStartValueInput' : ((props.startValue >= props.maxValue) ? 'errorStartValueInput' : 'startValueInput')}/>*/}
                </div>
            </div>
            <div className='setBTN'>
                <UniButton
                    name={'set'}
                    onCLickHandle={setBTNClickHandler}
                    disabled={props.startValue <= 0 || props.startValue >= props.maxValue}
                    className={'leftBTN'}/>
            </div>
        </div>
    )
}