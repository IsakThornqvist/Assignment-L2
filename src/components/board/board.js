import { PenTool } from '../tools/pen/pen.js'
import { EraseTool } from '../tools/eraser/eraser.js'
import { template } from './board-template.js'

customElements.define('my-board',

  /**
   * Custom element class for the drawing board component.
   */
  class extends HTMLElement {
    #myBoard
    #pen
    #eraser
    #canvas
    #currentTool = 'none'
    #widthInput
    #heightInput
    #widthButton
    #heightButton
    #colorPicker
    #penSizePicker
    #clearCanvasButton
    #heightWidthContainer
    #toolBar

    /**
     * Initializes the board component, sets up shadow DOM, and prepares tool and canvas references.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#myBoard = this.shadowRoot.querySelector('#boardContainer')
      this.#canvas = this.shadowRoot.querySelector('#myCanvas')
      this.#heightInput = this.shadowRoot.querySelector('#heightInput')
      this.#widthInput = this.shadowRoot.querySelector('#widthInput')
      this.#widthButton = this.shadowRoot.querySelector('#widthButton')
      this.#heightButton = this.shadowRoot.querySelector('#heightButton')
      this.#colorPicker = this.shadowRoot.querySelector('#colorPicker')
      this.#penSizePicker = this.shadowRoot.querySelector('#penSizePicker')
      this.#clearCanvasButton = this.shadowRoot.querySelector('#clearCanvasButton')
      this.#heightWidthContainer = this.shadowRoot.querySelector('#heightWidthChangeContainer')
      this.#toolBar = this.shadowRoot.querySelector('#toolBar')

      this.#pen = new PenTool(this.#canvas.getContext('2d'))
      this.#eraser = new EraseTool(this.#canvas.getContext('2d'))
    }

    /**
     * Called when the custom element is added to the DOM.
     * Initializes the board by setting up tool buttons and pen event listeners.
     * Logs a message to the console when the board is added.
     */
    connectedCallback () {
      console.log('my-board added')

      this.#setupToolButtons()
      this.#setupPenEvents()
      this.#setWidthAndHeight()
      this.#pickColor()
      this.#pickSize()
      this.#clearCanvas()
    }

    /**
     * Sets up the event listener for the clear canvas button to clear the canvas when clicked.
     */
    #clearCanvas () {
      this.#clearCanvasButton.addEventListener('click', () => {
        console.log('canvas cleared')
        const context = this.#canvas.getContext('2d')
        context.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
      })
    }

    /**
     * Sets up event listeners for pen interactions on the canvas element.
     * Handles mouse down, mouse up, and mouse move events to enable drawing functionality.
     *
     * @private
     */
    #setupPenEvents () {
      this.#canvas.addEventListener('mousedown', e => this.#handleMouseDown(e))
      this.#canvas.addEventListener('mouseup', e => this.#handleMouseUp(e))
      this.#canvas.addEventListener('mousemove', e => this.#handleMouseMove(e))
    }

    /**
     * Sets up click event listeners for all elements with the 'toolButton' class
     * within the component's shadow DOM. When a button is clicked, it calls
     * the swapTool method with the tool type and button element.
     */
    #setupToolButtons () {
      this.shadowRoot.querySelectorAll('.toolButton').forEach(button => {
        button.addEventListener('click', () => {
          this.#swapTool(button.dataset.tool, button)
        })
      })
    }

    /**
     * Sets up event listeners for color buttons to change the pen color.
     */
    #pickColor () {
      this.#colorPicker.querySelectorAll('.colorButton').forEach(button => {
        button.addEventListener('click', () => {
          const color = button.getAttribute('data-color')
          console.log(`color selected is ${color}`)
          this.#pen.setColor(color)
        })
      })
    }

    /**
     * Sets up event listeners for pen size buttons to change the pen size.
     */
    #pickSize () {
      this.#penSizePicker.querySelectorAll('.sizeButton').forEach(button => {
        button.addEventListener('click', () => {
          const size = parseInt(button.getAttribute('data-size'), 10)
          console.log(`size selected is ${size}`)
          this.#pen.setSize(size)
        })
      })
    }

    /**
     * Swaps the currently selected tool and updates the active button UI.
     *
     * Removes the 'active' class from all tool buttons, adds it to the clicked button,
     * and sets the current tool to the specified tool name.
     *
     * @param {string} toolname - The name of the tool to activate.
     * @param {HTMLElement} buttonClicked - The button element that was clicked.
     */
    #swapTool (toolname, buttonClicked) {
      this.shadowRoot.querySelectorAll('.toolButton').forEach(button =>
        button.classList.remove('active')
      )

      buttonClicked.classList.add('active')

      this.#currentTool = toolname
      console.log('Current tool is', this.#currentTool)
      if (this.#currentTool === 'pen') {
        this.#colorPicker.classList.remove('hidden')
        this.#penSizePicker.classList.remove('hidden')
      }
    }

    /**
     * Handles the mouse up event on the canvas element.
     * Adds an event listener for the 'mouseup' event and delegates the event to the pen tool if it is currently selected.
     *
     * @param {MouseEvent} e - The mouse up event object.
     */
    #handleMouseUp (e) {
      if (this.#currentTool === 'pen') {
        this.#pen.handleMouseUp(e)
      } else if (this.#currentTool === 'eraser') {
        this.#eraser.handleMouseUp(e)
      }
    }

    /**
     * Attaches a 'mousedown' event listener to the canvas element.
     * When the event is triggered and the current tool is 'pen',
     * delegates the event handling to the pen tool's handleMouseDown method.
     *
     * @param {MouseEvent} e - The mouse down event object.
     */
    #handleMouseDown (e) {
      if (this.#currentTool === 'pen') {
        this.#pen.handleMouseDown(e)
      } else if (this.#currentTool === 'eraser') {
        this.#eraser.handleMouseDown(e)
      }
    }

    /**
     * Attaches a mousemove event listener to the canvas element.
     * When the current tool is set to 'pen', delegates the mousemove event to the pen tool's handler.
     *
     * @param {MouseEvent} e - The mousemove event object.
     */
    #handleMouseMove (e) {
      if (this.#currentTool === 'pen') {
        this.#pen.handleMouseMove(e)
      } else if (this.#currentTool === 'eraser') {
        this.#eraser.handleMouseMove(e)
      }
    }

    /**
     * Sets up event listeners for width and height buttons to update the canvas size.
     */
    #setWidthAndHeight () {
      this.#widthButton.addEventListener('click', () => {
        const widthValue = this.#widthInput.value
        if (!isNaN(widthValue)) {
          this.#canvas.width = widthValue
          console.log(`Width changed to ${widthValue} px`)
        }
      })

      this.#heightButton.addEventListener('click', () => {
        const heightValue = this.#heightInput.value
        if (!isNaN(heightValue)) {
          this.#canvas.height = heightValue
          console.log(`Height changed to ${heightValue} px`)
        }
      })
    }

    // Methods that you can call in index.js to change the board

    /**
     * Sets the canvas size programmatically and hides the width/height input container.
     *
     * Hides the input fields and buttons for changing the height
     *
     * @param {number} width - The new width for the canvas.
     * @param {number} height - The new height for the canvas.
     */
    setCanvasSizeThroughMethodCall (width, height) {
      this.#heightWidthContainer.style.display = 'none'
      const widthValue = width
      if (!isNaN(widthValue)) {
        this.#canvas.width = widthValue
        console.log(`Width changed via interface to ${width}`)
      }

      const heightValue = height
      if (!isNaN(heightValue)) {
        this.#canvas.height = heightValue
        console.log(`Height changed via interface to ${height}`)
      }
    }

    setToolBarSizeThroughMethodCall (width, height) {
      const widthValue = width
      if (!isNaN(widthValue)) {
        this.#toolBar.width = widthValue
        console.log(`Width of toolBar changed via interface to ${width}`)
      }

      const heightValue = height
      if (!isNaN(heightValue)) {
        this.#toolBar.height = heightValue
        console.log(`Height height changed via interface to ${height}`)
      }
    }
  })
