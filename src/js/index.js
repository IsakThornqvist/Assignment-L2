import '../components/board/index.js'

const board = document.createElement('my-board')
document.body.appendChild(board)

// The standard canvas size is 500 by 500 pixels.
board.setCanvasSizeThroughMethodCall(500, 500)
// board.setToolBarSizeThroughMethodCall(500, 50)
// By default you have 7 colors to set to whatever you want-
board.setColorsThroughMethodCall('black', 'red', 'violet', 'yellow', 'lime', 'green', 'blue')
// First parameter is the small size, middle is medium and the last is the big size.
board.setPenSizesThroughMethodCalls(10, 10, 10)
