// let a = prompt("Как тебя зовут?");
// alert("Привет, " + a + "!");

// let a = +prompt("Введите свой год рождения");
// const g = 2023;
// alert(g - a)

// let a = +prompt("Введите длинну стороны квадрата");
// alert(a * 4);

// let a = +prompt("Введите радиус окружности");
// const pi = 3.141;
// alert(pi * (a ** 2))

// let km = +prompt("Введите расстояние");
// let time = +prompt("Введите время");
// alert(km / time);

// let dol = +prompt("Введите количество евро")
// const euro = dol * 1.08;
// alert(euro)

// let gb = +prompt("Введите количество ГБ");
// flesh = gb * 1024;
// file = Math.floor(flesh / 820);
// alert(file)

// let a = +prompt("Введите сумму денег в кошельке");
// let b = +prompt("Введите цену одной шоколадки");
// let c = Math.floor(a / b);
// let d = a - c * b;
// alert("Вы сможете купить " + c + " шоколадок, у вас останется " + d + " рублей.");

// let a = +prompt("Введите трёхзначное число");
// b = a % 10;
// c = Math.floor(a / 10) % 10;
// d = Math.floor(a / 100);
// alert(b + "" + c + "" + d);

// let a = +prompt("Целое число");
// let b = (a / 2) * 10;
// let c = b % 10;
// alert((c > 0) + " True - число нечетное, false = чётное.");


// ? Дз 2


// var age = +prompt("Введите ваш возраст")
// if (age > 0 && age <= 12) {
// alert("вы - ребёнок")
// } else if (age > 12 && age <= 18) {
// alert("вы - подросток")
// } else if (age > 18 && age <= 60) {
// alert("вы - взрослый")
// } else if (age > 60) {
// alert("вы - пенсионер")
// }

// var number = prompt("введите число от 0 до 9 и получите символ")
// switch (number) {
//     default:
//         alert("я не это просил")
//         break
//     case "0":
//         alert(")")
//         break
//     case "1":
//         alert("!")
//         break
//     case "2":
//         alert("@")
//         break
//     case "3":
//         alert("#")
//         break
//     case "4":
//         alert("$")
//         break
//     case "5":
//         alert("%")
//         break
//     case "6":
//         alert("^")
//         break
//     case "7":
//         alert("&")
//         break
//     case "8":
//         alert("*")
//         break
//     case "9":
//         alert("(")
// }


// var a = +prompt("введите трехначное число")
// var num3 = a%10
// var num2 = (Math.floor(a / 10)) % 10
// var num1 = Math.floor(a / 100)
// if (num1 == num2 || num1 == num3 || num2 == num3) {
//     alert("в числе есть одинаковые цифры")
// } else {
//     alert("в числе нет одинаковых цифр")
// }


// var year = +prompt("введите год")
// if (year % 400 == 0) {
//     alert("год високосный")
// } else if (year % 4 == 0 && year % 100 != 0) {
//     alert("год високосный")
// } else {
//     alert("год не високосный")
// }


// var a = +prompt("Введите пятизначное число")
// let b = Math.floor(a / 100)
// let num1 = a % 10 * 100
// let num2 = Math.floor(a / 10) % 10 * 10
// let num3 = Math.floor(a / 100) % 10
// if (b == num1+num2+num3) {
//     alert("число является палиндромом")
// } else {
//     alert("число не является палиндромом")
// }


// var eud = +prompt("введите количество долларов")
// var valuta = prompt("Введите валюту: EUR, AZN, UAN")
// switch(valuta) {
//     case "AZN":
//         alert(eud * 1.7)
//         break
//     case "EUR":
//         alert(eud * 0.91897)
//         break
//     case "UAN":
//         alert(eud * 7.22)
//     default:
//         alert("не та валюта")
//         break
// }

// var a = +prompt("введите сумму покупки")
// if (a >= 200 && a <= 300) {
//     alert("К оплате " + (a - (a / 100 * 3)))
// } else if (a >= 301 && a <= 500) {
//     alert("К оплате " + (a - (a / 100 * 5)))
// } else if (a >= 501) {
//     alert("К оплате " + (a - (a / 100 * 7)))
// }

// var okr = +prompt("Введите длинну окружности")
// var sqr = +prompt("Введите периметр квадрата")
// let d = okr / 3.141
// let storona = sqr / 4
// if (d <= storona) {
//     alert("Круг впишется в квадрат")
// } else {
//     alert("Круг не впишется в квадрат")
// }

// let ball = 0
// var que1 = prompt("Назовите столицу России: Питер, Москва, Сочи")
// switch(que1) {
//     default:
//         alert("Такого варианта нет")
//         break
//     case "Питер":
//         alert("Неправильно!")
//         break
//     case "Москва":
//         alert("Правильно!")
//         ball++
//         break
//     case "Сочи":
//         alert("К счастью неправильно!")
// }
// var que2 = prompt("Назовите столицу Германии: Берлин, Манчестер, Сочи")
// switch(que2) {
//     default:
//         alert("Такого варианта нет")
//         break
//     case "Манчестер":
//         alert("Неправильно!")
//         break
//     case "Берлин":
//         alert("Правильно!")
//         ball++
//         break
//     case "Сочи":
//         alert("К счастью неправильно!")
// }
// var que3 = prompt("Назовите столицу США: Сочи, Рим, Вашингтон")
// switch(que3) {
//     default:
//         alert("Такого варианта нет")
//         break
//     case "Рим":
//         alert("Неправильно!")
//         break
//     case "Вашингтон":
//         alert("Правильно!")
//         ball++
//         break
//     case "Сочи":
//         alert("К счастью неправильно!")
// }
// alert("Вы набрали " + ball + " из 3 возможных баллов")


// var day = +prompt("Введите день")
// var month = +prompt("Номер месяца")
// var year = +prompt("Год")
// if (day <= 0 && day > 31) {
//     alert("такого числа не бывает")
// }
// if (month == 2 && year % 4 == 0 && year % 100 != 0 && day > 29) {
//     alert("такого числа не бывает")
// }
// if (day == 31 || (month == 2 && year % 4 == 0 && year % 100 != 0 && day == 29 && year % 400 == 0)) {   //TODO ДОДЕЛАТЬ ПОЗЖЕ
//     if (month == 12) {
//         month = 1
//         year++
//     } else {
//         month++
//     }
//     day = 1
// } else {
//     day++
// }
// alert("Завтра будет " + day + "." + month + "." + year)


//? Дз третьей недели

// let diap = +prompt("Начало диапазона")
// let diapend = +prompt("Конец диапазона")
// let sum = 0
// for (let i=diap; i<=diapend; i++) {
//     sum+=i
// }
// alert(sum)


// let a = +prompt("Введите первое число")
// let b = +prompt("Введите второе число")

// while (a != 0 && b != 0){
//     if(a > b){
//         a = a % b
//     } else {
//         b = b % a
//     }
// }

// alert(a+b);


let a = +prompt("Введите число")
for (let i = 1; i<=a; i++) {
    if (a % i == 0 && a != a && a != 1)
    []
}




// let date = new Date(2012, 1, 20, 3, 12, 0, 0) //! Для неуказанных значений автоматически выставляется 0
// alert(date)




// let man = {
//     name: "John"
// }
// console.log(Object.getOwnPropertyDescriptor(man, 'name'))
// //* configurable:true enumerable:true value:"John" writable:true



