import { LitElement, html, property, customElement } from "lit-element";
import {connect} from 'pwa-helpers'
import {store} from './redux-basic'
import { IAppState } from "./reducers/app";

@customElement('counter-view')
export class View1 extends connect(store)(LitElement){
    
    @property({type: Number})
    counter?: number
    
    render(){
        return html`
        
            <span>${this.counter}</span>
        `
    }

    stateChanged(state: IAppState){
        this.counter = state.counter
    }
}