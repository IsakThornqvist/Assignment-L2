# Reflection
The first challenge I encountered was my lack of familiarity with the HTML element **canvas**. Initially, I attempted to create my canvas using a **div** element, but after consulting the MDN documentation, I realized that the **canvas** element was much better suited for my project.

Through this process, I gained hands-on experience with various canvas methods, such as beginPath() and stroke(). These methods made it straightforward to implement functionality like the pen tool correctly. The documentation for these methods was extremely helpful and made it easy to understand how to use them in combination to achieve the desired drawing behavior.

I wanted to set up testing for my module early in the development process. Initially, I encountered issues with importing the module using:

```js
import '../src/components/board/board.js'
```

The issue I had was that Jest could not natively handle ES module imports from the browser-based code. To resolve this, I configured Babel and updated the Jest configuration to work with ES modules. Once these configurations were in place, the tests ran successfully, allowing me to validate the functionality of my module.

Setting up the eraser tool went really well, and I understood what I needed to do from the start. Since the pen tool was already implemented, I realized that much of its code could be reused, as both the pen and eraser work in a similar way.

Initially, I tried to make the eraser by simply turning it into a white pen. However, I quickly realized this approach had several problems. First, if I wanted to allow users to change the background color of the canvas, the eraser would fail immediately, since it would only "erase" to white, not to the actual background color. Another issue was that the eraser itself didn’t work well at all,it was hard to erase cleanly when all it did was draw white lines.

Instead of using a white pen, I decided to implement the eraser by actually clearing parts of the canvas. I used the clearRect method of the canvas context to remove a rectangular area where the user moves the eraser. This approach works regardless of the background color and provides a much more natural erasing experience. By clearing pixels directly, the eraser behaves as expected and is not dependent on the canvas color.

```js
  /**
   * Erases a rectangular area at the current mouse position.
   *
   * @param {MouseEvent} event - The mouse event object.
   */
  erase (event) {
    const { offsetX, offsetY } = event
    const size = 20
    this.canvasContext.clearRect(offsetX - size / 2, offsetY - size / 2, size, size)
  }
  ```

When designing the pen functionality, I considered several approaches for handling color changes.  
The long-term goal is to implement a full **RGB color picker** so that users can select any color freely.  
For the current version, I chose to provide a set of predefined colors.

To achieve this, I added a `colorPicker` section in the **board-template**, which contains four buttons.  
Each button has a `data-color` attribute that stores its corresponding color value.  

In **board.js**, I listen for click events on these buttons.  
When a button is pressed, the pen tool updates its active color using the value from the `data-color` attribute.  

This setup is straightforward to extend — I can either add more predefined buttons or later replace them with a full RGB picker.

---

#### Flow of Color Selection

1. User clicks a color button inside the `colorPicker`.
2. The button’s `data-color` attribute is read in `board.js`.
3. The value is passed to `pen.setColor(color)`.
4. The pen updates its stroke color and uses it for subsequent drawings.

    ```js
      /**
     * Sets up event listeners for color buttons to change the pen color.
     */
    pickColor () {
      this.#colorPicker.querySelectorAll('.colorButton').forEach(button => {
        button.addEventListener('click', () => {
          const color = button.getAttribute('data-color')
          console.log(`color selected is ${color}`)
          this.#pen.setColor(color)
        })
      })
    }
    ```

    For the pen size feature, I wanted users to draw with different thicknesses instead of a fixed line width. To do this, I created a penSizePicker section in the template with buttons that each have a data-size attribute that I use to change the size of the pen depending on what button the user clicks.

    In board.js, I added event listeners so that when a button is clicked, the value from data-size is passed to pen.setSize(size). At first, I ran into the issue that the values were read as strings, which caused problems since the canvas expects a number. I fixed this by converting the values with parseInt.

    In the future, this could easily be extended with a slider instead of fixed buttons for even more flexibility.

        ```js
    /**
     * Sets up event listeners for pen size buttons to change the pen size.
     */
    pickSize () {
      this.#penSizePicker.querySelectorAll('.sizeButton').forEach(button => {
        button.addEventListener('click', () => {
          const size = parseInt(button.getAttribute('data-size'), 10)
          console.log(`size selected is ${size}`)
          this.#pen.setSize(size)
        })
      })
    }
    ```


# Naming Analysis

| Name | Explaination | Reflection |
|------|------------|--------------------------------------|
| `my-board` | The name of the custom-element that will be used in the html to show the component | **Use Intention-Revealing Names:** The name clearly represents what the customelement represents which is the board itself, I could probably be even more specific and call it something like 'drawing board' but I think the name I gave it is good enough and most people will understand the meaning of it. |
| `PenTool` | Class name for the tool that handles drawing freehand lines on the canvas. | **Classes and Objects Should Have Noun or Noun Phrase Names:** The name correctly uses a noun that reflects its role. It reveals the intent of the class (a pen-like drawing tool). One improvement could be dropping the suffix “Tool” since the module already exists in a /tools/ directory, which makes it redundant. |
| `setColor` | Method name in PenTool that changes the color of the pen. | **Method Names Should Be Verbs or Verb Phrases:** This follows the rule because setColor describes exactly what the function does: it sets the color. It could be even clearer if renamed to setPenColor, since the tool works with the pen, but overall it’s descriptive and conventional. |

## Refelction of what I learnt by reading chapter 2 


# The longest method/function

```js
setWidthAndHeight () {
    this.#widthButton.addEventListener('click', () => {
        const widthValue = this.#widthInput.value
        if(!isNaN(widthValue)) {
            this.#canvas.width = widthValue
            console.log(`Width changed to ${widthValue} px`)
        }
    })

    this.#heightButton.addEventListener('click', () => {
        const heightValue = this.#heightInput.value
        if(!isNaN(heightValue)) {
            this.#canvas.height = heightValue
            console.log(`Height changed to ${heightValue} px`)
        }
    })
}
```


**1. Do One Thing**

The code above follows the **Do One Thing** rule, the only thing the method **setWidthAndHeight** does is described in the name of the function, this function only handles the logic with setting the width and height of the canvas. 

# Reflection on the code quality

# Notes to self

pen.js

beginPath() = "Lift pen completely off paper and start fresh"
moveTo(x, y) = "Place pen at position x,y WITHOUT drawing"
lineTo(x, y) = "Draw line from current position to x,y"
stroke() = "Make the line visible/permanent"