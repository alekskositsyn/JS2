class BasketList {
    constructor (container = '.basket-list') {
        this.container = container;
        this.products = [];
        this.renderBasketList()


    }

    addProduct(){
        pass
    }

    removeProduct(){
        pass
    }

    getSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    }

}

class BasketItem {
    constructor (product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
    }

    getHTMLString() {
        return `
        <tr>
            <th scope="row">${product.id}</th>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td class="productCount" data-id="${product.id}">1</td>
            <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
        </tr>
    `;
    }
}
