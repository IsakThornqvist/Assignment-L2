# Reflection
The first challenge I encountered was my lack of familiarity with the HTML element **canvas**. Initially, I attempted to create my canvas using a **div** element, but after consulting the MDN documentation, I realized that the **canvas** element was much better suited for my project.

Through this process, I gained hands-on experience with various canvas methods, such as beginPath() and stroke(). These methods made it straightforward to implement functionality like the pen tool correctly. The documentation for these methods was extremely helpful and made it easy to understand how to use them in combination to achieve the desired drawing behavior.

I wanted to set up testing for my module early in the development process. Initially, I encountered issues with importing the module using:

```js
import '../src/components/board/board.js'
```

The issue I had was that Jest could not natively handle ES module imports from the browser-based code. To resolve this, I configured Babel and updated the Jest configuration to work with ES modules. Once these configurations were in place, the tests ran successfully, allowing me to validate the functionality of my module.

# Naming Analysis

| Name | Explaination | Reflection |
|------|------------|--------------------------------------|
| `my-board` | The name of the custom-element that will be used in the html to show the component | **Use Intention-Revealing Names:** The name clearly represents what the customelement represents which is the board itself, I could probably be even more specific and call it something like 'drawing board' but I think the name I gave it is good enough and most people will understand the meaning of it. |
| `Identifier2` | Description | Reflection |

**Refelction of what I learnt by reading chapter 2**  


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