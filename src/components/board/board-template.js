export const template = document.createElement('template')

template.innerHTML = `
<div id='boardContainer'>

<p> The-Board </p>

<div id='canvasContainer'>
    
<canvas id="myCanvas" width="600" height="400">
</canvas>

<div id='heightWidthChangeContainer'>
<input id='widthInput' placeholder='Set width'></input>
<button id='widthButton' type='submit'> Change Width </button>
<input id='heightInput' placeholder='Set height'></input>
<button id='heightButton' type='submit'> Change Height </button>
</div>

<div id='toolBar'>
    <h1>Tools</h1>
    <button class='toolButton active' data-tool='none' id='noneButton'> None</button>
    <button class='toolButton' data-tool='pen'id='penButton'> Pen</button>
    <button class='toolButton' data-tool='eraser'id='eraserButton'> Eraser</button>
    <button class='toolButton' data-tool='shapes'id='shapesButton'> Shapes</button>
</div>

</div>

</div>


<style>


    #myCanvas {
       border:1px solid #000000 
    }

        #toolBar {
        width: 150px;
        background: #f5f5f5;
        padding: 15px;
    }

        .toolButton {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        background: white;
        cursor: pointer;
    }

        .toolButton.active {
        background: #17bd33ff;
        color: white;
    }

</style>

`