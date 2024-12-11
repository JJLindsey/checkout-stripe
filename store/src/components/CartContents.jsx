import React, {useContext} from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../productStore'
import { Box, Button, Divider, Typography } from '@mui/material'

export default function CartContents(props) {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)

    const handleIncrement = () => {
      cart.addOneToCart(productData.id)
    }
    const handleDecrement = () => {
      if (quantity > 1) {
        cart.removeOneFromCart(productData.id, quantity - 1)
      } else {
        cart.deleteFromCart(productData.id)
      }
    }
  return (
    <>
        <Box sx={{mb: 2}}>
            <Typography variant='h6'>{productData.title}</Typography>
            {productData.image && (
              <img
                src={productData.image}
                alt={productData.title}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "16px",
                  borderRadius: "8px",
                }}
              />
            )}
            {/* <Typography>item count: {quantity}</Typography> */}
            <Typography variant='h6'>{quantity} @ $ {(quantity * productData.price).toFixed(2)} </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={handleDecrement}
              >
                -
              </Button>
              <Typography variant="body1">{quantity}</Typography>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={handleIncrement}
              >
                +
              </Button>
            </Box>
            <Button variant='contained' onClick={() => cart.deleteFromCart(id)} sx={{mb: 2}}>Remove</Button>
            <Divider/>
        </Box>
    </>
  )
}
