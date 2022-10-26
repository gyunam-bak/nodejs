import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const Join = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);

    const join = async () => {
        const result = await axios.get('http://localhost:3000/join', {params:{email: email, name: name, password: password}})
          .then(({data}) => data);
console.log(result)
        if (result.insertId > 0) {
        setSuccess(true);
        setDanger(false);
        }
        else {
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
    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="example@study.com" onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="홍길동" onChange={handleNameChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={join}>
          가입하기
        </Button>
      </Form>
      {success &&
      <Alert variant='success'>
        <p>가입 성공</p>
      </Alert>
      }
        {danger &&
            <Alert variant='danger'>
                <p>가입 실패</p>
            </Alert>}
    </Container>
  );
};

export default Join;