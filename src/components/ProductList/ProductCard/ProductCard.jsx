import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const ProductCard = () => {
  return (
    <Card className='{classes.root}'>
        <CardMedia className='{classes.media}'
        image=''
        title={product.name}
        />
            <Typography>
                
            </Typography>
    </Card>
  )
}

export default Product;