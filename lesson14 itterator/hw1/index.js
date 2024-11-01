console.log("---------Task1---------");

const musicCollection = {
    albums:
    [{
        title: "Magic City",
        artist: "LSP",
        year: 2015
    },
    {
        title: "Fluddality",
        artist: "GONE.Fludd",
        year: 2024
    },
    {
        title: "2004",
        artist: "Skryptonite",
        year: 2020
    }
    ],
    [Symbol.iterator]: function(){
        let index = 0;
        const albums = this.albums;

        return{
            next: () => {
                if (index < albums.length) {
                    return { value: albums[index++], done: false};
                } else {
                    return {done:true};
                }
            }
        };
    }
};

for (const album of musicCollection){
    console.log(`${album.artist} - ${album.title} (${album.year})`);
}

console.log("---------Task2---------");

const foodMap = new Map();
foodMap.set('Viktor', {'pizza' :['margarita','peperoni']} ).set('Olga',{'Sushi': ['philadelphia', 'california']}).set('Dmitriy',{'Desserts':['tiramisu', 'cheesecake']});

console.log(foodMap);

const ordersMap = new Map();
ordersMap.set(clientAlex = { name:'Alex'}, ['peperoni','tiramisu']).set(clientMaria = { name:'Maria'}, ['california','margarita']).set(clientIrina = { name:'Irina'}, ['cheesecake']);

console.log(ordersMap);

// Для доступа к информации о том, кто готовит каждое блюдо
const findCookForDish = (dish) => {
    for (const [chef, dishes] of foodMap) {
        for (const [type, items] of Object.entries(dishes)) {
            if (items.includes(dish)) {
                return chef;
            }
        }
    }
    return null;
};

for (const [client, orders] of ordersMap) {
    console.log(`Клиент ${client.name} заказал: ${orders.join(', ')}`);
    for (const dish of orders) {
        console.log(`Блюдо "${dish}" готовит: ${findCookForDish(dish)}`);
    }
}