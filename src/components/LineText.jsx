import { Box, Typography } from '@mui/material'
import React from 'react'

export const LineText = ({ text, variant }) => {
    const styles = {
        box: {
            borderBottom: '1px solid white'
        },
        text: {
            marginBottom: '-12px',
            fontSize: '3em',
            color: 'white',
            paddingLeft: '3vw',
            fontStyle: 'italic',
        }
    }
  return (
    <Box sx={styles.box}>
        <Typography variant={variant} sx={styles.text}>{text}</Typography>
    </Box>
  )
}
