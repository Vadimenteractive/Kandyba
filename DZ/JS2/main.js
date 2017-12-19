function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
var minVar = prompt('Введите минимальное значение');
var maxVar = prompt('Введите максимальное значение');
var minParseType = typeof parseInt(minVar);
var maxParseType = typeof parseInt(maxVar);
alert('minParse' + typeof minParseType);
alert(parseInt(maxVar))
alert(typeof minVar + minVar)
if (+minParseType == 'string' && +maxParseType  == 'string') {
    alert('Ваше значение ' + randomize(+minVar, +maxVar));
}