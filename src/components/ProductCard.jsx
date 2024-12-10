import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function ProductCard(props) {
    const product = props.product
  return (
    <Card>
        <CardMedia title='card image' />
        <CardContent>
            <Typography variant='h5'>
                {product.title}
            </Typography>
            <Typography>{product.price}</Typography>
        </CardContent>
        <CardActions>
            <Button>Add to Cart</Button>
        </CardActions>
    </Card>
  )
}
