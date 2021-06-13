import React from 'react'
import './Project.css';

export default function Project(props) {
  const {img, name, madeWith, githubLink, demoLink, description} = props

    return (
          <div className='project'>
            <div className='game'>
              <div className='front'>
                <img
                  className='thumbnail'
                  src={img}
                  alt=''
                />
                <h3 className='name'>{name}</h3>
                <div className='stats'>
                  <p className='madewith'>
                    {madeWith}
                  </p>
                </div>
              </div>

              <div className='back'>
                <h3 className='name'>{name}</h3>
                <div className='project-links'>
                  <div className='project-link'>
                    <a
                      //PUT PROJECT GITHUB LINK
                      href={githubLink}
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
                      href={demoLink}
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
                        {description}
                    </p>
                  </div>
                </div>
              </div>
              <div className='background'></div>
            </div>
          </div>
    )
}
