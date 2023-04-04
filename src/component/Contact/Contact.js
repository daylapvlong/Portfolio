import React from 'react';
import {
    AiFillGithub,
    AiOutlineMail,
    AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return ( 
        <div className="contact">
            <h2>Reach Out to me!</h2>
            <ul className="footer-icons">
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
          </ul>
        </div>
     );
}

export default Contact;