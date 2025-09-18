import '../src/components/board/board.js'

// Mock getContext to avoid jsdom error
beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = jest.fn(() => ({}))
})

describe('Board Component', () => {
  test('my-board should contain a canvas element', () => {
    document.body.innerHTML = '<my-board></my-board>'
    const myBoard = document.querySelector('my-board')
    const shadowRoot = myBoard.shadowRoot
    const canvas = shadowRoot.querySelector('canvas')
    expect(canvas).not.toBeNull()
  })
})
