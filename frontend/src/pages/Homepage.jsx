// show produts in the homepage with bootstrap card
import React from 'react';
import { Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

const Homepage = () => {
    return (
        <>
            <h2 className='mt-3 text-center'>Latest Products</h2>
            <Row>
                {products.map(product => (
                    <Product key={product._id}  product={product} />
                ))}
            </Row>
        </>
    );
}

export default Homepage;