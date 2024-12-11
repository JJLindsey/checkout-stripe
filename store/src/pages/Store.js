import React from 'react'

import { productsBeauty } from '../productStore'
import { Grid2 } from '@mui/material'
import ProductCard from '../components/ProductCard'

function Store() {
  return (
    <>
      <h1>Welcome to the Store</h1>
        <Grid2 container spacing={2}>
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