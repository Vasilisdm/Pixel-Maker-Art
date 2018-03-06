// Select color input
// Select size input
const form  = document.querySelector('#sizePicker'),
    height  = form.querySelector('#inputHeight'),
    width   = form.querySelector('#inputWeight'),
    submit  = form.querySelector('.submit')

const colorPicker  = document.querySelector('#colorPicker'),
    pixelCanvas     = document.querySelector('#pixelCanvas')

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function(sub){
    sub.preventDefault();
    if (sub.target.nodeName === 'INPUT') {
        makeGrid(width.value, height.value);
    }
});

function makeGrid(width, height) {
    for (let row = 1; row <= height; row++) {

        // creating table row
        const tr = document.createElement('tr');

        for (let column = 1; column <= width; column++) {
            const td = document.createElement('td');

            tr.appendChild(td);
        }
        
        pixelCanvas.appendChild(tr);
    }
}
