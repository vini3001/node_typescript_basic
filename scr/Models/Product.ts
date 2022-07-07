type Product = {
    title: string,
    price: number
}

let products: Product[] = [
    {title: 'ProdutoX', price:89.50},
    {title: 'ProdutoY', price:100.00},
    {title: 'ProdutoZ', price:125.00}
]

export const Product = {
        getAll: (): Product[] =>{
            return products;
        },
        getPriceAfter: (price: number): Product[] =>{
            return products.filter( item => item.price >= price)
            }

        }
