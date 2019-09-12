// import '@babel/polyfill'
// import "@webcomponents/webcomponentsjs/webcomponents-bundle";
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

import {html, LitElement, css, customElement, property, eventOptions} from 'lit-element';

// import {increment} from './actions/appActions'
// import {Part} from 'lit-html/lib/part'
// import {directive, TemplateResult,} from 'lit-html';
// import {unsafeHTML} from 'lit-html/directives/unsafe-html';

import {connect} from 'pwa-helpers/connect-mixin'
import {store} from './redux-basic';
import('./view1')

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

    // increment()
    //     store.dispatch(increment())
    // }
    
    render(){
        return html`
            <div>
                <counter-view></counter-view>
            </div>
        `
    }
}

