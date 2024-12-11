import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Cancel() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Typography variant='h6' align='center'>You have canceled your Stripe payment</Typography>
        <Button 
          variant="text" 
          color="primary"
          size='large'
          component={Link} 
          to="/" 
          sx={{ mt: 2 }}
        >
        Back to Home Page
        </Button>
    </Box>
  )
}

export default Cancel