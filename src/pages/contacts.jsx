import React from 'react';
import linkedin from "../assets/linkedin-icon.svg";
import github from "../assets/github-icon.svg";
import mail from "../assets/mail-icon.svg";
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <div>
        <Link to="https://www.linkedin.com/in/kevin1nguyen" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn Icon" />
        </Link>
        <p>LinkedIn</p>
      </div>
      <div>
        <Link to="https://www.github.com/kvn147" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub Icon" />
        </Link>
        <p>Github</p>
      </div>
      <div>
        <Link to="mailto:kevinn24@uw.edu" target="_blank" rel="noopener noreferrer">
        <img src={mail} alt="Mail Icon" />
        </Link>
        <p>Mail</p>
      </div>
    </div>
  );    
}

export default Contacts;