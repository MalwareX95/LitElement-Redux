import {html, LitElement, css} from 'lit-element'

class MyComponent extends LitElement{
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
                Foo
            </div>
        `
    }
}

customElements.define('my-app', MyComponent)
