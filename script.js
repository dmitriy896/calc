const userInput = document.getElementById('userInput');
let expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    var audio = document.getElementById("audio");
    audio.play();
    userInput.value = eval(expression)
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expression;
}