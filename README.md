# Assignment-L2 - The Module

## Short Module Description
This module provides a custom web component `<my-board>` that allows users to draw, erase, and customize a canvas. Features include a pen tool with selectable colors and sizes, an eraser tool, canvas resizing, and programmatic control via exposed methods.

## Installation
Import the module in your HTML file:

```html
<script type="module">
  import './src/components/board/board.js';
</script>

<my-board></my-board>
```

## Use-Cases
1. Draw on a canvas using a pen tool with adjustable colors and sizes.

2. Erase portions of the canvas using the eraser tool.

3. Resize the canvas either through input fields or programmatically.

4. Programmatically change pen colors with setPenColor(...).

5. Programmatically change pen sizes with setPenSize(...).

6. Clear the entire canvas using the "Clear Canvas" button.


### Example Usage

```js
const board = document.querySelector('my-board');

// Resize the canvas
board.setCanvasSize(600, 400)

// Change pen colors
board.setPenColor('red', 'green', 'blue')

// Change pen sizes
board.setPenSize(2, 5, 10)
```

## Licence
This module is licensed under the MIT License. You are free to use, modify, and distribute it for personal or commercial purposes.
