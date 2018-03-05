// Select color input
// Select size input
let heightInput = document.querySelector('#inputHeight');

heightInput.addEventListener('change',function(event){
    height = event.target.value;
});

let inputWeight = document.querySelector('#inputWeight');

inputWeight.addEventListener('change', function(event){
    width = event.target.value;
    console.log(width);
});




// When size is submitted by the user, call makeGrid()

function makeGrid() {

    height = document.getElementById('#inputHeight').value;
    console.log(height);

}
