const showCategories = categories => {

    const categoriesElem = document.querySelector('.categories');
    categoriesElem.innerHTML = '';

    categories.forEach(({name, id}) => {
        const categoryElem = document.createElement('div');

        categoryElem.setAttribute('data-category-id', id);
        categoryElem.textContent = name;
        categoryElem.onclick = showProducts;

        categoriesElem.appendChild(categoryElem);
    });
};

const showProducts = ({target}) => {

    const productsElem = document.querySelector('.products');
    const categoryId = target.getAttribute('data-category-id');
    const products = findProducts(DATA, +categoryId);
    productsElem.innerHTML = '';

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

    const detailsElem = document.querySelector('.details');
    const categoryId = target.getAttribute('data-category-id');
    const productId = target.getAttribute('data-product-id');
    detailsElem.innerHTML = '';
    
    const orderButtonElem = document.createElement('button');
    const product = findProducts(DATA, +categoryId, productId);

    orderButtonElem.textContent = `Order ${product.name}`;
    orderButtonElem.style = 'width:200px;height:50px;border-radius:50px;border:1px  solid #ddd;-moz-box-shadow: 0px 0px 8px  #fff;color:rgb(40, 15, 203)'
    orderButtonElem.addEventListener('click', () => {
        savedProducts[categoryId] = savedProducts[categoryId] || {};
        savedProducts[categoryId][productId] = product;

        alert('Your product successfully ordered');
        console.log(savedProducts);
    });
    detailsElem.appendChild(orderButtonElem);
    console.log('Details', product);

    const clearButtonElem = orderButtonElem;
    clearButtonElem.addEventListener('click', showDefaultCategories);
};

const findProducts = (data, categoryId, productId = null) => {
    const products = data.find(({id}) => id === categoryId).products;

    if (productId) {
        return products.find(({id}) => id === productId);
    }
    return products;
};
