import '../components/board/index.js'

const board = document.createElement('my-board')
document.body.appendChild(board)

// The standard canvas size is 500 by 500 pixels.
board.setCanvasSize(500, 500)
// By default you have 7 colors to set to whatever you want-
board.setPenColor('black', 'red', 'violet', 'yellow', 'lime', 'green', 'blue', 'blueviolet', 'brown', 'grey', 'orange', 'skyblue')
// First parameter is the small size, middle is medium and the last is the big size.
board.setPenSize(3, 6, 10)
