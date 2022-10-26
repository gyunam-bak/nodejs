import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Login = () => {
  const navigate  = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);
  const gotoJoin = () => {
    navigate("/join");
  }

  const login = async () => {
    const result = await axios.get('http://localhost:3000/login', {params:{email: email, password: password}})
      .then(({data}) => data);

    if (result.length > 0) {
        console.log("success", result);
        setSuccess(true);
        setDanger(false);
    }
    else {
        console.log(result);
        setSuccess(false);
        setDanger(true);
    }
  }

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="example@study.com" onChange={handleEmailChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
        </Form.Group>

        <Stack direction="horizontal" gap={3}>
          <Button variant="primary" type="button" onClick={login}>
            로그인
          </Button>
          <Button variant="primary" type="button" onClick={gotoJoin}>
            회원가입
          </Button>
        </Stack>
      </Form>
      {success &&
      <Alert variant='success'>
        <p>login 성공</p>
      </Alert>
      }
        {danger &&
            <Alert variant='danger'>
                <p>login 실패</p>
            </Alert>}
    </Container>
  );
};

export default Login;