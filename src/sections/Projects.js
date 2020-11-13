import React, { Component } from 'react';
import './Project.css';

export class Project extends Component {
  state = {};
  render() {
    return (
      <div className='project-section' id='projects'>
        <div className='project-container container-1'>
          <div className='project project1'>
            <div className='game'>
              <div className='front'>
                <img
                  className='thumbnail'
                  src={require('../imgs/chat-image.JPG')}
                  alt=''
                />
                <h3 className='name'>Chat App</h3>
                <div className='stats'>
                  <p className='madewith'>
                    Made with: React, JavaScript, HTML5, CSS
                  </p>
                </div>
              </div>

              <div className='back'>
                <h3 className='name'>Chat App</h3>
                <div className='project-links'>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT GITHUB LINK
                      href='https://github.com/ccrutcher/chat-app'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-github-button'>
                        Github
                      </button>
                    </a>
                  </div>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT DEMO LINK
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-demo-button'>
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
                <div className='description-container'>
                  <div className='description'>
                    <p>
                    This is a chat app that uses a Firebase realtime database to store and fetch message data. Users can either send and read messages as a guest, or sign in using a Google account. Users may select an existing room to join, or create a new room. All users can currently enter, create, and delete any room. Once a room has been selected, messages appear in sequential order and display a timestamp of when the message was sent.
                    </p>
                  </div>
                </div>
              </div>
              <div className='background'></div>
            </div>
          </div>
          <div className='project project2'>
            <div className='game'>
              <div className='front'>
                <img
                  className='thumbnail'
                  src={require('../imgs/pomodoro-image.JPG')}
                  alt=''
                />
                <h3 className='name'>Pomodoro Study Timer</h3>
                <div className='stats'>
                  <p className='madewith'>
                    Made with: JavaScript, HTML5, CSS
                  </p>
                </div>
              </div>

              <div className='back'>
                <h3 className='name'>Pomodoro Study Timer</h3>
                <div className='project-links'>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT GITHUB LINK
                      href='https://github.com/ccrutcher/pomodoroapp'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-github-button'>
                        Github
                      </button>
                    </a>
                  </div>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT DEMO LINK
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-demo-button'>
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
                <div className='description-container'>
                  <div className='description'>
                    <p>
                    This is a study aid developed to give users greater control over their pomodoro study timer. This was primarily intended for personal use to be able to change the parameters of the study technique.
                    </p>
                  </div>
                </div>
              </div>
              <div className='background'></div>
            </div>
          </div>

        <div className='project project3'>
            <div className='game'>
              <div className='front'>
                <img
                  className='thumbnail'
                  src={require('../imgs/music-image.JPG')}
                  alt=''
                />
                <h3 className='name'>Music Player</h3>
                <div className='stats'>
                  <p className='madewith'>
                    Made with: React, JavaScript, HTML5, CSS
                  </p>
                </div>
              </div>

              <div className='back'>
                <h3 className='name'>Music Player</h3>
                <div className='project-links'>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT GITHUB LINK
                      href='https://github.com/ccrutcher/music-player'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-github-button'>
                        Github
                      </button>
                    </a>
                  </div>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT DEMO LINK
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-demo-button'>
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
                <div className='description-container'>
                  <div className='description'>
                    <p>
                    Users start on the landing page where a welcome message is displayed. From here, using React Router, users may go to the library. The library currently contains two fictitious albums that contain the same five public domain mp3 files. Once an album has been selected, users can click on any song to begin playing the song, then clicking again will pause it. Users may also use the player bar to navigate through the songs. Beneath the player bar is a volume slider.
                    </p>
                  </div>
                </div>
              </div>
              <div className='background'></div>
            </div>
          </div>
          <div className='project project5'>
            <div className='game'>
              <div className='front'>
                <img
                  className='thumbnail'
                  src={require('../imgs/password-image.JPG')}
                  alt=''
                />
                <h3 className='name'>Password Generator</h3>
                <div className='stats'>
                  <p className='madewith'>
                    Made with: JavaScript, HTML5, CSS
                  </p>
                </div>
              </div>

              <div className='back'>
                <h3 className='name'>Password Generator</h3>
                <div className='project-links'>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT GITHUB LINK
                      href='https://github.com/ccrutcher/passwordgenerator'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-github-button'>
                        Github
                      </button>
                    </a>
                  </div>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT DEMO LINK
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-demo-button'>
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
                <div className='description-container'>
                  <div className='description'>
                    <p>
                    This is a password generator. Users select if they would like their password to contain any combination of lowercase letters, uppercase letters, numbers, and symbols. Users may also set the desired length of password. Once the user has generated a password, they may copy it to their clipboard.
                    </p>
                  </div>
                </div>
              </div>
              <div className='background'></div>
            </div>
          </div>
          <div className='project project6'>
            <div className='game'>
              <div className='front'>
                <img
                  className='thumbnail'
                  src={require('../imgs/frequency-image.JPG')}
                  alt=''
                />
                <h3 className='name'>Word Frequency Finder</h3>
                <div className='stats'>
                  <p className='madewith'>
                    Made with: JavaScript, HTML5, CSS
                  </p>
                </div>
              </div>

              <div className='back'>
                <h3 className='name'>Word Frequency Finder</h3>
                <div className='project-links'>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT GITHUB LINK
                      href='https://github.com/ccrutcher/WordFrequency'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-github-button'>
                        Github
                      </button>
                    </a>
                  </div>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT DEMO LINK
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button type='button' className='project-demo-button'>
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
                <div className='description-container'>
                  <div className='description'>
                    <p>
                    An application that takes in a body of text then displays the frequency of each word and character within the text.
                    </p>
                  </div>
                </div>
              </div>
              <div className='background'></div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Project;
