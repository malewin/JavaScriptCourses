//task1

// for (let i = 0; i < 11; i++) {
//     let element = i;
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - это чётное число`);
//     } else {
//         console.log(`${i} - это нечётное число`);
//     }
// }

//task2

// let numberArray1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(numberArray1);
// let numberArray2 = (numberArray1.slice(0, 3));
// numberArray2.push(numberArray1[5]);
// numberArray2.push(numberArray1[6]);
// console.log(numberArray2);

//task3
let array = [];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function sumElemsOfArr(arr) {
    let sum = 0;
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        sum = sum + arr.pop();
    }
    return sum;
}

function minElemOfArr(arr) {
    let valueOfCurrentIndex = arr[0]
    while (arr.length != 1) {
        if (valueOfCurrentIndex >= arr[1]) {
            arr.shift();
            valueOfCurrentIndex = arr[0];
        } else {
            arr[1] = valueOfCurrentIndex;
            arr.shift();
        }
    }
    return valueOfCurrentIndex;
}

function search3(arr) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element === 3) {
            flag = true;
            break
        } else {
            continue
        }
    }
    if (flag === true) {
        return "В данном массиве есть число 3";
    } else {
        return "В данном массиве нет числа 3";
    }
}


for (let i = 0; i < 5; i++) {
    let element = getRandomNumber(0, 10);
    array.push(element);
}

console.log(array);
let cloneOfGeneratedArray = array.slice();
console.log(search3(array));
console.log(`Сумма элементов массива: ${sumElemsOfArr(array)}`);
console.log(`Минимальное значение в массиве: ${minElemOfArr(cloneOfGeneratedArray)}`);

//task4

// let starArr = [];
// for (let i = 0; i < 20; i++) {
//     starArr.push(`x`);
//     let cloneArr = starArr.join('');
//     console.log(cloneArr);
// }