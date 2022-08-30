import React from "react";
import './App.css';
import {UniButton} from "./UniButton";


type RightCounterPropsType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    message: string
    setMaxValue: (maxValue: number) => void
    isSetting: boolean
    disBtn: boolean
}

export function RightCounter(props: RightCounterPropsType) {

    const onClickIncHandler = () => {
        props.setValue(props.value + 1)
    }

    const onClickResetHandler = () => {
        props.setValue(props.startValue)
    }

    const numberClassName = (props.value !== props.maxValue || props.startValue < 0 || props.startValue >= props.maxValue) ? 'number' : 'numberLast'
    const stringClassName = (props.startValue < 0 || props.startValue >= props.maxValue) ? 'errorString' : 'stringStyle'
    const checkTypeOf = !props.isSetting ? stringClassName : numberClassName

    return (
        <div className='rightCounter'>
            <div className='quantity'>
                <b className={checkTypeOf}>{props.isSetting ? props.value : props.message}</b>
            </div>
            <div className='counterBTNS'>
                <UniButton
                    name={"inc"}
                    onCLickHandle={onClickIncHandler}
                    disabled={props.disBtn || props.value === props.maxValue}
                    className={'incRightBTN'}/>
                <UniButton
                    name={'reset'}
                    onCLickHandle={onClickResetHandler}
                    disabled={props.disBtn || props.value === props.startValue}
                    className={'resetRightBTN'}/>
            </div>
        </div>
    )
}