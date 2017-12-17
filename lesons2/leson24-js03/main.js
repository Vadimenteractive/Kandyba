function calculateArea(a, b) {
    console.log(a * b);
}

calculateArea(5, 20);
calculateArea(6, 20);
calculateArea(5, 30);

function calculatePerim(a, b) {
    return (a + b) *2;
    console.log('after return');// куегкт не выводится после
}

console.log(calculatePerim(2, 4));

console.log(calculatePerim(3, 7) + 2);

var param1 = 2;
var param2 = 2;

function calculateAreNoRect() {
    if ( param1 != param2) {
        return param2 * param1;
    } else {
        return;
    }
}

var secondName = 'Петрович';
function concatStr(name, surname) {
    secondName = 'Иванович';
    console.log(name);
    return 'Hello, ' + name + ' ' + secondName + ' ' + surname + '!';
}
console.log(secondName);
console.log(concatStr('Иван', 'Иванов'));
console.log(secondName);

;(function () {
    //анонимная функция для экранирования переменных
}) ();

function checkVisible() {
    if(1==1) {
        var varVariable = 'var';
        let letVariable = 'let';
        console.log(typeof(varVariable), typeof(letVariable));
    }
    console.log(typeof(varVariable), typeof(letVariable));

}
checkVisible()
console.log(typeof(varVariable), typeof(letVariable));

function action1() {
    console.log('action1');
}
function action2() {
    console.log('action2');
}
function action3() {
    console.log('action3');
    action1();
    action2();
}
action3();

var func = function (aa) {
   return 11;
}
console.log(func());

function exponention(x, n) {
    if (n > 1) {
        //console.log(x, n);
        var result = x * exponention(x, n - 1);
        console.log(result, n);
        return result;
} else {
        console.log(x, n, 'из return');
    return x;
}}
//console.log(exponention(2, 4));
exponention(2, 4); //2*2*2*2

function getRandom(min, max) {
    var random = (Math.random() * (max-min) + min);
    console.log(random);//проверка округления
    return Math.round(random);
}
console.log(getRandom(1, 6));
console.log('________________');
var minVal = prompt('введите первое число'),
    maxVal = prompt('введите второе число');
 function  returnUserRandom(min, max) {
     console.log(getRandom(parseInt(min), parseInt(max)));
 }
 returnUserRandom(minVal, maxVal);