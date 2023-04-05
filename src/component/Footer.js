import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {
    AiFillGithub,
    AiOutlineMail,
    AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return ( 
      <Container fluid className="footer">
        <Row>
          <Col md className="footer-ps">
            <h3>Designed and Developed by Pham Viet Long</h3>
          </Col>
          <Col md className="footer-icon">
            <ul className="icon-list">
            <li className="social-icons">
              <a
                href="https://github.com/daylapvlong"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:phmvtlong@email.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pham-long-1b3591257/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100012864726826"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
          </ul></Col>
        </Row>
      </Container>
     );
}

export default Footer;