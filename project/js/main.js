// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. 
//      Продумайте, какие методы понадобятся для работы с этими сущностями.
// 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

class ProductList {
    #goods;
    #allProducts;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];
        this.#fetchGoods();
        this.#render();
    }

    #fetchGoods() {
        this.#goods = [{
                id: 1,
                title: 'Notebook',
                price: 20000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 1500
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500
            },
        ];
    }

    sumPrice() {
        return this.#goods.reduce((sum, {
            price
        }) => sum + price, 0);
    }

    #render() {
        const container = document.querySelector(this.container);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);

            this.#allProducts.push(productObject);

            container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://placeimg.com/200/150/tech') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" >
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3>${this.title}</h3>
                          <p>${this.price} \u20bd</p>
                          <button class="btn btn-success mt-3 toBasketBtn" data-price="${this.price}" data-name="${this.title}" data-id="${this.id}">Купить</button>
                      </div>
                  </div>`;
    }
}

const productList = new ProductList();





// const renderProduct = (item, img = 'https://placehold.it/200x150') => {
//     return `<div class="product-item" data-id="${item.id}">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${item.title}</h3>
//                     <p>${item.price} \u20bd</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//               </div>`;
// };

// const catalogInit = (list) => {
//     const productList = list.map((item) => renderProduct(item)).join('');
//     console.log(productList);
//     document.querySelector('.products').insertAdjacentHTML("beforeend", productList)
// };

// catalogInit(products);