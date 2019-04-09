"use strict";

                          // Задание 1
var a = '1';
if (a === '1') {
  console.log('Верно'); // выведет Верно, т.к. переменная равна и по значанию и по типу
} else {
  console.log('Неверно');
}
a = 1;
if (a === '1') {
  console.log('Верно');
} else {
  console.log('Неверно'); // выведет Неверно, т.к. переменная равна по значанию, но НЕ по типу
}
a = 3;
if (a === '1') {
  console.log('Верно');
} else {
  console.log('Неверно'); // выведет Верно, т.к. переменная Не равна ни по значанию, ни по типу
}
                            // Задание 2

// вариант 1
var item = false;
// длинная запись
if (item !=true){
  console.log('Верно');
} else {
  console.log('Неверно');
}
// короткая запись
item != true ? console.log('Верно') : console.log('Неверно');

// вариант 2
var item = true;
// длинная запись
if (item !=true){ 
  console.log('Верно');
} else {
  console.log('Неверно');
}
// короткая запись
item != true ? console.log('Верно') : console.log('Неверно');

                            // Задание 3
var a = 4;
if (a > 0 && a < 4){
  console.log('Верно');
} else {
  console.log('Неверно');
}

a = 0;
if (a > 0 && a < 4){
  console.log('Верно');
} else {
  console.log('Неверно');
}

a = -3;
if (a > 0 && a < 4){
  console.log('Верно');
} else {
  console.log('Неверно');
}

var a = 2;
if (a > 0 && a < 4){
  console.log('Верно');
} else {
  console.log('Неверно');
}

                            // Задание 4
var a = 7, b = 6;
if(a > 3 && a < 12 || b >= 7 && b < 12){
  console.log('Верно');
} else {
  console.log('Неверно');
}
                            // Задание 5
var currentMonth = prompt('Введите порядковый номер текущего месяца..');
if(currentMonth == 12 || currentMonth > 0 && currentMonth <= 2) {
  alert('Пора утепляться, сейчас, по видимости, зима');
} else if(currentMonth >= 3 && currentMonth <= 5 ){
  alert('Прекрасная пора года - весна!');
} else if(currentMonth >= 6 && currentMonth <= 8){
  alert('Очень жарко, так как лето');
} else if(currentMonth >= 9 && currentMonth <= 11) { 
  alert('Хм... дождливая осень');
} else {
    alert('Эй! Мы не на Марсе! На Земле только 12 месяцев!Введите число от 1 до 12.');
}
                            // Задание 6
var i;                          
for (var i = 0; i <= 100; i+= 2) {
  console.log(i);
}

var i = 0;
while (i <= 100){
  console.log(i);
  i+=2;
}
