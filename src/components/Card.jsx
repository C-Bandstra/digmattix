import React from 'react'
import { Box, Typography } from '@mui/material'

const Card = ({ color }) => {
  return (
    <Box sx={{
        border: '1px solid white',
        borderTop: 'none',
        borderRight: 'none',
        boxSizing: 'border-box',
        backgroundColor:'#f57666',
        height: '100%',
        width: '100%',
        backgroundColor: color
    }}>
        <Box sx={{ height: '90%', borderBottom: '1px solid white' }}>
           
        </Box>
        <Box sx={{ height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
             <Typography sx={{ color: 'white', fontSize: '2em', fontWeight: '600', fontStyle: 'italic'}}>View Case Study</Typography>
             <img src='/arrow.png' ></img>
        </Box>
    </Box>
  )
}

export default Card;