import { Card } from 'react-bootstrap'
import product from '../product.js'

function Image() {
  return (
    <Card.Img
      variant="top"
      src={product.image}
      alt={product.name}
      className="product-image"
    />
  )
}

export default Image
