// import '@babel/polyfill'
// import "@webcomponents/webcomponentsjs/webcomponents-bundle";
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

import {html, LitElement, css, customElement, property} from 'lit-element'

@customElement('my-app')
export class MyComponent extends LitElement{
    // @property({type: String})
    // title = ''

    static get styles(){
        return [
            css`
                :host {
                    display: block;
                    background: red;
                }
            `
        ]
    }
    render(){
        return html`
            <div>
                das
            </div>
        `
    }
}

// customElements.define('my-app', MyComponent);
