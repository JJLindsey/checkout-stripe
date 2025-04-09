const productsBeauty = [
    {
        id: 'price_1QUeKgAnJ5foZzEm0RdGAhlH',
        title: 'Body Lotion',
        price: 34.00,
        image: '/assets/cleanskinLotion.png',
        rating: 4.0
    },
    {
        id: 'price_1QUeL0AnJ5foZzEmlrwkp68o',
        title: 'Soap Bundle',
        price: 24.00,
        image: './assets/soap.png',
        rating: 4.0
    },
    {
        id: 'price_1QUeDPAnJ5foZzEmL1VYmnY4',
        title: 'Moisturizer',
        price: 44.00,
        image: './assets/moisturizer.png',
        rating: 4.5
    },
    {
        id: 'price_1QUeJxAnJ5foZzEmI5BlZIdi',
        title: 'Serum',
        price: 54.00,
        image: './assets/serum.png',
        rating: 5.0
    },
]

function getProductData(id) {
    let productData = productsBeauty.find(product => product.id === id)
    
    if (productData === undefined) {
        console.log('Product id does not exist for ID: ' + id)
    }
    return productData
}
export { productsBeauty, getProductData }