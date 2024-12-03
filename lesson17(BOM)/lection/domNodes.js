console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes); // все элементы-теги в body по порядку
console.log(document.body.children); // все элементы в body но в одном экземпляре как в set.

//перебор коллекции на проверку div ли.

for (let val of document.body.children) {
    console.log(val.localName === 'div' ? 'It;s DIV' : 'It is not DIV');
}

for (let type of document.body.childNodes) {
    console.dir(type.nodeType);
}

// расшифровка цифр категорий нод на https://dom.spec.whatwg.org/#node

for (let vel of document.body.childNodes){
    console.dir(val.nodeValue);
}