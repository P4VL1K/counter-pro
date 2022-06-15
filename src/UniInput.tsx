import {ChangeEvent} from "react";
import './App.css';


type UniInputPropsType = {
    value: number
    onChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void
    type: string
    className: any
}

export function UniInput(props: UniInputPropsType) {
    return (
            <input
                value={props.value}
                onChange={props.onChangeHandle}
                type={props.type}
                className={props.className}/>
)
}