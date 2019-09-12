import { ActionCreator } from "redux"
import { AppActionIncrement, AppActionDecrement } from "./appTypes"
import * as appActionTypes from './appActionTypes'

export const increment: ActionCreator<AppActionIncrement> = () => {
    return {
        type: appActionTypes.INCREMENT
    }
}

export const decrement: ActionCreator<AppActionDecrement> = () => {
    return {
        type: appActionTypes.DECREMENT
    }
}