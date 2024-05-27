import React from 'react'
import { Col, Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export const Product = ({product}) => {
    console.log(product);
  return (
    <Col key={product._id} sm={12} md={6} lg={4} xl={3} className='mb-3'>
        <Card className='my-3 p-3 rounded h-100'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </div>
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Product;
