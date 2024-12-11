import React, {useContext} from 'react'
import { CartContext } from '../CartContext'
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function ProductCard(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)

  return (
    <Card>
        <CardMedia title='card image' />
        <CardContent>
            <Typography variant='h5'>
                {product.title}
            </Typography>
            <Typography>${product.price}</Typography>
        </CardContent>
        <CardActions>
            {productQuantity > 0 ?
            <>
                <Typography>In Cart: {productQuantity}</Typography>
                <IconButton variant='contained' color='primary' size='small' onClick={() => cart.addOneToCart(product.id)}><AddCircleIcon /></IconButton>
                <IconButton variant='contained' color='primary' size='small' onClick={() => cart.removeOneFromCart(product.id)}><RemoveCircleIcon /></IconButton>
                <Button color='error' variant='contained' size='small' onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
            </>
            :
            <Button onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
            }
            
        </CardActions>
    </Card>
  )
}
