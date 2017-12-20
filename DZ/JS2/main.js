function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
finisfNumberOne();

// alert('minParse' + typeof minParseType);
// alert(parseInt(maxVar))
//alert(typeof minVar + minVar)
function finisfNumberOne(minVar) {
        minVar = prompt('Введите минимальное значение');
        var minParse = parseInt(minVar);
    if (!minVar) {
        alert('Строка не может быть пустой. Пожалуйста, ведите минимальное значение');
        finisfNumberOne()
    } else if ((minParse + 1) === NaN) //проверка ввода нечисленного значения
        // пробовал (minParse + 1) == 'NaN', typeof minParse == 'string'
    {
        alert('Значение не может содержать символы. Пожалуйста, ведите минимальное значение');
        finisfNumberOne()
    }  else if (typeof minParse == "number") {
        alert (typeof minParse); //проверка типа minParse. всегда строка
        alert(minParse + 1); //проверка срабатывания "не числа"
        finisfNumberTwoo(minParse)
    }
}
function finisfNumberTwoo(minVar) {
        var maxVar = prompt('Введите максимальное значение');
        var maxParse = parseInt(maxVar);
    if (!maxVar) {
        alert('Строка не может быть пустой. Пожалуйста, ведите минимальное значение');
        finisfNumberTwoo()
    } else if (typeof maxParse === NaN) //проверка ввода нечисленного значения
    {
        alert('Значение не может содержать символы. Пожалуйста, ведите минимальное значение');
        finisfNumberTwoo()
    } else {
        alert('Ваше значение ' + randomize(minVar, maxParse));
    }
}
