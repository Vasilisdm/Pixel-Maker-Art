// Select color input
let colorInput = document.querySelector('#colorPicker');

colorInput.addEventListener('change', function(event){
    color = event.target.value;
    console.log(color);
});

// Select size input
let heightInput = document.querySelector('#inputHeight');

heightInput.addEventListener('change',function(event){
    height = event.target.value;
    console.log(height);
});

let inputWeight = document.querySelector('#inputWeight');

inputWeight.addEventListener('change', function(event){
    width = event.target.value;
    console.log(width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {


}
