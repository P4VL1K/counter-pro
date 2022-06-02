import React, {Dispatch, SetStateAction} from "react";
import './App.css';


type RightCounterPropsType = {
    value: number
    setValue: Dispatch<SetStateAction<number>> //(value: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export function RightCounter(props: RightCounterPropsType) {


    const onClickIncHandler = () => {
        props.setValue((currentValue) => currentValue + 1)
    }

    const onClickResetHandler = () => {
        props.setValue(props.startValue)
    }

    const numberClassName = (props.value !== props.maxValue) ? 'number' : 'numberLast'
    const stringClassName = (props.startValue < 0 || props.startValue >= props.maxValue) ? 'errorString' : 'stringStyle'
    const checkTypeOf = typeof props.value === 'string' ? stringClassName : numberClassName

    return (
        <div className='rightCounter'>
            <div className='quantity'>
                <b className={checkTypeOf}>{props.value}</b>
            </div>
            <div className='counterBTNS'>
                <button
                    className='incRightBTN'
                    onClick={onClickIncHandler}
                    disabled={props.value === props.maxValue}
                >inc
                </button>
                <button
                    className='resetRightBTN'
                    onClick={onClickResetHandler}
                    disabled={props.value === props.startValue}
                >reset
                </button>
            </div>
        </div>
    )
}