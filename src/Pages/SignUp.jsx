import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User registered:', formData);
    alert('Sign Up Successful!');
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <Container className="my-5 d-flex justify-content-center" >
      <Card style={{ width: '100%', maxWidth: '400px' ,boxShadow:" rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",borderRadius:"25px",backgroundColor:"#b8f4c1"}} className="p-4 shadow-sm">
        <h2 className="mb-4 text-center">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            Register
          </Button>
          Already have an account? <a href="/Login">Login here</a>
        </Form>
      </Card>
    </Container>
  );
}

export default SignUp;


