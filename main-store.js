const showCategories = () => {
        const categoriesElem = document.querySelector('.categories');
        clearElements(['categories', 'products', 'details']);
    
        DATA.forEach(({name, id}) => {
            const categoryElem = document.createElement('div')
    
            categoryElem.setAttribute('data-category-id', id);
            categoryElem.textContent = name;
            categoryElem.onclick = showProducts;
    
            categoriesElem.appendChild(categoryElem);
        })
    }

const showProducts = ({target}) => {
    clearElements(['products', 'details']);

    const productsElem = document.querySelector('.products');
    const categoryId = target.getAttribute('data-category-id');
    const products = findProducts(DATA, +categoryId);

    products.forEach(({name, id}) => {
        const productElem = document.createElement('div');

        productElem.setAttribute('data-category-id', categoryId);
        productElem.setAttribute('data-product-id', id);
        productElem.textContent = name;
        productElem.onclick = showDetails;

        productsElem.appendChild(productElem);
    });
};

const showDefaultCategories = () => {
    showCategories(DATA);
}
const savedProducts = {};

const showDetails = ({target}) => {
    clearElements(['details']);

    const detailsElem = document.querySelector('.details');
    const categoryId = target.getAttribute('data-category-id');
    const productId = target.getAttribute('data-product-id');
    
    const makeOrderButtonElem = document.createElement('button');
    const product = findProducts(DATA, +categoryId, productId);

    makeOrderButtonElem.textContent = `Order ${product.name}`;
    makeOrderButtonElem.style = 'width:200px;height:50px;border-radius:50px;border:1px  solid #ddd;-moz-box-shadow: 0px 0px 8px  #fff;color:rgb(40, 15, 203)'
    makeOrderButtonElem.addEventListener('click', () => {
        savedProducts[categoryId] = savedProducts[categoryId] || {};
        savedProducts[categoryId][productId] = product;

        alert('Your product successfully ordered');
        console.log(savedProducts);
    });
    detailsElem.appendChild(makeOrderButtonElem);
    console.log('Details', product);

    const clearButtonElem = makeOrderButtonElem;
    clearButtonElem.addEventListener('click', showDefaultCategories);
};

const clearElements = classList => {
    for (let className of classList) {
        const elem = document.querySelector(`.${className}`);

        elem.innerHTML = '';
    }
}

const findProducts = (data, categoryId, productId = null) => {
    const products = data.find(({id}) => id === categoryId).products;

    if (productId) {
        return products.find(({id}) => id === productId);
    }

    return products;
};
