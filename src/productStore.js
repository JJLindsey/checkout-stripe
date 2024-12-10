const productsBeauty = [
    {
        id: '1',
        title: 'Body Lotion',
        price: '$34.00'
    },
    {
        id: '2',
        title: 'Soap Bundle',
        price: '$24.00'
    },
    {
        id: '3',
        title: 'Moisturizer',
        price: '$44.00'
    },
    {
        id: '4',
        title: 'Serum',
        price: '$54.00'
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