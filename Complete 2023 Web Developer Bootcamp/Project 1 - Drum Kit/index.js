// document.querySelector('button').addEventListener('click', handleClick);

// function handleClick() {
//     alert('I got clicked.');
// }

// document.querySelector('button').addEventListener('click', function () {
//     alert('I got clicked.');
// });

var buttons_set = document.querySelectorAll('.drum');
for (let i = 0; i < buttons_set.length; i++) {
    buttons_set[i].addEventListener('click', function() {
        alert('I got clicked.');
    });
}