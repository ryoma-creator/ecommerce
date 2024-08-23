import React from 'react'
import Grid from '@mui/material/Grid'

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.'},
];

const Products = () => {
  return (
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid
                    key={product.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <Product />
                </Grid>
            ))}

        </Grid>
    </main>
  )
}

export default Products