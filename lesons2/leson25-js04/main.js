;(function () {
    var objVar = {
        key1: 'val key 1',
        key2: 12345,
        key3: {
            key2: 'wqeqwre',
        }
    };
    console.log(objVar.key1);
    console.log(objVar.key3.key2);

    console.log(objVar);
    objVar.key4 = 'added prop';
    console.log(objVar);

    console.log(objVar['key2']);
    objVar.key2 =  321321;
    console.log(objVar.key2);
    objVar['key2'] =  321321321321;

    var arrVar = [
        ['Ivan', 'Danil', 'Marina', 'Anna'],
        [22, 33, 4, 678]
    ];
    console.log(arrVar[0][1]);
    console.log('length ', arrVar.length); //последний индекс массива + 1
    console.log('метод добавляет элемент и возвращает его индекс', arrVar[0].push('Vasya'));
    console.log('метод добавляет элемент и возвращает его индекс', arrVar[0].unshift('Nadya'));
    console.log(arrVar[0].pop());
    console.log(arrVar[0].shift());
    console.log(arrVar[0].splice(1, 1));
    console.log(arrVar[0]);

    console.log(objVar.key1.length);//длина приводится и к строке
    console.log(objVar.key1[1]);

    var newStr = '';
    for (var key in objVar.key1) {
        console.log(key, objVar.key1[key]);
        if (objVar.key1[key] == ' ') {
            newStr = newStr + '_';
        } else {
            newStr = newStr + objVar.key1[key];
        }
    }
    console.log(newStr);
    objVar.key1 = newStr;


    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250,
        "Маша": "Маша молодец!"
    };
    var sum = 0;
    for (var salary in salaries) {
        if (parseInt(salaries[salary]))
        sum += parseInt(salaries[salary]);
    }
    console.log(sum);
    console.log(salaries["Маша"]);
    console.log(salaries["Маша"].split(' '));

    var names = ['Ivan', 'Danil', 'Marina', 'Anna'];
    console.log(names);
    console.log('У нас работают: ' + names.join(', '));

})();