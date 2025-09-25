import '../components/board/index.js'

const board = document.createElement('my-board')
document.body.appendChild(board)

board.setCanvasSizeThroughMethodCall(400, 500)
// board.setToolBarSizeThroughMethodCall(500, 50)
