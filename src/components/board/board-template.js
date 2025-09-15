export const template = document.createElement('template')

template.innerHTML = `
<div id='boardContainer'>

<p> The-Board </p>

<div id='canvasContainer'>
    
<canvas id="myCanvas" width="600" height="400">
</canvas>

</div>

<div id='sideBar'>

</div>

</div>


<style>


    #myCanvas {
       border:1px solid #000000 
    }


</style>

`