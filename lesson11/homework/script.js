const data = JSON.parse(dataProducts);
console.log(data);

const items = document.querySelector('.shop_choices');

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

    itemDesc.appendChild(itemName);
    itemDesc.appendChild(itemText);
    itemDesc.appendChild(itemPrice);
    item.appendChild(itemImg);
    item.appendChild(itemDesc);
    items.appendChild(item);
});