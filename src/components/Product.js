// import React from "react";
// import { Card } from "react-bootstrap";

// const Product = ({ product }) => {
//   return (
//     <Card className="my-3 p-3 rounded">
//       <Card.Img src={product.image} variant="top" />
//       <Card.Body>
//         <Card.Title as="div">
//           <strong>{product.description}</strong>
//         </Card.Title>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Product;

import React from 'react'
// import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img src={product.image} variant='top' />
      {/* <Link to={`/product/${product._id}`}>
        
      </Link> */}

      <Card.Body>
      <Card.Text as='div'>
            <strong>{product.description}</strong>
          </Card.Text>
        {/* <Link to={`/product/${product._id}`}>
         
        </Link> */}

        {/* <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>*/}

        <Card.Text as='h6' className="float-right">{product.from}</Card.Text> 
      </Card.Body>
    </Card>
  )
}

export default Product

