import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const Navigate = useNavigate();
    const password = ["ncekaja123", "hasimaja123"];
    const user = [{
        nama: "ncekaja@gmail.com",
        password: "ncekaja123",
        role: "dev",
    },
    {
        nama: "hasimaja@gmail.com",
        password: "hasimaja123",
        role: "admin",
    }]

    
    const userLogin = () => {
        const loginUser = user.find(user => user.nama === email && user.password === pwd);
    
    
    if (loginUser) {
        Navigate("/dashboard");
    } else {
        alert('user atau password salah')
    }
    };

    console.log(user, password);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Form onSubmit={userLogin}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" onChange={(i) => setEmail(i.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(i) => setPwd(i.target.value)}
              />
              <Form.Text className="text-muted">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emojis.
              </Form.Text>
            </Form.Group>
            <button type="submit" className="btn btn-primary">Login</button>
          </Form>
        </div>
      );
  }

export default Login;
