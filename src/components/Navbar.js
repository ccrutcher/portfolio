import React, { Component } from 'react';
import { Link } from 'react-scroll';

export class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className='navbar'>
        <Link
          activeClass='active'
          className='nav-link'
          to='main'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Main
        </Link>
        <Link
          activeClass='active'
          className='nav-link'
          to='projects'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass='active'
          className='nav-link'
          to='contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </div>
    );
  }
}

export default Navbar;
