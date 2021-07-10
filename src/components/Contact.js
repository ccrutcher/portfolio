import React, { Component } from 'react';
import './Contact.css';
import EmailForm from './EmailForm/Form.js'



export class Contact extends Component {
  state = {};

  render() {
    return (
      <div className='contact-section' id='contact'>
        <div className="email">
          <EmailForm />
        </div>
        <div className='contact-contents'>
          <div className='contact-outside-links'>

            <a
              className='contact-outside-link'
              href='http://github.com/ccrutcher'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github-square fa-5x contact-github'></i>
            </a>

            <a
              className='contact-outside-link'
              href='https://www.linkedin.com/in/cole-crutcher-4333a0105'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-5x contact-linkedin'></i>
            </a>

          </div>

        <div className='resume'>
          <a
            href='https://pdfhost.io/v/ZhAGNZ7My_Crutcher_Resumepdf.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='contact-button'>Resume</button>
          </a>
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;




