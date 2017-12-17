function randomize(min, max) {
    return Math.round(Math.random() * (max - min) +min);
}
var minVar = prompt('Введите минимальное значение');
var maxVar = prompt('Введите максимальное значение');
var minParseType = typeof parseInt(minVar);
var maxParseType = typeof parseInt(maxVar);
alert(typeof minParse);
if (minParseType == 'number' && maxParseType  == 'number') {
    console.log(randomize(parseInt(minVar), parseInt(maxVar)));
}