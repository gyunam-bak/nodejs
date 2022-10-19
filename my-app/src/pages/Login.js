import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Login = () => {
  const navigate  = useNavigate();
  const gotoJoin = () => {
    navigate("/join");
  }
  const login = () => {
    axios.get('http://localhost:3000/')
      .then(res => console.log(res))
      .catch()
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="example@study.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Stack direction="horizontal" gap={3}>
          <Button variant="primary" type="submit" onClick={login}>
            로그인
          </Button>
          <Button variant="primary" type="submit" onClick={gotoJoin}>
            회원가입
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default Login;