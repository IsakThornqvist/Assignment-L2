/**
 * Tool for drawing freehand lines on a canvas.
 */
export class PenTool {
    /**
     * @param {CanvasRenderingContext2D} canvasContext - The 2D context of the canvas to draw on.
     */
    constructor (canvasContext) {
        this.isDrawing = false
        this.canvasContext = canvasContext
        this.color = 'red'

    }

    /**
     * Handles mouse down event to start drawing.
     * @param {MouseEvent} e
     */
    handleMouseDown(e) {
        this.isDrawing = true
        console.log('Pen clicked down')
    }

    /**
     * Handles mouse move event to draw if drawing is active.
     * @param {MouseEvent} e
     */
handleMouseMove(e) {
    if (!this.isDrawing) return
    this.draw(e)
}

    /**
     * Handles mouse up event to stop drawing.
     */
    handleMouseUp() {
        this.isDrawing = false
        console.log('Pen up')

    }

    /**
     * Draws a line to the current mouse position.
     * @param {MouseEvent} e
     */
    draw(e) {
    const { offsetX, offsetY } = e
    this.canvasContext.lineTo(offsetX, offsetY)
    this.canvasContext.strokeStyle = this.color
    this.canvasContext.stroke()
    }

    /**
     * Sets the color for the pen tool.
     * @param {string} color - The color to set for drawing.
     */
    setColor(color) {
        this.color = color
    }
}