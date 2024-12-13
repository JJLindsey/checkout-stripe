import React, {useContext} from 'react'
import { CartContext } from '../CartContext'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography } from '@mui/material'
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

export default function ProductCard(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)

  return (
    <Box>
        <Card>
            <CardMedia title='card image' image={product.image} sx={{height: 235}}/>
            <CardContent>
                <Typography variant='h5' align='center'>
                    {product.title}
                </Typography>
                <Typography  variant='h6' align='center'>${product.price}</Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'center', pb: 3}}>
                {productQuantity > 0 ?
                <>
                    <Typography variant='body1'>In Cart: </Typography>
                    <IconButton variant='contained' color='primary' size='small' onClick={() => cart.removeOneFromCart(product.id)}><IndeterminateCheckBoxIcon /></IconButton>
                     {productQuantity}
                    <IconButton variant='contained' color='primary' size='small' onClick={() => cart.addOneToCart(product.id)} sx={{mr:1}}><AddBoxSharpIcon /></IconButton>
                    {/* <Button color='error' variant='outlined' onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button> */}
                </>
                :
                <Button onClick={() => cart.addOneToCart(product.id)} variant='outlined' color='success'>Add to Cart</Button>
                }
                
            </CardActions>
        </Card>
    </Box>
  )
}
