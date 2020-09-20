import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
  state = {};
  render() {
    return (
      <div className='contact-section' id='contact'>
        <div className='contact-container'>
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
          <div className='resume'></div>
          <div className='email'></div>
        </div>
      </div>
    );
  }
}

export default Contact;
