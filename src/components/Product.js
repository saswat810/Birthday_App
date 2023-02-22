import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip}   >
      <Card className="my-3 p-3 rounded">
        <Card.Body onClick={() => setFlip(!flip)}>
          <Card.Text as="h12">click here to see wishes from</Card.Text>
          <Card.Text as="h5" className="float-right" style={{color:"#55595c"}}>
            <br/>
            {product.from}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3 p-3 rounded" onClick={() => setFlip(!flip)}>
        <Card.Img src={product.image} variant="top" style={{height:"50%"}}/>
        <Card.Body>
          <Card.Text as="p" style={{fontSize:"large"}}>
           {product.description}
          </Card.Text>
          <Card.Text as="h8" className="float-right" style={{color:"#55595c"}}>
            {product.from}
          </Card.Text>
        </Card.Body>
      </Card>
    </ReactCardFlip>
  );
};

export default Product;
