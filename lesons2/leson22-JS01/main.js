;(function () {
    'use strict'
    var firstVariable = 0; //тип число
    console.log(firstVariable);
    var strVariable = 'string' // тип строка
    var booleanVsr = true; //boolean тип
    var nullVar = null; // nul переменная
    var undefineVar = undefined; //undefined переменная
    var obj = {
        ourVal1: 1, ourVal2: 'asdf', v3: false
    };
    firstVariable = 'Иван';
console.log();
console.log();
console.log();console.log();
    /*var g1 = prompt('как вас зовут?', 'Иван');
    var g2 = confirm('Вы рады быть на нашем сайте?');
    alert('Здравствуйте ' + q1 + ', спасибо что вы рады');*/

    var q1 = prompt('как вас зовут?', firstVariable),
        q2 = confirm('вам есть 18 лет?');

    if (q1 && q2) {
        alert('Здравствуйте ' + q1 + ', вам доступен весь контент нашего сайта')
    } else {
        if (!q1) {
            q1 = prompt('Имя нужно обязательно указать')
        }
        if (!q2) {
            alert('Простите, вам нужно подрости')
        }
    }
    console.log(1234)
})();
