//task1
// let userNumber1 = prompt('Введите число №1 которое следует возвести в куб:'); //2
// let userNumber2 = prompt('Введите число №2 которое следует возвести в куб:'); //3

// let cubeOfNumber = (number) => { return number ** 3 };

// function showResult() {
//     alert(`Сумма кубов ваших чисел равна = ${cubeOfNumber(userNumber1) + cubeOfNumber(userNumber2)}`);
//     console.log(`Сумма кубов ваших чисел равна = ${cubeOfNumber(userNumber1) + cubeOfNumber(userNumber2)}`);
// }

// showResult();

//task2

// let userNumber = Number(prompt('Введите размер заработной платы для расчёта её за вычетом 13% налога: '));

// // console.log(typeof(userNumber));

// function countSalary(userNumber) {
//     if ((Number(userNumber)) != userNumber) {
//         alert('Вы ввели не число! Попробуйте снова.');
//     } else {
//         let userSalary = userNumber * 0.87;
//         alert(`Зарплата за вычетом 13% налога равна: ${userSalary}`);
//     }
// }

// countSalary(userNumber);

//task3
// let userNumber1 = Number(prompt('Введите число №1'));
// let userNumber2 = Number(prompt('Введите число №2'));
// let userNumber3 = Number(prompt('Введите число №3'));

// function max(number1, number2, number3) {
//     if (number1 >= number2 && number1 - number2 !== 0) {
//         if (number1 >= number3 && number1 - number3 !== 0) {
//             alert(`Число ${number1} максимальное`);
//         } else {
//             alert(`Число ${number3} максимальное`);
//         }
//     } else if (number2 >= number1 && number2 - number1 !== 0) {
//         if (number2 >= number3 && number2 - number3 !== 0) {
//             alert(`Число ${number2} максимальное`);
//         } else {
//             alert(`Число ${number3} максимальное`);
//         }
//     } else if (number1 === number2) {
//         if (number2 > number3) {
//             alert(`Число ${number2} максимальное`);
//         } else {
//             alert(`Число ${number3} максимальное`);
//         }
//     } else if (number2 === number3) {
//         if (number2 > number1) {
//             alert(`Число ${number2} максимальное`);
//         } else {
//             alert(`Число ${number1} максимальное`);
//         }
//     }
//     // else if (number1 === number2 && number1 === number3) {
//     //     alert('Все числа равны');
//     // }
// }

// max(userNumber1, userNumber2, userNumber3);

//task4

let userNumber1 = Number(prompt('Введите число №1'));
let userNumber2 = Number(prompt('Введите число №2'));

let sum = (number1, number2) => { return number1 + number2 }

let multiply = (number1, number2) => { return number1 * number2 }

function div(number1, number2) {
    if (number2 === 0) {
        return ('На ноль делить нельзя');
    } else {
        return number1 / number2;
    }
}

function difference(number1, number2) {
    if (number1 === number2) {
        return 0;
    } else {
        if (number2 > number1) {
            return number2 - number1;
        } else {
            return number1 - number2;
        }
    }
}

alert(`Cложение: ${sum(userNumber1,userNumber2)}, Разность: ${difference(userNumber1, userNumber2)}, Умножение: ${multiply(userNumber1, userNumber2)}, Деление: ${div(userNumber1,userNumber2)}`);