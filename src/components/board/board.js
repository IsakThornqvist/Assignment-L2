import { PenTool } from '../tools/pen/pen.js'
import { template } from './board-template.js'

customElements.define('my-board', 

    class extends HTMLElement {
        #myBoard
        #pen
        #canvas
        #currentTool = 'none'

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

        this.setupToolButtons()
        this.setupPenEvents()
    }


setupPenEvents () {
this.#canvas.addEventListener('mousedown', e => this.handleMouseDown(e))
this.#canvas.addEventListener('mouseup', e => this.handleMouseUp(e))
this.#canvas.addEventListener('mousemove', e => this.handleMouseMove(e))

}

setupToolButtons() {
    this.shadowRoot.querySelectorAll('.toolButton').forEach(button => {
        button.addEventListener('click', () => {
            this.swapTool(button.dataset.tool, button)
        })
    })
}

swapTool(toolname, buttonClicked) {
this.shadowRoot.querySelectorAll('.toolButton').forEach(button =>
    button.classList.remove('active')
)

buttonClicked.classList.add('active')

this.#currentTool = toolname
console.log('Current tool is', this.#currentTool)

}

handleMouseUp(e) {
this.#canvas.addEventListener('mouseup', e => {
    if (this.#currentTool === 'pen') {
    this.#pen.handleMouseUp(e)
    }
    })
}

handleMouseDown(e) {
this.#canvas.addEventListener('mousedown', e => {
    if (this.#currentTool === 'pen') {
    this.#pen.handleMouseDown(e)
    }
})
}

handleMouseMove(e) {
this.#canvas.addEventListener('mousemove', e => {
    if (this.#currentTool === 'pen') {
        this.#pen.handleMouseMove(e)
    }
})
}

})