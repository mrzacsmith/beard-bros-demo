import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  )
}

export default App
