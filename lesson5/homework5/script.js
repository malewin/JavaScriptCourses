//task1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

console.log('Задача 1:');
for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

//task2
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log('Задача 2:');

console.log(post['author']);
console.log(post['comments'][0]['rating']['dislikes']);
console.log(post['comments'][1]['userId']);
console.log(post['comments'][1]['text']);

//task3
const productss = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

productss.forEach(element => {
    element['price'] *= 0.85
});
console.log("Задача 3:");
console.log(productss);

//task4

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const productFilter = products.filter((productHaveImg) => {
    if (productHaveImg['photos'] && productHaveImg.photos.length > 0) return true
    return false
});
console.log('Задача 4. Пункт 1:');
productFilter.forEach(element => {
    console.log(element);
});

const productPriceToHigh = products.sort((a, b) => {
    return (a['price'] - b['price'])
});
console.log('Задача 4. Пункт 2:');
productPriceToHigh.forEach(element => {
    console.log(element);
});

//task5

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const week = {};

for (let i = 0; i < en.length; i++) {
    week[en[i]] = 0;
    for (let j = 0; j < ru.length; j++) {
        week[en[j]] = `${ru[j]}`;
    }
}
console.log('Задача 5:');
console.log(week);