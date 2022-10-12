import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Join = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="example@study.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="홍길동" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default Join;