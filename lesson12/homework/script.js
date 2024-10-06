const data = JSON.parse(dataProducts);
const items = document.querySelector('.shop_choices');
const cartItemsContainer = document.createElement('div');
const cartTitle = document.createElement('h3');
cartTitle.setAttribute('class', 'basket_cart_heading');
cartTitle.textContent = 'Cart items';
cartTitle.style.display = 'none'; // Скрываем заголовок до первого добавления товара
const cart = document.createElement('div');
cart.classList.add('cart');
cart.appendChild(cartTitle);
cart.appendChild(cartItemsContainer);
document.querySelector('.footer').insertBefore(cart, document.querySelector('.subscribe'));

// Добавление элементов в раздел выбора
data.forEach(element => {
    const item = document.createElement('div');
    const itemImg = document.createElement('img');
    const itemDesc = document.createElement('div');
    const itemName = document.createElement('h3');
    const itemText = document.createElement('p');
    const itemPrice = document.createElement('p');

    item.setAttribute('class', 'item');
    itemImg.setAttribute('class', 'item_img3');
    itemDesc.setAttribute('class', 'title_price');
    itemName.setAttribute('class', 'item_heading2');
    itemText.setAttribute('class', 'item_text');
    itemPrice.setAttribute('class', 'item_price');

    itemImg.src = `${element.urlImg}`;
    itemName.textContent = `${element.name}`;
    itemText.textContent = `${element.description}`;
    itemPrice.textContent = `${element.price}`;

    item.addEventListener('click', () => {
        addItemToCart(element);
    });

    itemDesc.appendChild(itemName);
    itemDesc.appendChild(itemText);
    itemDesc.appendChild(itemPrice);
    item.appendChild(itemImg);
    item.appendChild(itemDesc);
    items.appendChild(item);
});

// Функция для добавления элемента в корзину
function addItemToCart(itemData) {
    // Отображаем заголовок корзины только при первом добавлении
    if (cartTitle.style.display === 'none') {
        cartTitle.style.display = 'block';
    }

    const cartItem = document.createElement('div');
    const itemImg = document.createElement('img');
    const itemContent = document.createElement('div');
    const contentDesc = document.createElement('div');
    const crossImg = document.createElement('img');
    const descName = document.createElement('h3');
    const descPrice = document.createElement('p');
    const descPriceAmount = document.createElement('span');
    const descColor = document.createElement('p');
    const descSize = document.createElement('p');
    const descQuantity = document.createElement('p');

    cartItem.setAttribute('class', 'item_box');
    itemImg.setAttribute('class', 'item_box_img');
    itemImg.src = `${itemData.urlImg}`;
    itemContent.setAttribute('class', 'item_box_content');
    itemContent.style.justifyContent = 'space-between';
    contentDesc.setAttribute('class', 'item_box_content_desc');
    crossImg.classList.add('cross');
    crossImg.src = `./img/vector.png`;

    descName.textContent = `${itemData.name}`;
    descPriceAmount.textContent = `${itemData.price}`;
    descPrice.textContent = `Price: `;
    descColor.textContent = `Color: ${itemData.color || 'N/A'}`;
    descSize.textContent = `Size: ${itemData.size || 'N/A'}`;
    descQuantity.textContent = `Quantity: 1`;

    contentDesc.appendChild(descName);
    descPrice.appendChild(descPriceAmount);
    contentDesc.appendChild(descPrice);
    contentDesc.appendChild(descColor);
    contentDesc.appendChild(descSize);
    contentDesc.appendChild(descQuantity);
    itemContent.appendChild(contentDesc);
    itemContent.appendChild(crossImg);
    cartItem.appendChild(itemImg);
    cartItem.appendChild(itemContent);

    // Удаление товара из корзины
    crossImg.addEventListener('click', () => {
        cartItem.remove();
        if (cartItemsContainer.children.length == 0) {
            cartTitle.style.display = 'none'; // Скрываем заголовок, если нет товаров
        }
    });

    cartItemsContainer.appendChild(cartItem); // Добавляем товар в корзину
}