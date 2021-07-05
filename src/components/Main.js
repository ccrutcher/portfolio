import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Main.css';

export class Main extends Component {
  state = {};
  render() {
    return (
      <div className='main-section' id='main'>
        <div className='main-container'>
          <div className='main-content'>
            <div className='my-name'>Cole Crutcher</div>
          </div>
          <div className='links'>
            <div className='link-holder'>
              <Link
                className='link'
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button className='main-button'>
                  Projects
                </button>
              </Link>
              <div className='link'>
                <a
                  href='https://pdfhost.io/v/GAMuELE8O_CrutcherResumepdf.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='main-button'>Resume</button>
                </a>
              </div>
              <Link
                className='link'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button className='main-button'>
                  Contact
                </button>
              </Link>
            </div>



            <div className="outside-links">
              <a
                className='outside-link'
                href='http://github.com/ccrutcher'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github-square fa-5x'></i>
              </a>
              <a
                className='outside-link'
                href='https://www.linkedin.com/in/cole-crutcher-4333a0105'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin fa-5x'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
