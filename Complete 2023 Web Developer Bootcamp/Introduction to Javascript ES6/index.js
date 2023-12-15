/*
    Complete 2023 Web Developer Bootcamp
    - Introduction to Javascript ES6
*/
console.log('Hello world!');
// alert('Hello world! (alert)');
// prompt('What is your name? (prompt)')

var my_name = 'Sami';
console.log('\nmy_name: ' + my_name);
my_name = 'John';
console.log('my_name (updated): ' + my_name);

a = 2;
b = 3;
function getSum(a, b) {
    return a + b;
}
console.log('\na: ' + a);
console.log('b: ' + b);
console.log('a + b (sum): ' + getSum(a, b));

function swapVals(a, b) {
    console.log('\na (original): ' + a);
    console.log('b (original): ' + b);
    var temp = a;
    a = b;
    b = temp;
    console.log('a (swapped): ' + a);
    console.log('b (swapped): ' + b);
}
swapVals(2, 3);

my_name = 'Sami Munir';
console.log('\nmy_name: ' + my_name)
console.log('my_name.length: ' + my_name.length)
console.log('my_name.slice(0, 4): ' + my_name.slice(0, 4));

function sayHello(name) {
    var first_char = name.slice(0, 1);
    var uppercase_first_char = first_char.toUpperCase();
    var remaining_name = name.slice(1, name.length);
    var greeting_name = uppercase_first_char + remaining_name;
    console.log('\nHello, ' + greeting_name);
}
sayHello('sami');