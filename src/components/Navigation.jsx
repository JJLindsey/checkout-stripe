import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
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
                            to='/cart'
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
  )
}
