import React from 'react'
import { Container, Button } from "react-bootstrap";
import '../styles/Home.css'

const Home = () => {
  return (
    <Container>
        <h1>Welcome to the New Website</h1>
        <p>We are good to go.</p>
        <Button variant='primary'>
            Get Started
        </Button>
    </Container>
  )
}

export default Home