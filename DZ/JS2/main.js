function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
finisfNumberOne();

// alert('minParse' + typeof minParseType);
// alert(parseInt(maxVar))
//alert(typeof minVar + minVar)
function finisfNumberOne(minVar) {
        minVar = prompt('Введите минимальное значение');
        var minParseType = parseInt(minVar);
    if (!minVar) {
        alert('Строка не может быть пустой. Пожалуйста, ведите минимальное значение');
        finisfNumberOne()
    } else if ((minParseType + 1) == 'NaN') {
        alert('Значение не может содержать символы. Пожалуйста, ведите минимальное значение');
        finisfNumberOne()
    }  else if (typeof minParseType == "number") {
        alert(minParseType + 1)
        finisfNumberTwoo(minVar)
    }
}
function finisfNumberTwoo(minVar) {
        var maxVar = prompt('Введите максимальное значение');
        var maxParseType = typeof parseInt(maxVar);
    if (!maxVar) {
        alert('Строка не может быть пустой. Пожалуйста, ведите минимальное значение');
        finisfNumberTwoo()
    } else if (maxParseType == "number") {
        alert('Ваше значение ' + randomize(minVar, maxVar));
    } else if (maxParseType == "string") {
        alert('Значение не может содержать символы. Пожалуйста, ведите минимальное значение');
        finisfNumberTwoo()
    }
}
