import './App.css';


type UniButtonPropsType = {
    name: string
    onCLickHandle: () => void
    disabled: boolean
    className: string
}

export function UniButton(props: UniButtonPropsType) {
    return (
        <button className={props.className} disabled={props.disabled} onClick={props.onCLickHandle}>
            {props.name}
        </button>
    )
}


