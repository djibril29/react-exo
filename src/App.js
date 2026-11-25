import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Card, Badge, Button } from 'react-bootstrap'

import Name from './components/Name.js'
import Price from './components/Price.js'
import Description from './components/Description.js'
import Image from './components/Image.js'

// Put your first name here. Leave it as '' to see the fallback greeting.
const firstName = 'Djibril'

function App() {
  // Conditional rendering: name + avatar if firstName is set, fallback otherwise.
  const greeting = (
    <p className="greeting">
      {firstName && (
        <img
          className="greeting-avatar"
          src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${firstName}`}
          alt={firstName}
        />
      )}
      {firstName ? `Hello, ${firstName}!` : 'Hello, there!'}
    </p>
  )

  return (
    <main className="page">
      <Card className="product-card">
        <div className="image-wrap">
          <Image />
          <Badge className="badge-new">NEW</Badge>
        </div>
        <Card.Body className="p-4 text-start">
          <Name />
          <Description />
          <div className="card-bottom">
            <Price />
            <Button className="buy-btn">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>

      {greeting}
    </main>
  )
}

export default App
