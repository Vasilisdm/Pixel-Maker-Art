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
        makeGrid(height.value, width.value);
    }
});

function makeGrid(height, width) {
    
}
