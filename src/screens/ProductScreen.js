import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col} from 'react-bootstrap'
import products from '../products'

import Product from '../components/Product'

const ProductScreen = ({ match }) => {
 // const product = products.find((p) => p._id === match.params.id)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <h1>Wishes for you</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ProductScreen
