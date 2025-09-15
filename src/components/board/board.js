import { template } from './board-template.js'

customElements.define('my-board', 

    class extends HTMLElement {
        #myBoard

        constructor () {
            super()

            this.attachShadow({ mode: 'open'} )
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.#myBoard = this.shadowRoot.querySelector('#boardContainer')
        }
        

    connectedCallback () { 
        console.log('my-board added')
    }



    })