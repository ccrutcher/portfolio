import React from 'react'
import './Projects.css'
import Project from './Project/Project.js'

import movieImg from '../imgs/movie-swiper.png';
import chatImg from '../imgs/chat-app.png';
import libraryImg from '../imgs/library.png';
import musicImg from '../imgs/music-player.JPG';
import pomodoroImg from '../imgs/pomodoro.JPG';



export default function Projects() {
  return (
      <div className='projects'>
        <Project img={movieImg} name="Movie Swiper" madeWith={"Made with: ReactJS"} githubLink={"https://github.com/ccrutcher/movie-swiper"} demoLink={""} description={"This is a movie-selection app that uses The Movie Database API. Two users are presented with movie options that they may either like or skip. Movies that both users like are displayed on the page."}></Project>
        <Project img={chatImg} name="Chat App" madeWith={"Made with: ReactJS, Firebase"} githubLink={"https://github.com/ccrutcher/chat-app"} demoLink={""} description={"This is a chat app that uses a Firebase realtime database to store and fetch message data. Users can either send and read messages as a guest, or sign in using a Google account. Users may select an existing room to join, or create a new room. All users can currently enter, create, and delete any room. Once a room has been selected, messages appear in sequential order and display a timestamp of when the message was sent."}></Project>
        <Project img={libraryImg} name="Library Catalog" madeWith={"Made with: NodeJS, Express, MongoDB"} githubLink={"https://github.com/ccrutcher/express-locallibrary"} demoLink={""} description={"A Node.js project created with Express. This project uses Mongoose to model data that is then passed to the MongoDB database. The app utilizes the MVC architectural pattern to keep the code structured, with Pug functioning as the templating engine. The app has full CRUD capabilies, allowing users to create and interact with books, authors, genres, and book instances within the database."}></Project>
        <Project img={musicImg} name="Music Player" madeWith={"Made with: ReactJS"} githubLink={"https://github.com/ccrutcher/music-player"} demoLink={""} description={"From the landing page, using React Router, users may go to the library. Once an album has been selected, users can click on any song to begin playing the song, then clicking again will pause it."}></Project>
        <Project img={pomodoroImg} name="Pomodoro Study Timer" madeWith={"Made with: JavaScript, HTML, CSS"} githubLink={"https://github.com/ccrutcher/pomodoroapp"} demoLink={""} description={"Users can set the duration of their work, break, and long-break periods. Once the timer has been started, a random motivational quote will appear, and over time will change to different motivational messages. At the end of each work, break, and long break period, a bell sound will play to inform the user to change their current action. Users can also pause and resume the timer."}></Project>
      </div>
  )
}