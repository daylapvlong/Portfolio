import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';


const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5azsjbp', 'template_4vb5gt9', form.current, '7XCtia89rnu3dVQJR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="contact">
      <h1>Contact.</h1>
      <h2>Reach Out to me by form or directly on <a href="mailto:phmvtlong@gmail.com">phmvtlong@gmail.com</a></h2>
      <Container className="contact-form">
        <Form ref={form} onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId='formName'>
                <Form.Control
                  type="text"
                  placeholder='Name'
                  name="user_name"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formEmail'>
                <Form.Control
                  type="text"
                  placeholder='Email'
                  name="user_email"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  name="message"
                  placeholder='Message'
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;