const DATA = [
    {
        id: 1,
        name: 'Fruits',
        products: [
            {
                id: 'fruits-id-1',
                name: 'Apples',
                price: 10,
                description: 'An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.'
            },
            {
                id: 'fruits-id-2',
                name: 'Mango',
                price: 20,
                description: 'A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated between northwestern Myanmar'
            },
            {
                id: 'fruits-id-3',
                name: 'Pineapple',
                price: 40,
                description: 'The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.'
            }
        ]
    },
    {
        id: 2,
        name: 'Vegatables',
        products: [
            {
                id: 'vege-id-4',
                name: 'Potatoes',
                price: 9,
                description: 'Potatoes are a nutrient-dense powerhouse, that provides the energy, potassium and vitamin C you need to fuel your day.'
            },
            {
                id: 'vege-id-5',
                name: 'Tomatoes',
                price: 15,
                description: 'Our Growing Tomatoes Guide covers when to plant, the best way to grow tomatoes, how long it takes a tomato to bear fruit, and what tomatoes need to thrive.'
            }
        ]
    },
    {
        id: 3,
        name: 'Berries',
        products: [
            {
                id: 'berry-id-6',
                name: 'Blueberry',
                price: 100,
                description: 'Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries.'
            },
            {
                id: 'berry-id-7',
                name: 'Strawberry',
                price: 100,
                description: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.'
            }
        ]
    }
];

showCategories(DATA);
