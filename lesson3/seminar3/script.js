//task1
// let userName = prompt('Введите ваше имя:');
// let userSurName = prompt('Введите вашу фамилию:');
// let userAge = prompt('Введите ваш возраст:');

// function helloUser(Name, SurName, Age) {
//     alert('Привет, ' + SurName + ' ' + Name + ', с возрастом ' + Age + ' лет!')
// }

// helloUser(userName, userSurName, userAge);

//task2
// let userNumber = prompt('Введите число:');

// let squareOfNumber = (Number) => { return Number ** 2 };

// function showResult() {
//     alert(squareOfNumber(userNumber));
// }

// showResult();

//task3
// let userNumber = prompt('Введите число:');

// function polarityOfNumber(number) {
//     if (number >= 0) {
//         if (number == 0) {
//             alert('число равно 0, оно не положительное, не отрицательное.');
//         } else {
//             alert('+++');
//         }
//     } else {
//         alert('---');
//     }
// }
// polarityOfNumber(userNumber);

//task4
// let userNumber = prompt('Введите число, квадратный корень которого нужно вычислить:');

// function squareRootNumber(number) {
//     let rootNumber = (number) => Math.sqrt(number);
//     alert(rootNumber(number));
// }

// squareRootNumber(userNumber);

//task5
// let userNumber1 = prompt('Введите число №1:');
// let userNumber2 = prompt('Введите число №2:');

// function comparator(number1, number2) {
//     if (number1 < number2) {
//         alert(number1 + ' меньше, чем ' + number2);
//     } else if (number1 === number2) {
//         alert(number1 + ' равно числу ' + number2);
//     } else {
//         alert(number1 + ' больше, чем ' + number2);
//     }
// }

// comparator(userNumber1, userNumber2);

//task6
// let userDay = Number(prompt('Введите число от 1 до 7'));

// function dayOfWeek(day) {
//     if (day >= 1 && day <= 7) {
//         if (day === 1) {
//             alert('Это понедельник');
//         } else if (day === 2) {
//             alert('Это вторник');
//         } else if (day === 3) {
//             alert('Это среда');
//         } else if (day === 4) {
//             alert('Это четверг');
//         } else if (day === 5) {
//             alert('Это пятница');
//         } else if (day === 6) {
//             alert('Это суббота');
//         } else {
//             alert('Это воскресенье');
//         }
//     } else {
//         alert('число не в диапазоне от 1 до 7');
//     }
// }

//varian2

// function dayOfWeek(day) {
//     switch (day) {
//         case 1:
//             alert('Это понедельник')
//             break;
//         case 2:
//             alert('Это вторник')
//             break;
//         case 3:
//             alert('Это среда')
//             break;
//         case 4:
//             alert('Это четверг')
//             break;
//         case 5:
//             alert('Это пятница')
//             break;
//         case 6:
//             alert('Это суббота')
//             break;
//         case 7:
//             alert('Это воскресенье')
//             break;
//         default:
//             alert('число не в диапазоне от 1 до 7')
//             break;
//     }
// }

// dayOfWeek(userDay);

// dayOfWeek(userDay);

//task7

// let userTime = Number(prompt('Сколько времени (1-24):'));
// let userName = prompt('Ваше имя?');

// function hello(time, name) {
//     let timeOfDay;
//     if (time >= 4 && time <= 11) {
//         timeOfDay = 'Доброе утро';
//     } else if (time >= 12 && time <= 16) {
//         timeOfDay = 'Добрый день';
//     } else if (time >= 17 && time <= 24) {
//         timeOfDay = 'Добрый вечер';
//     } else if (time >= 1 && time <= 3) {
//         timeOfDay = 'Доброй ночи';
//     }
//     alert(timeOfDay + ', ' + name);
// }

// hello(userTime, userName);