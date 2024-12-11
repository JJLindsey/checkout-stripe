import React from 'react'

import { productsBeauty } from '../productStore'
import { Grid2, Typography } from '@mui/material'
import ProductCard from '../components/ProductCard'

function Store() {
  return (
    <>
      <Typography align='center' variant='h2' sx={{mt: 5}}>Welcome to Clean Skin</Typography>
        <Grid2 container spacing={3} sx={{justifyContent: 'center', mt: 8}}>
            {productsBeauty.map((product, idx) => (
            <Grid2 item size={2}>
                <ProductCard product={product} />
            </Grid2>
            ))}
        </Grid2>
    </>
   
  )
}

export default Store