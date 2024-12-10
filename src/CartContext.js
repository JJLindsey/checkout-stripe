import { createContext, useState } from "react"

import { productsBeauty, getProductData } from "./productStore"

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getCartTotal: () => {}
})

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([])

    //[ {id: 1, quantity: 2} ]
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity
        if (quantity === undefined) {
            return 0
        }
        return quantity
    }
    function addOneToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts([
                ...cartProducts,
                {
                    id: id,
                    quantity: 1
                }
            ])
        } else {
            setCartProducts(
                cartProducts.map(product => product.id === id ? 
                    {...product, quantity: product.quantity + 1}
                    :
                    product
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id)
        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(product => product.id === id ? 
                    {...product, quantity: product.quantity - 1}
                    :
                    product
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts => cartProducts.filter(currentProduct => {
                return currentProduct.id !== id
            })
        )
    }

    // function getCartTotal() {
    //     let totalCost = 0
    //     cartProducts.map((cartItem) => {
    //         const productData = getProductData(cartItem.id)
    //         totalCost += (productData.price * cartItem.quantity)
    //     })
    //     return totalCost
    // }

    function getCartTotal() {
        return cartProducts.reduce((total, cartItem) => {
            const productData = getProductData(cartItem.id)
            return total + (productData.price * cartItem.quantity)
        }, 0)
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getCartTotal
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider
//Context (cart, addToCart, removeCart)
//Provider -> provides react app access to all things in your context