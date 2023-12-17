// document.querySelector('button').addEventListener('click', handleClick);

// function handleClick() {
//     alert('I got clicked.');
// }

// document.querySelector('button').addEventListener('click', function () {
//     alert('I got clicked.');
// });

// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }
// calculator(2, 3, add);

var buttons_set = document.querySelectorAll('.drum');
for (let i = 0; i < buttons_set.length; i++) {
    buttons_set[i].addEventListener('click', function() {
        alert('I got clicked.');
        
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    });
}