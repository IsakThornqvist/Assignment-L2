# Reflection
The first issue I ran into was that I was not familiar with the canvas element at all, at first I started trying to make my canvas via a div but whern I later checked MDN and found out that the canvas element can work for my project it mkade it alot easier, I also have gotten experience with the diffrent methods that exist and can be used in combination with the canvas such as, stroke() and beginPath(), these methods made it super convinient to make for example the pen work correctly and the documentation around the methods was very great.

# Names in the code

# The longest method/function

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