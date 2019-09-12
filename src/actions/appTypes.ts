import { Action } from 'redux'

export interface AppActionIncrement extends Action<'INCREMENT'>{} 
export interface AppActionDecrement extends Action<'DECREMENT'>{} 

export type AppAction = AppActionIncrement | AppActionDecrement



