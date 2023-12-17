import { Grid } from "@mui/material";
import React from 'react'
import Card from './Card'

export const GridView = ( columnSize, rowSize) => {

  return (
    <Grid container spacing={2}>
        <Grid item container alignItems={'center'} xs={6}>
            <Card />
        </Grid>
        <Grid item container alignItems={'center'} xs={6}>
            <Card />
        </Grid>
        <Grid item container alignItems={'center'} xs={6}>
            <Card />
        </Grid>
        <Grid item container alignItems={'center'} xs={6}>
            <Card />
        </Grid>
    </Grid>
  )
}
