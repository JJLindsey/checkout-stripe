import React, {useContext} from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../productStore'
import { Box, Button, Divider, Typography } from '@mui/material'

export default function CartContents(props) {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)
  return (
    <>
        <Box sx={{mb: 2}}>
            <Typography variant='h6'>{productData.title}</Typography>
            <Typography>item count: {quantity}</Typography>
            <Typography>$ {(quantity * productData.price).toFixed(2)} </Typography>
            <Button variant='contained' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <Divider/>
        </Box>
    </>
  )
}
