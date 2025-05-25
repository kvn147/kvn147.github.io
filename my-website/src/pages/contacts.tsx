import React from 'react';
import linkedin from "../assets/linkedin-icon.svg";
import github from "../assets/github-icon.svg";
import mail from "../assets/mail-icon.svg";

function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <div>
        <img src={linkedin} alt="LinkedIn Icon" />
        <p>LinkedIn</p>
      </div>
        <img src={github} alt="GitHub Icon" />
        <p>Github</p>
      <div>
        <img src={mail} alt="Mail Icon" />
        <p>Mail</p>
      </div>
    </div>
  );    
}

export default Contacts;