var colors;
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector('#message');
var header = document.querySelector('h1');
var button1 = document.querySelector('#button1');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var modeBtns = document.querySelectorAll('.mode');

newGame(6);

button1.addEventListener('click', function() {
    newGame(colors.length);
    message.textContent = '';
});

for (let index = 0; index < modeBtns.length; index++) {
    modeBtns[index].addEventListener('click', function(){
        modeBtns[0].classList.remove('selected');
        modeBtns[1].classList.remove('selected');
        this.classList.add('selected');

        if (!(colors.length == ((index + 1) * 3))) {
            newGame((index + 1) * 3);
            message.textContent = '';
        }
    });
}

for(var i = 0; i < 6; i++) {
    //add colors to sqaures
    squares[i].style.backgroundColor = colors[i];

    //add click listeners
    squares[i].addEventListener('click', function() {
        if(this.style.backgroundColor == pickedColor) {
            message.textContent = 'Correct!';
            win(pickedColor);
            button1.textContent = 'PLAY AGAIN?';
        } else {
            message.textContent = 'Try Again'
            this.style.backgroundColor = '#232323';
        }
    });
}

function getRandomColor() {
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);

    return ('rgb(' + r + ', ' + g + ', ' + b + ')');
}

function generateColors(num) {
    var temp = [];
    for(var i = 0; i < num; i++) {
        temp.push(getRandomColor());
    }
    return temp;
}

function win(color) {
    header.style.backgroundColor = color;
    for(var j = 0; j < 6; j++) {
        squares[j].style.backgroundColor = color;
    }
}

function newGame(num) {
    colors = generateColors(num);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    changeColors();
    header.style.backgroundColor = 'steelblue';
    colorDisplay.textContent = pickedColor;
    messageDisplay = '';
    button1.textContent = 'NEW COLORS';
}

function changeColors() {
    for (let index = 0; index < colors.length; index++) {
        squares[index].style.backgroundColor = colors[index];
    }

    for (let index = colors.length; index < squares.length; index++) {
        squares[index].style.backgroundColor = '#232323';
    }
}