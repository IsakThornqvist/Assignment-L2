import { PenTool } from '../tools/pen/pen.js'
import { template } from './board-template.js'

customElements.define('my-board', 

    class extends HTMLElement {
        #myBoard
        #pen
        #canvas

        constructor () {
            super()

            this.attachShadow({ mode: 'open'} )
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.#myBoard = this.shadowRoot.querySelector('#boardContainer')
            this.#canvas = this.shadowRoot.querySelector('#myCanvas')

            this.#pen = new PenTool(this.#canvas.getContext('2d'))
        }


    connectedCallback () { 
        console.log('my-board added')

        this.#canvas.addEventListener('mousedown', e => this.#pen.handleMouseDown(e))

        this.#canvas.addEventListener('mouseup', e => this.#pen.handleMouseUp())

        this.#canvas.addEventListener('mousemove', e => this.#pen.handleMouseMove(e))
    }



    })