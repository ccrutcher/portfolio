import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Main.css';

export class Main extends Component {
  state = {};
  render() {
    return (
      <div className='main-section' id='main'>
        <div className='main-content'>
          <h4>Cole Crutcher</h4>
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
            <button type='button'> Projects</button>
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
            <button type='button'>Contact Me</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
