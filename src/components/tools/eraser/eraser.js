/**
 *
 */
export class EraseTool {
  /**
   *
   */
  constructor (canvasContext) {
    this.isErasing = false
    this.canvasContext = canvasContext
    this.color = 'white'
  }

  /**
   *
   * @param event
   */
  handleMouseDown (event) {
    this.isErasing = true

    const { offsetX, offsetY } = event

    this.canvasContext.beginPath()
    this.canvasContext.moveTo(offsetX, offsetY)
    console.log('Eraser clicked down')
  }

  /**
   *
   * @param event
   */
  handleMouseMove (event) {
    if (!this.isErasing) return
    this.erase(event)
  }

  /**
   *
   */
  handleMouseUp () {
    if (this.isErasing) {
      this.isErasing = false

      this.canvasContext.beginPath()
      console.log('Eraser up')
    }
  }

  /**
   *
   * @param event
   */
  erase (event) {
    const { offsetX, offsetY } = event
    const size = 20
    this.canvasContext.clearRect(offsetX - size / 2, offsetY - size / 2, size, size)
  }
}
