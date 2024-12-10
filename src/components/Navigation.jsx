import React, { useState } from 'react'
import { AppBar, Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Close } from '@mui/icons-material'

export default function Navigation() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

  return (
    <>
    <Box sx={{flexGrow: 1}}>
        <AppBar sx={{backgroundColor: '#fff'}}>
            {/* <Container> */}
                <Toolbar disableGutters>
                    <Typography
                    sx={{flexGrow: 1, ml: 5}}
                    color='#000'
                    component={Link}
                    to='/'
                    >
                        Store
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
                            Cart
                        </Button>
                    </Box>
                </Toolbar>
            {/* </Container> */}
        </AppBar>
    </Box>
    <Dialog open={open} onClose={handleClose}>
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
            <Typography>Dialog Content</Typography>
        </DialogContent>
    </Dialog>
    </>
  )
}
