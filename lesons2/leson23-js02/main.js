var qweq = 9%2;//остаток от деления
var sum = 10;
var sum =+ 5;//15
sum == 10;//false
sum != 9;// true - не равно
sum >= 15;// true - больше или равно
sum <= 17;// true  - меньше или равно
sum < 15;//false
sum > 15;//false

var i = 23;
i++;//инкремент - увеличение на 1
i--;//дикремент - уменьшение на 1
console.log(i);
var i2 = 1;
console.log(i2++);//сначало вывелось 1, а потом стала 2
console.log(i2);
console.log(++i2); //сначало прибавляется, а потом выводится

var strVariable = 'Hello';
var name = 'Ivan';
console.log(strVariable + ' ' + name + '!');
var longStr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur mollitia quibusdam sapiente veritati' +
    's voluptatibus. Asperiores consectetur doloremque excepturi, magni nam nostrum obcaecati officia omnis perspiciatis' +
    ' quod repellat suscipit vero vitae. Blanditiis commodi libero, minima modi mollitia obcaecati vel velit voluptate.';

var obj = {
    val1: 1, ourVal2: 'srf', v3: false,
    innerObj: {
        val1: 23456
    }
}; //тип - объект, состоит из неодной переменной
console.log(obj.val1);//
console.log(obj['val1']);//обращение к объекту как к массиву
console.log(obj.innerObj.val1);

var array = [
    1,
    'asdf',
    true,
    [],
    {
        val: 'sdf',
        val2: 11,
    aer:[1,33,121445, 'sdffgh']
    }
];//массив
console.log(array[4].aer[3]);

console.log(1999 >= 'sdfes');
console.log(18 >= parseInt('18лет'));
console.log("____________________________");

var age = 2;
if (age > 18 && age <90 || age >= 100) {
    console.log(true);
} else {
    console.log(false);
}
console.log(!(age > 18));// ! - логический оператор отрицания
console.log(1 === "1");// строгое сравнение не только true/false

var result;
var male = 'girl';
if (age > 18) {
    result = true;
} else {
    result = false;
};
result = (age > 18) ? true : false;//сокращённый код вышеприведённого
console.log(result);

if (age > 18) {
    console.log('Выполнилось первое условие');
} else if(!age % 2) {//проверка на чётное количество лет
    console.log('чётное количество лет');
} else if (male == 'girl') {
    console.log('мы рады вас видеть');
} else {
    console.log('извините, поищите другой сайт');
}

var k = 10;
while (k > 0) {
    console.log(k--);
}

var kk = 10;
do {
    console.log(kk++);
} while (kk > 10 && kk < 20);

console.log('цикл for');
for (i = 10; i > 0; i--) {
    console.log(i);
}