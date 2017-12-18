function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
var minVar = prompt('Введите минимальное значение');
var maxVar = prompt('Введите максимальное значение');
var minParseType = typeof parseInt(minVar, 10);
var maxParseType = typeof parseInt(maxVar);
alert('minParse' + typeof minParseType);
alert(parseInt(maxVar))
alert(typeof minVar + minVar)
// if (minParseType == 'number' && maxParseType  == 'number') {
//     console.log(randomize(parseInt(minVar), parseInt(maxVar)));
//}