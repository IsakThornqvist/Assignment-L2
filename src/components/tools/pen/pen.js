export class PenTool {
    constructor (canvasContext) {
        this.isDrawing = false
        this.canvasContext = canvasContext
        this.color = '#000'

    }

    handleMouseDown(e) {
        this.isDrawing = true
    }

    handleMouseMove(e) {
        this.isDrawing = true

    }

    handleMouseUp() {
        this.isDrawing = false
    }

    draw(e) {

    }

    setColor(color) {
        this.color = color
    }
}