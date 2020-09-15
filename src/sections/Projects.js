import React, { Component } from 'react';
import './Project.css';

export class Project extends Component {
  state = {};
  render() {
    return (
      <div className='project-section' id='projects'>
        <div className='project-container project-container1'>
          <div className='project project1'>
            <div class='game'>
              <div class='front'>
                <img
                  class='thumbnail'
                  src={require('../imgs/photo-1534298261662-f8fdd25317db.jpg')}
                  alt='Gwent'
                />
                <h3 class='name'>Project 1</h3>
                <div class='stats'>
                  <p class='madewith'>
                    Made with: React, JavaScript, HTML, CSS
                  </p>
                </div>
              </div>

              <div class='back'>
                <h3 className='name'>Project 1</h3>
                <div class='streaming-info'>
                  <p class='game-stat'>
                    <button type='button' className='button'>
                      Github
                    </button>
                  </p>
                  <p class='game-stat'>
                    <button type='button' className='button'>
                      Github
                    </button>
                  </p>
                </div>
                <div className='description'>
                  <p>
                    This project does stuff This project does stuff This project
                    does stuff This project does stuff This project does stuff
                    This project does stuff This project does stuff This project
                    does stuff This project does stuff This project does stuff
                    This project does stuff This project does stuff
                  </p>
                </div>
              </div>
              <div class='background'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
