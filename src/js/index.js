import '../components/board/index.js'

const board = document.createElement('my-board')
document.body.appendChild(board)

board.setCanvasSizeThroughMethodCall(500, 500)
// board.setToolBarSizeThroughMethodCall(500, 50)
board.setColorsThroughMethodCall('black', 'red', 'violet', 'yellow', 'lime', 'green', 'blue')
