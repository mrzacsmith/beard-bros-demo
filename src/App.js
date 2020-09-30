import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Beard Bros</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
