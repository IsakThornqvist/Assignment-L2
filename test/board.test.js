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

beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = jest.fn(() => ({}))
})

describe('Board component', () => {
  test('my-board component should contain a tool bar', () => {
    document.body.innerHTML = '<my-board></my-board>'
    const myBoard = document.querySelector('my-board')
    const shadowRoot = myBoard.shadowRoot
    const toolBar = shadowRoot.querySelector('#toolBar')
    expect(toolBar).not.toBeNull()
  })
})
