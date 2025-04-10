import React, {useContext} from 'react'
import { CartContext } from '../CartContext'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, Rating, Typography } from '@mui/material'
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { FavoriteBorder } from '@mui/icons-material'

export default function ProductCard(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)

  return (
    <Box>
        <Card>
            <IconButton
                sx={{ 
                    position: 'absolute', 
                    //right: 8, 
                    //top: 1, 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    '&:hover': { 
                      backgroundColor: 'rgba(251, 3, 172, 0.66)'
                    }
                }}
            >
                <FavoriteBorder />
            </IconButton>
            <CardMedia title='card image' image={product.image} sx={{height: 235}}/>
            <CardContent>
                <Typography variant='h5' align='center'>
                    {product.title}
                </Typography>
                <Typography  variant='h6' align='center'>${product.price}</Typography>
                <Box
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: 1,
                        mt: 1
                    }}
                >
                <Rating value={product.rating} readOnly />
                <Typography component="legend">reviews</Typography>
                </Box>    
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'center', pb: 3}}>
                {productQuantity > 0 ?
                <>
                    <Typography variant='body1'>In Cart: </Typography>
                    <IconButton variant='contained' color='success' size='small' onClick={() => cart.removeOneFromCart(product.id)}><IndeterminateCheckBoxIcon /></IconButton>
                    {productQuantity}
                    <IconButton variant='contained' color='success' size='small' onClick={() => cart.addOneToCart(product.id)}><AddBoxSharpIcon /></IconButton>
                    {/* <Button color='error' variant='outlined' onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button> */}
                </>
                :
                <Button onClick={() => cart.addOneToCart(product.id)} variant='contained' color='success'>Add to Cart</Button>
                }
                
            </CardActions>
        </Card>
    </Box>
  )
}
