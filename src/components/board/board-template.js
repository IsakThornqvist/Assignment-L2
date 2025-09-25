export const template = document.createElement('template')

template.innerHTML = `
<div id='boardContainer'>

<p> The-Board </p>

<div id='canvasContainer'>
    
<canvas id="myCanvas" width="600" height="600">
</canvas>

<div id='heightWidthChangeContainer'>
<input id='widthInput' placeholder='Set width'></input>
<button id='widthButton' type='submit'> Change Width </button>
<input id='heightInput' placeholder='Set height'></input>
<button id='heightButton' type='submit'> Change Height </button>
<button id='clearCanvasButton'>Clear canvas</button>
</div>

<div id='toolBar'>
    <h1>Tools</h1>
    <button class='toolButton active' data-tool='none' id='noneButton'> None</button>
    <button class='toolButton' data-tool='pen'id='penButton'> Pen</button>
    <button class='toolButton' data-tool='eraser'id='eraserButton'> Eraser</button>
    <button class='toolButton' data-tool='shapes'id='shapesButton'> Shapes</button>
</div>

<div id='colorPicker' class='hidden'> 
    <button id='colorOne' class='colorButton' data-color='blue'> </button>
    <button id='colorTwo' class='colorButton' data-color='green'> </button>
    <button id='colorThree' class='colorButton' data-color='red'> </button>
    <button id='colorFour' class='colorButton' data-color='yellow'> </button>
    <button id='colorFive' class='colorButton' data-color='orange'> </button>
    <button id='colorSix' class='colorButton' data-color='orange'> </button>
    <button id='colorSeven' class='colorButton' data-color='orange'> </button>
</div>

    <div id='penSizePicker' class='hidden'> 
    <button class='sizeButton' data-size='2'>Small</button>
    <button class='sizeButton' data-size='5'>Medium</button>
    <button class='sizeButton' data-size='10'>Big</button>
    </div>

</div>

</div>


<style>

    .hidden {
        display: none;
    }

.colorButton {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #e5e7eb;
    margin: 0 6px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
    display: inline-block;
}

#colorOne {
    background-color: #15ff00ff;
}
#colorTwo {
    background-color: #2563eb;
}
#colorThree {
    background-color: #ff0000ff;
}
#colorFour {
    background-color: #eeff00ff;
}
#colorFive {
    background-color: #ffbb00ff;
}

.colorButton:focus, .colorButton:hover {
    border-color: #2563eb;
    box-shadow: 0 4px 12px rgba(59,130,246,0.15);
}
#boardContainer {
    background: #ffffff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    max-width: 1200px;
    margin: 20px auto;
    font-family: 'Segoe UI', sans-serif;
}

#boardContainer p {
    font-size: 22px;
    font-weight: 600;
    color: #2563eb;
    margin: 0 0 24px 0;
    text-align: center;
}

#canvasContainer {
    display: grid;
    grid-template-columns: 1fr 180px;
    grid-template-rows: auto 1fr;
    gap: 20px;
    grid-template-areas: 
        "controls toolbar"
        "canvas toolbar";
}

#myCanvas {
    grid-area: canvas;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    transition: border-color 0.2s, box-shadow 0.2s;
}

#myCanvas:hover {
    border-color: #3b82f6;
    box-shadow: 0 4px 10px rgba(59,130,246,0.15);
    cursor: crosshair; 
}

#heightWidthChangeContainer {
    grid-area: controls;
    display: flex;
    gap: 12px;
    align-items: center;
    background: #f9fafb;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
}

#widthInput, #heightInput {
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    background: white;
    width: 100px;
    transition: border-color 0.2s, box-shadow 0.2s;
}

#widthInput:focus, #heightInput:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59,130,246,0.2);
}

#widthButton, #heightButton {
    padding: 8px 16px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;
}

#widthButton:hover, #heightButton:hover {
    background: #1e40af;
}

#toolBar {
    grid-area: toolbar;
    background: #f9fafb;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #e5e7eb;
    height: fit-content;
}

#toolBar h1 {
    margin: 0 0 16px 0;
    color: #111827;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
}

.toolButton {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    background: white;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    color: #374151;
    transition: all 0.2s;
}

.toolButton:hover {
    border-color: #3b82f6;
    background: #f3f4f6;
    color: #111827;
}

.toolButton.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
    box-shadow: 0 2px 6px rgba(59,130,246,0.25);
}

.toolButton:last-child {
    margin-bottom: 0;
}

@media (max-width: 700px) {
    #canvasContainer {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "controls"
            "canvas"
            "toolbar";
    }
    
    #toolBar {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding: 12px;
    }
    
    #toolBar h1 {
        min-width: 60px;
        margin: 0 12px 0 0;
        font-size: 14px;
        display: flex;
        align-items: center;
    }
    
    .toolButton {
        margin-bottom: 0;
        min-width: 70px;
        white-space: nowrap;
    }
    
    #boardContainer {
        margin: 10px;
        padding: 16px;
    }
}

</style>

`
