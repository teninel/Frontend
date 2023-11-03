import React, { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import '../styles/SignUp.css';
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: ""
  })

  // const navigate = useNavigate();

  const handleChange = (e) =>{
    
    const{name,value} = e.target;
    setFormData(
      {
        ...formData, [name]:value
      }
    )
  }

  const handleOnsubmit = (e) =>{
    e.preventDefault();
    console.log(formData)
  }
  return (
   <Container>
    <h1> 
      Registration Form
    </h1>
    <Form onSubmit={handleOnsubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='text' name="firstname" value={formData.name} onChange={handleChange} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' name="email" value={formData.email} onChange={handleChange} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' name="password" value={formData.password} onChange={handleChange} required/>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Register
      </Button>
      <p>Already having an account? <Link to="login">Login</Link></p>
    </Form>
   </Container>
  )
}

export default SignUp