import { Reducer } from "redux";
import { AppAction } from "../actions/appTypes";
import * as appActionTypes from '../actions/appActionTypes'

export interface IAppState {
    counter: number
}

const initialState: IAppState = {
    counter: 0
}

export const appReducer: Reducer<IAppState, AppAction> = (state = initialState, action) => {
    switch(action.type){
        case appActionTypes.DECREMENT: 
            return {
                ...state,
                counter: state.counter - 1
            }

        case appActionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        default: return state;
    }
}