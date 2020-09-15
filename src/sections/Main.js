import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Main.css';

export class Main extends Component {
  state = {};
  render() {
    return (
      <div className='main-section' id='main'>
        <div className='main-content'>
          <div className='my-name'>Cole Crutcher</div>
        </div>
        <div className='links'>
          <Link
            className='link'
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button type='button' className='main-button'>
              {' '}
              Projects
            </button>
          </Link>
          <Link
            className='link'
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button type='button' className='main-button'>
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
