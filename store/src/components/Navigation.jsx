import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext'
import { AppBar, Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Close } from '@mui/icons-material'
import CartContents from './CartContents'

export default function Navigation() {
    const cart = useContext(CartContext)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url)
            }
        })
    }

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
    <Box sx={{flexGrow: 1}}>
        <AppBar sx={{backgroundColor: '#fff'}}>
            {/* <Container> */}
                <Toolbar disableGutters>
                    <Typography
                    sx={{flexGrow: 1, ml: 5}}
                    color='#000'
                    //component={Link}
                    to='/'
                    >
                    Clean Skin Store 
                    </Typography>
                    <Box>
                        <Button
                            component={Link}
                            onClick={handleOpen}
                            //to='/cart'
                            variant='contained'
                            color='success'
                            sx={{ my: 2, mr: 8, color: 'white', display: 'block' }}
                        >
                            Cart ({productCount} Items)
                        </Button>
                    </Box>
                </Toolbar>
            {/* </Container> */}
        </AppBar>
    </Box>
    <Dialog open={open} onClose={handleClose} fullWidth sx={{minWidth: '600px'}}>
        <DialogTitle>
            <Typography>Shopping Cart</Typography>
        </DialogTitle>
        <IconButton
            onClick={handleClose}
            sx={{position: 'absolute', right: 8, top: 8}}
        >
            <Close />
        </IconButton>
        <DialogContent dividers>
            {productCount > 0 ?
                <>
                <Typography>Items in cart:</Typography>
                 {cart.items.map((currentProduct, idx) => (
                   <CartContents key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartContents>
                ))}
                <Typography>Total: {cart.getCartTotal().toFixed(2)}</Typography>
                <Button variant='contained' color='success' onClick={checkout}>Purchase Items</Button>
                </>
                :
                <Typography>There are no items in your cart</Typography>
            }
            
        </DialogContent>
    </Dialog>
    </>
  )
}
