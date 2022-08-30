
export type SetValueActionType = {
    type: 'SET-VALUE'
    value: number
}
export type SetStartValueActionType = {
    type: 'SET-START-VALUE'
    startValue: number
}
export type SetMaxValueActionType = {
    type: 'SET-MAX-VALUE'
    maxValue: number
}
export type SetMessageActionType = {
    type: 'SET-MESSAGE'
    message: string
}
export type SettingActionType = {
    type: 'SETTING'
    meaning: boolean
}
export type DisableActionType = {
    type: 'DISABLE'
    dis: boolean
}
type ActionPropsType = SetValueActionType | SetStartValueActionType | SetMaxValueActionType | SetMessageActionType | SettingActionType | DisableActionType

type StateType = {
    value: number
    startValue: number
    maxValue: number
    message: string
    isSetting: boolean
    disBtn: boolean
}

let initialState = {
    value: 0,
    startValue: 0,
    maxValue: 0,
    message: 'enter values and press "set"',
    isSetting: false,
    disBtn: true
}

export const counterReducer = (state: StateType = initialState, action: ActionPropsType) => {
    switch (action.type) {
        case 'SET-VALUE':
            return {...state, value: action.value}
        case 'SET-START-VALUE':
            return {...state, startValue: action.startValue}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET-MESSAGE':
            return {...state, message: action.message}
        case 'SETTING':
            return {...state, isSetting: action.meaning}
        case 'DISABLE':
            return {...state, disBtn: action.dis}
        default:
            return state
    }
}

export const setValueAC = (value: number): SetValueActionType => ({type: 'SET-VALUE', value})
export const setStartValueAC = (startValue: number): SetStartValueActionType => ({type: 'SET-START-VALUE', startValue} )
export const setMaxValueAC = (maxValue: number): SetMaxValueActionType => ({type: 'SET-MAX-VALUE',maxValue})
export const setMessageAC = (message: string): SetMessageActionType => ({type: 'SET-MESSAGE', message})
export const settingAC = (meaning: boolean): SettingActionType => ({type: 'SETTING', meaning})
export const disableBtnAC = (dis: boolean): DisableActionType => ({type: 'DISABLE', dis})