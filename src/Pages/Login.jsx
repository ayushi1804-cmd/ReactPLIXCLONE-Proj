import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User login:', formData);
    alert('Login Successful!');
    navigate('/');
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card style={{ width: '100%', maxWidth: '400px',boxShadow:" rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",backgroundColor:"#b8f4c1",borderRadius:"35px" }} className="p-4 shadow-sm">
        <h2 className="mb-4 text-center">Login</h2>
        <Form onSubmit={handleSubmit}>
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
            Login
          </Button>
        </Form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </p>
      </Card>
    </Container>
  );
}

export default Login;
