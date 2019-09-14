// import '@babel/polyfill'
// import "@webcomponents/webcomponentsjs/webcomponents-bundle";
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

import {html, LitElement, css, customElement, property, eventOptions, query} from 'lit-element';

// import {increment} from './actions/appActions'
// import {Part} from 'lit-html/lib/part'
// import {directive, TemplateResult,} from 'lit-html';
// import {unsafeHTML} from 'lit-html/directives/unsafe-html';

import {connect} from 'pwa-helpers/connect-mixin'
import {store} from './redux-basic';
import './view1'
import { increment } from './actions/appActions';

@customElement('my-app')
export class MyComponent extends connect(store)(LitElement){
    @property({type: String})
    title = '';
    
    static get styles(){
        return [
            css`
                :host {
                    display: block;
                    font-size: 20px;
                    background: blue;
                }
            `
        ]
    }

    increment(){
        store.dispatch(increment())
    }
    
    @query('#name')
    nameInput?: HTMLInputElement

    
    @query('#surname')
    surnameInput?: HTMLInputElement

    pattern = '((\\d+m)\\s*(\\d+s)|(\\d+[ms]))'

    _onInputHandler({target}:InputEvent){
        const input = target as HTMLInputElement
        
        // input.setCustomValidity('')
        // input.checkValidity()
    }

    _onInvalidHandler({target}:Event){
        const input = target as HTMLInputElement
    }

    _onSubmitHandler(event: Event){
        event.preventDefault()
        const [minutes, seconds] = [/(\d+)m/, /(\d+)s/].map(x => (x.exec(this.nameInput!.value) || [])[1]) 
        
        // const seconds = (/(\d+)s/.exec(this.nameInput!.value) || [])[0];
        // const [minutes] = [match[0], match[1]]
    }
    
    render(){
        return html`
            <form @submit="${this._onSubmitHandler}" role="form">
                <input type="text"
                       pattern="${this.pattern}"
                       placeholder="np: 30m 200s" 
                       @input="${this._onInputHandler}" 
                       @invalid="${this._onInvalidHandler}" 
                       required name="name" id="name" />
                <!-- <input type="text" @input="${this._onInputHandler}" pattern="" name="surname" id="surname"/> -->
                <button type="submit">OK</button>
            </form>
        `
    }

    
    
    
}

