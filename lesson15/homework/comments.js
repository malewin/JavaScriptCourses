const initialData = [
    {
    product: "Apple iPhone 13",
    reviews: [
    {
    id: "1",
    text: "Отличный телефон! Батарея держится долго.",
    },
    {
    id: "2",
    text: "Камера супер, фото выглядят просто потрясающе.",
    },
    ],
    },
    {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
    {
    id: "3",
    text: "Интересный дизайн, но дорогой.",
    },
    ],
    },
    {
    product: "Sony PlayStation 5",
    reviews: [
    {
    id: "4",
    text: "Люблю играть на PS5, графика на высоте.",
    },
    ],
    },
    ];

const input = document.querySelector('.userComment');
const btn = document.querySelector('.btn');
const wall = document.querySelector('.commentsWall');

function addComment() {
    btn.addEventListener('click', () => {
        const inpText = input.value;
        try {
            if (inpText.length < 50 || inpText.length > 500) {
                throw new Error('Длина отзыва должна быть от 50 до 500 символов.');
            }

            const comment = document.createElement('p');
            comment.innerHTML = inpText;
            wall.appendChild(comment);
        } catch (error) {
            alert(error.message); 
        } finally {
            input.value = ""; 
        }
    });
}

function autoComment() {
    for (let item of initialData){
        const nameProduct = document.createElement('p');
        nameProduct.innerText = item.product;
        wall.appendChild(nameProduct);
        for (let review of item.reviews){
            const userID = document.createElement('p');
            const userComment = document.createElement('p');
            userID.innerText = `ID: ${review.id}`;
            userComment.innerText = review.text;
            wall.appendChild(userID);
            wall.appendChild(userComment);
        }
        const newRaw = document.createElement('br');
        wall.appendChild(newRaw);
    }
};
autoComment();
addComment();